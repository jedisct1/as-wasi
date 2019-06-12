import {
  INVALID_DESCRIPTOR, STDIN, STDOUT, STDERR,
  Descriptor, FDStat,
  Console, Random, Date, Process, EnvironEntry, Environ, CommandLine, FileSystem, FileStat
} from "./wasa";

export {
  INVALID_DESCRIPTOR, STDIN, STDOUT, STDERR,
  Descriptor, FDStat,
  Console, Random, Date, Process, EnvironEntry, Environ, CommandLine, FileSystem, FileStat
};

// turn into export
import {
  advice as Advice, filetype as FileType, fdflags as FDFlags, rights as Rights
} from "bindings/wasi";

Console.error("test");
let fd = new Descriptor(1);
fd.advise(2, 3, Advice.DONTNEED);

let st = STDIN.fileType();
Console.log(st.toString());

STDOUT.setFlags(FDFlags.SYNC);

let x = STDOUT.fileStat();
Console.log(x.creation_time.toString());
