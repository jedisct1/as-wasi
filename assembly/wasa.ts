// The entry file of your WebAssembly module.

import {
  advice,
  args_get,
  args_sizes_get,
  clock_res_get,
  clock_time_get,
  clockid,
  dircookie,
  environ_get,
  environ_sizes_get,
  errno,
  fd_advise,
  fd_allocate,
  fd_close,
  fd_datasync,
  fd_fdstat_get,
  fd_fdstat_set_flags,
  fd_filestat_get,
  fd_filestat_set_size,
  fd_filestat_set_times,
  fd_prestat_dir_name,
  fd_read,
  fd_readdir,
  fd_seek,
  fd_sync,
  fd_tell,
  fd_write,
  fd,
  fdflags,
  fdstat,
  whence,
  filesize,
  filestat,
  filetype,
  fstflags,
  lookupflags,
  oflags,
  path_create_directory,
  path_filestat_get,
  path_link,
  path_open,
  path_rename,
  path_remove_directory,
  path_symlink,
  path_unlink_file,
  proc_exit,
  random_get,
  rights,
} from "bindings/wasi";

export type FDStat = fdstat;
export type FDWhence = whence;

export class WASAError extends Error {
  constructor(message: string = "") {
    super(message);
    this.name = "WASAError";
  }
}

export class FileStat {
  file_type: filetype;
  file_size: filesize;
  access_time: f64;
  modification_time: f64;
  creation_time: f64;

  constructor(st_buf: usize) {
    this.file_type = load<u8>(st_buf + 16);
    this.file_size = load<u64>(st_buf + 24);
    this.access_time = (load<u64>(st_buf + 32) as f64) / 1e9;
    this.modification_time = (load<u64>(st_buf + 40) as f64) / 1e9;
    this.creation_time = (load<u64>(st_buf + 48) as f64) / 1e9;
  }
}

export class Descriptor {
  static Invalid(): Descriptor { return new Descriptor(-1); };
  static Stdin(): Descriptor { return new Descriptor(0); };
  static Stdout(): Descriptor { return new Descriptor(1); };
  static Stderr(): Descriptor { return new Descriptor(2); };

  constructor(readonly rawfd: fd) { }

  advise(offset: u64, len: u64, advice: advice): bool {
    return fd_advise(this.rawfd, offset, len, advice) === errno.SUCCESS;
  }

  allocate(offset: u64, len: u64): bool {
    return fd_allocate(this.rawfd, offset, len) === errno.SUCCESS;
  }

  fdatasync(): bool {
    return fd_datasync(this.rawfd) === errno.SUCCESS;
  }

  fsync(): bool {
    return fd_sync(this.rawfd) === errno.SUCCESS;
  }

  fileType(): filetype {
    let st_buf = changetype<usize>(new ArrayBuffer(24));
    if (fd_fdstat_get(this.rawfd, changetype<fdstat>(st_buf)) !== errno.SUCCESS) {
      throw new WASAError("Unable to get the file type");
    }
    let file_type: u8 = load<u8>(st_buf);

    return file_type;
  }

  setFlags(flags: fdflags): bool {
    return fd_fdstat_set_flags(this.rawfd, flags) === errno.SUCCESS;
  }

  stat(): FileStat {
    let st_buf = changetype<usize>(new ArrayBuffer(56));
    if (fd_filestat_get(this.rawfd, changetype<filestat>(st_buf)) !== errno.SUCCESS) {
      throw new WASAError("Unable to get the file information");
    }
    return new FileStat(st_buf);
  }

  ftruncate(size: u64 = 0): bool {
    return fd_filestat_set_size(this.rawfd, size) === errno.SUCCESS;
  }

  fatime(ts: f64): bool {
    return (
      fd_filestat_set_times(this.rawfd, (ts * 1e9) as u64, 0, fstflags.SET_ATIM) ===
      errno.SUCCESS
    );
  }

  fmtime(ts: f64): bool {
    return (
      fd_filestat_set_times(this.rawfd, 0, (ts * 1e9) as u64, fstflags.SET_MTIM) ===
      errno.SUCCESS
    );
  }

  futimes(atime: f64, mtime: f64): bool {
    return (
      fd_filestat_set_times(this.rawfd, (atime * 1e9) as u64, (mtime * 1e9) as u64,
        fstflags.SET_ATIM | fstflags.SET_ATIM) === errno.SUCCESS
    );
  }

