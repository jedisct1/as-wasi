// The entry file of your WebAssembly module.

import {
  args_get,
  args_sizes_get,
  clock_res_get,
  clock_time_get,
  clockid,
  environ_get,
  environ_sizes_get,
  errno,
  fd_advise,
  fd_allocate,
  fd_datasync,
  fd_fdstat_get,
  fd_fdstat_set_flags,
  fd_filestat_get,
  fd_filestat_set_size,
  fd_filestat_set_times,
  fd_prestat_dir_name,
  fd_read,
  fd_write,
  path_open,
  proc_exit,
  random_get,
  fd_close,
  advice,
  fd,
  fdflags,
  fdstat,
  filestat,
  filetype,
  fstflags,
  lookupflags,
  oflags,
  rights,
  filetype,
  filesize
} from "bindings/wasi";

export type Descriptor = fd;
export type FDStat = fdstat;

export const INVALID_DESCRIPTOR: Descriptor = -1;
export const STDIN: Descriptor = 0;
export const STDOUT: Descriptor = 1;
export const STDERR: Descriptor = 2;

export class WASAError extends Error {
  constructor(message: string = "") {
    super(message);
    this.name = "WASAError";
  }
}

export class Filesystem {
  /**
   * A simplified interface to open a file for read operations
   * @param path Path
   * @param dirfd Base directory descriptor (will be automatically set soon)
   */
  static openForRead(path: string, dirfd: Descriptor = 3): Descriptor {
    let fd_lookup_flags = lookupflags.SYMLINK_FOLLOW;
    let fd_oflags: oflags = 0;
    let fd_rights =
      rights.FD_READ | rights.FD_SEEK | rights.FD_TELL | rights.FD_FILESTAT_GET;
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
    if (res != errno.SUCCESS) {
      return INVALID_DESCRIPTOR;
    }
    let fd = load<u32>(fd_buf);

    return fd as Descriptor;
  }

  /**
   * A simplified interface to open a file for write operations
   * @param path Path
   * @param dirfd Base directory descriptor (will be automatically set soon)
   */
  static openForWrite(path: string, dirfd: Descriptor = 3): Descriptor {
    let fd_lookup_flags = lookupflags.SYMLINK_FOLLOW;
    let fd_oflags: oflags = oflags.CREAT;
    let fd_rights =
      rights.FD_WRITE |
      rights.FD_SEEK |
      rights.FD_TELL |
      rights.FD_FILESTAT_GET |
      rights.PATH_CREATE_FILE;
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
    if (res != errno.SUCCESS) {
      return INVALID_DESCRIPTOR;
    }
    let fd = load<u32>(fd_buf);

    return fd as Descriptor;
  }
}

export class IO {
  /**
   * Close a file descriptor
   * @param fd file descriptor
   */
  static close(fd: Descriptor): void {
    fd_close(fd);
  }

  /**
   * Write data to a file descriptor
   * @param fd file descriptor
   * @param data data
   */
  static write(fd: Descriptor, data: Array<u8>): void {
    let data_buf_len = data.length;
    let data_buf = changetype<usize>(new ArrayBuffer(data_buf_len));
    for (let i = 0; i < data_buf_len; i++) {
      store<u8>(data_buf + i, unchecked(data[i]));
    }
    let iov = changetype<usize>(new ArrayBuffer(2 * sizeof<usize>()));
    store<u32>(iov, data_buf);
    store<u32>(iov + sizeof<usize>(), data_buf_len);

    let written_ptr = changetype<usize>(new ArrayBuffer(sizeof<usize>()));
    fd_write(fd, iov, 1, written_ptr);
  }

  /**
   * Write a string to a file descriptor, after encoding it to UTF8
   * @param fd file descriptor
   * @param s string
   * @param newline `true` to add a newline after the string
   */
  static writeString(fd: Descriptor, s: string, newline: bool = false): void {
    if (newline) {
      this.writeStringLn(fd, s);
      return;
    }
    let s_utf8_len: usize = s.lengthUTF8 - 1;
    let s_utf8 = s.toUTF8();
    let iov = changetype<usize>(new ArrayBuffer(2 * sizeof<usize>()));
    store<u32>(iov, s_utf8);
    store<u32>(iov + sizeof<usize>(), s_utf8_len);
    let written_ptr = changetype<usize>(new ArrayBuffer(sizeof<usize>()));
    fd_write(fd, iov, 1, written_ptr);
  }

  /**
   * Write a string to a file descriptor, after encoding it to UTF8, with a newline
   * @param fd file descriptor
   * @param s string
   */
  static writeStringLn(fd: Descriptor, s: string): void {
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
    fd_write(fd, iov, 2, written_ptr);
  }