  touch(): bool {
    return (
      fd_filestat_set_times(
        this.rawfd,
        0,
        0,
        fstflags.SET_ATIM_NOW | fstflags.SET_MTIM_NOW
      ) === errno.SUCCESS
    );
  }

  dirName(): String {
    let path_max: usize = 4096;
    for (; ;) {
      let path_buf = changetype<usize>(new ArrayBuffer(path_max));
      let ret = fd_prestat_dir_name(this.rawfd, path_buf, path_max);
      if (ret === errno.NAMETOOLONG) {
        path_max = path_max * 2;
        continue;
      }
      let path_len = 0;
      while (load<u8>(path_buf + path_len) !== 0) {
        path_len++;
      }
      return String.fromUTF8(path_buf, path_len);
    }
  }

  /**
   * Close a file descriptor
   */
  close(): void {
    fd_close(this.rawfd);
  }

  /**
   * Write data to a file descriptor
   * @param data data
   */
  write(data: Array<u8>): void {
    let data_buf_len = data.length;
    let data_buf = changetype<usize>(new ArrayBuffer(data_buf_len));
    for (let i = 0; i < data_buf_len; i++) {
      store<u8>(data_buf + i, unchecked(data[i]));
    }
    let iov = changetype<usize>(new ArrayBuffer(2 * sizeof<usize>()));
    store<u32>(iov, data_buf);
    store<u32>(iov + sizeof<usize>(), data_buf_len);

    let written_ptr = changetype<usize>(new ArrayBuffer(sizeof<usize>()));
    fd_write(this.rawfd, iov, 1, written_ptr);
  }

  /**
     * Write a string to a file descriptor, after encoding it to UTF8
     * @param s string
     * @param newline `true` to add a newline after the string
     */
  writeString(s: string, newline: bool = false): void {
    if (newline) {
      this.writeStringLn(s);
      return;
    }
    let s_utf8_len: usize = s.lengthUTF8 - 1;
    let s_utf8 = s.toUTF8();
    let iov = changetype<usize>(new ArrayBuffer(2 * sizeof<usize>()));
    store<u32>(iov, s_utf8);
    store<u32>(iov + sizeof<usize>(), s_utf8_len);
    let written_ptr = changetype<usize>(new ArrayBuffer(sizeof<usize>()));
    fd_write(this.rawfd, iov, 1, written_ptr);
  }

  /**
   * Write a string to a file descriptor, after encoding it to UTF8, with a newline
   * @param s string
   */
  writeStringLn(s: string): void {
    let s_utf8_len: usize = s.lengthUTF8 - 1;
    let s_utf8 = s.toUTF8();
    let iov = changetype<usize>(new ArrayBuffer(4 * sizeof<usize>()));
    store<u32>(iov, s_utf8);
    store<u32>(iov + sizeof<usize>(), s_utf8_len);
    let lf = changetype<usize>(new ArrayBuffer(1));
    store<u8>(lf, 10);
    store<u32>(iov + sizeof<usize>() * 2, lf);
    store<u32>(iov + sizeof<usize>() * 3, 1);
    let written_ptr = changetype<usize>(new ArrayBuffer(sizeof<usize>()));
    fd_write(this.rawfd, iov, 2, written_ptr);
  }

  /**
   * Read data from a file descriptor
   * @param data existing array to push data to
   * @param chunk_size chunk size (default: 4096)
   */
  read(
    data: Array<u8> = [],
    chunk_size: usize = 4096
  ): Array<u8> | null {
    let data_partial_len = chunk_size;
    let data_partial = changetype<usize>(new ArrayBuffer(data_partial_len));
    let iov = changetype<usize>(new ArrayBuffer(2 * sizeof<usize>()));
    store<u32>(iov, data_partial);
    store<u32>(iov + sizeof<usize>(), data_partial_len);
    let read_ptr = changetype<usize>(new ArrayBuffer(sizeof<usize>()));
    fd_read(this.rawfd, iov, 1, read_ptr);
    let read = load<usize>(read_ptr);
    if (read > 0) {
      for (let i: usize = 0; i < read; i++) {
        data.push(load<u8>(data_partial + i));
      }
    }
    if (read <= 0) {
      return null;
    }
    return data;
  }