  /**
   * Read data from a file descriptor
   * @param fd file descriptor
   * @param data existing array to push data to
   * @param chunk_size chunk size (default: 4096)
   */
  static read(
    fd: Descriptor,
    data: Array<u8> = [],
    chunk_size: usize = 4096
  ): Array<u8> | null {
    let data_partial_len = chunk_size;
    let data_partial = changetype<usize>(new ArrayBuffer(data_partial_len));
    let iov = changetype<usize>(new ArrayBuffer(2 * sizeof<usize>()));
    store<u32>(iov, data_partial);
    store<u32>(iov + sizeof<usize>(), data_partial_len);
    let read_ptr = changetype<usize>(new ArrayBuffer(sizeof<usize>()));
    fd_read(fd, iov, 1, read_ptr);
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
   * @param fd file descriptor
   * @param data existing array to push data to
   * @param chunk_size chunk size (default: 4096)
   */
  static readAll(
    fd: Descriptor,
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
    for (;;) {
      if (fd_read(fd, iov, 1, read_ptr) != errno.SUCCESS) {
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
   * @param fd file descriptor
   * @param chunk_size chunk size (default: 4096)
   */

  static readString(fd: Descriptor, chunk_size: usize = 4096): string | null {
    let s_utf8 = IO.readAll(fd);
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

  static advise(fd: Descriptor, offset: u64, len: u64, advice: advice): bool {
    return fd_advise(fd, offset, len, advice) === errno.SUCCESS;
  }

  static allocate(fd: Descriptor, offset: u64, len: u64): bool {
    return fd_allocate(fd, offset, len) === errno.SUCCESS;
  }

  static dataSync(fd: Descriptor): bool {
    return fd_datasync(fd) === errno.SUCCESS;
  }

  static fileType(fd: Descriptor): filetype {
    let st_buf = changetype<usize>(new ArrayBuffer(24));
    if (fd_fdstat_get(fd, changetype<fdstat>(st_buf)) !== errno.SUCCESS) {
      throw new WASAError("Unable to get the file type");
    }
    let file_type: u8 = load<u8>(st_buf);
    return file_type;
  }

  static setFlags(fd: Descriptor, flags: fdflags): bool {
    return fd_fdstat_set_flags(fd, flags) === errno.SUCCESS;
  }

  static fileStat(fd: Descriptor): FileStat {
    let st_buf = changetype<usize>(new ArrayBuffer(56));
    if (fd_filestat_get(fd, changetype<filestat>(st_buf)) !== errno.SUCCESS) {
      throw new WASAError("Unable to get the file information");
    }
    let file_stat = new FileStat();
    file_stat.file_type = load<u8>(st_buf + 16);
    file_stat.file_size = load<u64>(st_buf + 24);
    file_stat.access_time = (load<u64>(st_buf + 32) as f64) / 1e9;
    file_stat.modification_time = (load<u64>(st_buf + 40) as f64) / 1e9;
    file_stat.creation_time = (load<u64>(st_buf + 48) as f64) / 1e9;

    return file_stat;
  }

  static setSize(fd: Descriptor, size: u64): bool {
    return fd_filestat_set_size(fd, size) === errno.SUCCESS;
  }

  static setAccessTime(fd: Descriptor, ts: f64): bool {
    return (
      fd_filestat_set_times(fd, (ts * 1e9) as u64, 0, fstflags.SET_ATIM) ===
      errno.SUCCESS
    );
  }

  static setModificationTime(fd: Descriptor, ts: f64): bool {
    return (
      fd_filestat_set_times(fd, 0, (ts * 1e9) as u64, fstflags.SET_MTIM) ===
      errno.SUCCESS
    );
  }

  static touch(fd: Descriptor): bool {
    return (
      fd_filestat_set_times(
        fd,
        0,
        0,
        fstflags.SET_ATIM_NOW | fstflags.SET_MTIM_NOW
      ) === errno.SUCCESS
    );
  }

  static dirName(fd: Descriptor): String {
    let path_max: usize = 4096;
    for (;;) {
      let path_buf = changetype<usize>(new ArrayBuffer(path_max));
      let ret = fd_prestat_dir_name(fd, path_buf, path_max);
      if (ret === errno.NAMETOOLONG) {
        path_max = path_max * 2;
        continue;
      }
      let path_len = 0;
      while (load<u8>(path_buf + path_len) != 0) {
        path_len++;
      }
      return String.fromUTF8(path_buf, path_len);
    }
  }
}

export class FileStat {
  file_type: filetype;
  file_size: filesize;
  access_time: f64;
  modification_time: f64;
  creation_time: f64;
}

@global
export class Console {
  /**
   * Write a string to the console
   * @param s string
   * @param newline `false` to avoid inserting a newline after the string
   */
  static write(s: string, newline: bool = true): void {
    IO.writeString(STDOUT, s, newline);
  }

  /**
   * Read an UTF8 string from the console, convert it to a native string
   */
  static readAll(): string | null {
    return IO.readString(STDIN);
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
    IO.writeString(STDERR, s, newline);
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
      if (random_get(ptr, chunk) != errno.SUCCESS) {
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
  constructor(readonly key: string, readonly value: string) {}
}

export class Environ {
  env: Array<EnvironEntry>;

  constructor() {
    this.env = [];
    let count_and_size = changetype<usize>(
      new ArrayBuffer(2 * sizeof<usize>())
    );
    let ret = environ_sizes_get(count_and_size, count_and_size + 4);
    if (ret != errno.SUCCESS) {
      abort();
    }
    let count = load<usize>(count_and_size);
    let size = load<usize>(count_and_size + sizeof<usize>());
    let env_ptrs = changetype<usize>(
      new ArrayBuffer((count + 1) * sizeof<usize>())
    );
    let buf = changetype<usize>(new ArrayBuffer(size));
    if (environ_get(env_ptrs, buf) != errno.SUCCESS) {
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
      if (this.env[i].key == key) {
        return this.env[i].value;
      }
    }
    return null;
  }
}

export class CommandLine {
  args: Array<String>;

  constructor() {
    this.args = [];
    let count_and_size = changetype<usize>(
      new ArrayBuffer(2 * sizeof<usize>())
    );
    let ret = args_sizes_get(count_and_size, count_and_size + 4);
    if (ret != errno.SUCCESS) {
      abort();
    }
    let count = load<usize>(count_and_size);
    let size = load<usize>(count_and_size + sizeof<usize>());
    let env_ptrs = changetype<usize>(
      new ArrayBuffer((count + 1) * sizeof<usize>())
    );
    let buf = changetype<usize>(new ArrayBuffer(size));
    if (args_get(env_ptrs, buf) != errno.SUCCESS) {
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
  all(): Array<String> {
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
    while (load<u8>(cstring + size) != 0) {
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