  /**
   * Read from a file descriptor until the end of the stream
   * @param data existing array to push data to
   * @param chunk_size chunk size (default: 4096)
   */
  readAll(
    data: Array<u8> = [],
    chunk_size: usize = 4096
  ): Array<u8> | null {
    let data_partial_len = chunk_size;
    let data_partial = changetype<usize>(new ArrayBuffer(data_partial_len));
    let iov = changetype<usize>(new ArrayBuffer(2 * sizeof<usize>()));
    store<u32>(iov, data_partial);
    store<u32>(iov + sizeof<usize>(), data_partial_len);
    let read_ptr = changetype<usize>(new ArrayBuffer(sizeof<usize>()));
    let read: usize = 0;
    for (; ;) {
      if (fd_read(this.rawfd, iov, 1, read_ptr) !== errno.SUCCESS) {
        break;
      }
      read = load<usize>(read_ptr);
      if (read <= 0) {
        break;
      }
      for (let i: usize = 0; i < read; i++) {
        data.push(load<u8>(data_partial + i));
      }
    }
    if (read < 0) {
      return null;
    }
    return data;
  }

  /**
   * Read an UTF8 string from a file descriptor, convert it to a native string
   * @param chunk_size chunk size (default: 4096)
   */
  readString(chunk_size: usize = 4096): string | null {
    let s_utf8 = this.readAll();
    if (s_utf8 === null) {
      return null;
    }
    let s_utf8_len = s_utf8.length;
    let s_utf8_buf = changetype<usize>(new ArrayBuffer(s_utf8_len));
    for (let i = 0; i < s_utf8_len; i++) {
      store<u8>(s_utf8_buf + i, s_utf8[i]);
    }
    let s = String.fromUTF8(s_utf8_buf, s_utf8.length);

    return s;
  }

  seek(off: u64, w: FDWhence): bool {
    let fodder = changetype<usize>(new ArrayBuffer(8));
    let res = fd_seek(this.rawfd, off, w, fodder);

    return res === errno.SUCCESS;
  }

  tell(): u64 {
    let buf_off = changetype<usize>(new ArrayBuffer(8));
    let res = fd_tell(this.rawfd, buf_off);
    if (res !== errno.SUCCESS) {
      abort();
    }
    return load<u64>(buf_off);
  }
}

export const INVALID_DESCRIPTOR = Descriptor.Invalid();
export const STDIN = Descriptor.Stdin();
export const STDOUT = Descriptor.Stdout();
export const STDERR = Descriptor.Stderr();

export class FileSystem {
  protected static dirfdForPath(path: string): fd {
    return 3;
  }

  static open(path: string, flags: string = "r"): Descriptor | null {
    let dirfd = this.dirfdForPath(path);
    let fd_lookup_flags = lookupflags.SYMLINK_FOLLOW;
    let fd_oflags: u16 = 0;
    let fd_rights: u64 = 0;
    if (flags === "r") {
      fd_rights = rights.FD_READ | rights.FD_SEEK | rights.FD_TELL | rights.FD_FILESTAT_GET | rights.FD_READDIR;
    } else if (flags === "r+") {
      fd_rights =
        rights.FD_READ | rights.FD_SEEK | rights.FD_TELL | rights.FD_FILESTAT_GET | rights.FD_WRITE |
        rights.FD_SEEK | rights.FD_TELL | rights.FD_FILESTAT_GET | rights.PATH_CREATE_FILE;
    } else if (flags === "w") {
      fd_oflags = oflags.CREAT | oflags.TRUNC;
      fd_rights = rights.FD_WRITE | rights.FD_SEEK | rights.FD_TELL | rights.FD_FILESTAT_GET | rights.PATH_CREATE_FILE;
    } else if (flags === "wx") {
      fd_oflags = oflags.CREAT | oflags.TRUNC | oflags.EXCL;
      fd_rights = rights.FD_WRITE | rights.FD_SEEK | rights.FD_TELL | rights.FD_FILESTAT_GET | rights.PATH_CREATE_FILE;
    } else if (flags === "w+") {
      fd_oflags = oflags.CREAT | oflags.TRUNC;
      fd_rights =
        rights.FD_READ | rights.FD_SEEK | rights.FD_TELL | rights.FD_FILESTAT_GET | rights.FD_WRITE |
        rights.FD_SEEK | rights.FD_TELL | rights.FD_FILESTAT_GET | rights.PATH_CREATE_FILE;
    } else if (flags === "xw+") {
      fd_oflags = oflags.CREAT | oflags.TRUNC | oflags.EXCL;
      fd_rights =
        rights.FD_READ | rights.FD_SEEK | rights.FD_TELL | rights.FD_FILESTAT_GET | rights.FD_WRITE |
        rights.FD_SEEK | rights.FD_TELL | rights.FD_FILESTAT_GET | rights.PATH_CREATE_FILE;
    } else {
      return null;
    }
    let fd_rights_inherited = fd_rights;
    let fd_flags: fdflags = 0;
    let path_utf8_len: usize = path.lengthUTF8 - 1;
    let path_utf8 = path.toUTF8();
    let fd_buf = changetype<usize>(new ArrayBuffer(sizeof<u32>()));
    let res = path_open(
      dirfd as fd,
      fd_lookup_flags,
      path_utf8,
      path_utf8_len,
      fd_oflags,
      fd_rights,
      fd_rights_inherited,
      fd_flags,
      fd_buf
    );
    if (res !== errno.SUCCESS) {
      return null;
    }
    let fd = load<u32>(fd_buf);

    return new Descriptor(fd);
  }

  static mkdir(path: string): bool {
    let dirfd = this.dirfdForPath(path);
    let path_utf8_len: usize = path.lengthUTF8 - 1;
    let path_utf8 = path.toUTF8();
    let res = path_create_directory(dirfd, path_utf8, path_utf8_len);

    return res === errno.SUCCESS;
  }

  static exists(path: string): bool {
    let dirfd = this.dirfdForPath(path);
    let path_utf8_len: usize = path.lengthUTF8 - 1;
    let path_utf8 = path.toUTF8();
    let fd_lookup_flags = lookupflags.SYMLINK_FOLLOW;
    let st_buf = changetype<usize>(new ArrayBuffer(56));
    let res = path_filestat_get(dirfd, fd_lookup_flags, path_utf8, path_utf8_len,
      changetype<filestat>(st_buf));

    return res === errno.SUCCESS;
  }

  static link(old_path: string, new_path: string): bool {
    let old_dirfd = this.dirfdForPath(old_path);
    let old_path_utf8_len: usize = old_path.lengthUTF8 - 1;
    let old_path_utf8 = old_path.toUTF8();
    let new_dirfd = this.dirfdForPath(new_path);
    let new_path_utf8_len: usize = new_path.lengthUTF8 - 1;
    let new_path_utf8 = new_path.toUTF8();
    let fd_lookup_flags = lookupflags.SYMLINK_FOLLOW;
    let res = path_link(old_dirfd, fd_lookup_flags, old_path_utf8, old_path_utf8_len,
      new_dirfd, new_path_utf8, new_path_utf8_len);

    return res === errno.SUCCESS;
  }

  static symlink(old_path: string, new_path: string): bool {
    let old_path_utf8_len: usize = old_path.lengthUTF8 - 1;
    let old_path_utf8 = old_path.toUTF8();
    let new_dirfd = this.dirfdForPath(new_path);
    let new_path_utf8_len: usize = new_path.lengthUTF8 - 1;
    let new_path_utf8 = new_path.toUTF8();
    let res = path_symlink(old_path_utf8, old_path_utf8_len,
      new_dirfd, new_path_utf8, new_path_utf8_len);

    return res === errno.SUCCESS;
  }

  static unlink(path: string): bool {
    let dirfd = this.dirfdForPath(path);
    let path_utf8_len: usize = path.lengthUTF8 - 1;
    let path_utf8 = path.toUTF8();
    let res = path_unlink_file(dirfd, path_utf8, path_utf8_len);

    return res === errno.SUCCESS;
  }

  static rmdir(path: string): bool {
    let dirfd = this.dirfdForPath(path);
    let path_utf8_len: usize = path.lengthUTF8 - 1;
    let path_utf8 = path.toUTF8();
    let res = path_remove_directory(dirfd, path_utf8, path_utf8_len);

    return res === errno.SUCCESS;
  }

  static stat(path: string): FileStat {
    let dirfd = this.dirfdForPath(path);
    let path_utf8_len: usize = path.lengthUTF8 - 1;
    let path_utf8 = path.toUTF8();
    let fd_lookup_flags = lookupflags.SYMLINK_FOLLOW;
    let st_buf = changetype<usize>(new ArrayBuffer(56));
    if (path_filestat_get(dirfd, fd_lookup_flags, path_utf8, path_utf8_len, changetype<filestat>(st_buf)) !== errno.SUCCESS) {
      throw new WASAError("Unable to get the file information");
    }
    return new FileStat(st_buf);
  }

  static lstat(path: string): FileStat {
    let dirfd = this.dirfdForPath(path);
    let path_utf8_len: usize = path.lengthUTF8 - 1;
    let path_utf8 = path.toUTF8();
    let fd_lookup_flags = 0;
    let st_buf = changetype<usize>(new ArrayBuffer(56));
    if (path_filestat_get(dirfd, fd_lookup_flags, path_utf8, path_utf8_len, changetype<filestat>(st_buf)) !== errno.SUCCESS) {
      throw new WASAError("Unable to get the file information");
    }
    return new FileStat(st_buf);
  }

  static rename(old_path: string, new_path: string): bool {
    let old_dirfd = this.dirfdForPath(old_path);
    let old_path_utf8_len: usize = old_path.lengthUTF8 - 1;
    let old_path_utf8 = old_path.toUTF8();
    let new_dirfd = this.dirfdForPath(new_path);
    let new_path_utf8_len: usize = new_path.lengthUTF8 - 1;
    let new_path_utf8 = new_path.toUTF8();
    let res = path_rename(old_dirfd, old_path_utf8, old_path_utf8_len,
      new_dirfd, new_path_utf8, new_path_utf8_len);

    return res === errno.SUCCESS;
  }

  static readdir(path: string): Array<string> | null {
    let fd = this.open(path, "r");
    if (fd === null) {
      return null;
    }
    let out = new Array<string>();
    let buf = null;
    let buf_size = 4096;
    let buf_used_p = changetype<usize>(new ArrayBuffer(4));
    let buf_used = 0;
    for (; ;) {
      buf = changetype<usize>(new ArrayBuffer(buf_size));
      __retain(buf);
      if (fd_readdir(fd.rawfd, buf, buf_size, 0 as dircookie, buf_used_p) !== errno.SUCCESS) {
        fd.close();
      }
      buf_used = load<u32>(buf_used_p);
      if (buf_used < buf_size) {
        break;
      }
      buf_size <<= 1;
      __release(buf);
    }
    let offset = 0;
    while (offset < buf_used) {
      offset += 16;
      let name_len = load<u32>(buf + offset);
      offset += 8;
      if (offset + name_len > buf_used) {
        return null;
      }
      let name = String.fromUTF8(buf + offset, name_len);
      Console.log(name);
      out.push(name);
      offset += name_len;
    }
    __release(buf);
    fd.close();

    return out;
  }
}

@global
export class Console {
  /**
   * Write a string to the console
   * @param s string
   * @param newline `false` to avoid inserting a newline after the string
   */
  static write(s: string, newline: bool = true): void {
    STDOUT.writeString(s, newline);
  }

  /**
   * Read an UTF8 string from the console, convert it to a native string
   */
  static readAll(): string | null {
    return STDIN.readString();
  }

  /**
   * Alias for `Console.write()`
   */
  static log(s: string): void {
    this.write(s);
  }

  /**
   * Write an error to the console
   * @param s string
   * @param newline `false` to avoid inserting a newline after the string
   */
  static error(s: string, newline: bool = true): void {
    STDERR.writeString(s, newline);
  }
}

export class Random {
  /**
   * Fill a buffer with random data
   * @param buffer An array buffer
   */
  static randomFill(buffer: ArrayBuffer): void {
    let len = buffer.byteLength;
    let ptr = changetype<usize>(buffer);
    while (len > 0) {
      let chunk = min(len, 256);
      if (random_get(ptr, chunk) !== errno.SUCCESS) {
        abort();
      }
      len -= chunk;
      ptr += chunk;
    }
  }

  /**
   * Return an array of random bytes
   * @param len length
   */
  static randomBytes(len: usize): Uint8Array {
    let array = new Uint8Array(len);
    this.randomFill(array.buffer);
    return array;
  }
}

export class Date {
  /**
   * Return the current timestamp, as a number of milliseconds since the epoch
   */
  static now(): f64 {
    let time_ptr = changetype<usize>(new ArrayBuffer(8));
    clock_time_get(clockid.REALTIME, 1000, time_ptr);
    let unix_ts = load<u64>(time_ptr);

    return (unix_ts as f64) / 1000.0;
  }
}

export class Performance {
  static now(): f64 {
    let time_ptr = changetype<usize>(new ArrayBuffer(8));
    clock_res_get(clockid.MONOTONIC, time_ptr);
    let res_ts = load<u64>(time_ptr);

    return res_ts as f64;
  }
}

export class Process {
  /**
   * Cleanly terminate the current process
   * @param status exit code
   */
  static exit(status: u32): void {
    proc_exit(status);
  }
}

export class EnvironEntry {
  constructor(readonly key: string, readonly value: string) { }
}

export class Environ {
  env: Array<EnvironEntry>;

  constructor() {
    this.env = [];
    let count_and_size = changetype<usize>(
      new ArrayBuffer(2 * sizeof<usize>())
    );
    let ret = environ_sizes_get(count_and_size, count_and_size + 4);
    if (ret !== errno.SUCCESS) {
      abort();
    }
    let count = load<usize>(count_and_size);
    let size = load<usize>(count_and_size + sizeof<usize>());
    let env_ptrs = changetype<usize>(
      new ArrayBuffer((count + 1) * sizeof<usize>())
    );
    let buf = changetype<usize>(new ArrayBuffer(size));
    if (environ_get(env_ptrs, buf) !== errno.SUCCESS) {
      abort();
    }
    for (let i: usize = 0; i < count; i++) {
      let env_ptr = load<usize>(env_ptrs + i * sizeof<usize>());
      let env_ptr_split = StringUtils.fromCString(env_ptr).split("=", 2);
      let key = env_ptr_split[0];
      let value = env_ptr_split[1];
      this.env.push(new EnvironEntry(key, value));
    }
  }

  /**
   *  Return all environment variables
   */
  all(): Array<EnvironEntry> {
    return this.env;
  }

  /**
   * Return the value for an environment variable
   * @param key environment variable name
   */
  get(key: string): string | null {
    for (let i = 0, j = this.env.length; i < j; i++) {
      if (this.env[i].key === key) {
        return this.env[i].value;
      }
    }
    return null;
  }
}

export class CommandLine {
  args: Array<string>;

  constructor() {
    this.args = [];
    let count_and_size = changetype<usize>(
      new ArrayBuffer(2 * sizeof<usize>())
    );
    let ret = args_sizes_get(count_and_size, count_and_size + 4);
    if (ret !== errno.SUCCESS) {
      abort();
    }
    let count = load<usize>(count_and_size);
    let size = load<usize>(count_and_size + sizeof<usize>());
    let env_ptrs = changetype<usize>(
      new ArrayBuffer((count + 1) * sizeof<usize>())
    );
    let buf = changetype<usize>(new ArrayBuffer(size));
    if (args_get(env_ptrs, buf) !== errno.SUCCESS) {
      abort();
    }
    for (let i: usize = 0; i < count; i++) {
      let env_ptr = load<usize>(env_ptrs + i * sizeof<usize>());
      let arg = StringUtils.fromCString(env_ptr);
      this.args.push(arg);
    }
  }

  /**
   * Return all the command-line arguments
   */
  all(): Array<string> {
    return this.args;
  }

  /**
   * Return the i-th command-ine argument
   * @param i index
   */
  get(i: usize): string | null {
    let args_len: usize = this.args[0].length;
    if (i < args_len) {
      return this.args[i];
    }
    return null;
  }
}

class StringUtils {
  static fromCString(cstring: usize): string {
    let size = 0;
    while (load<u8>(cstring + size) !== 0) {
      size++;
    }
    return String.fromUTF8(cstring, size);
  }
}

@global
export function wasi_abort(
  message: string | null = "",
  _fileName: string | null = "",
  _lineNumber: u32 = 0,
  _columnNumber: u32 = 0
): void {
  Console.error(message!);
  proc_exit(255);
}
