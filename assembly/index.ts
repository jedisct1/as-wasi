import {
  Descriptor, FDStat,
  STDIN, STDOUT, STDERR,
  IO, Console, Random, Date, Process, EnvironEntry, Environ, CommandLine, Filesystem, FileStat
} from "./wasa";

export {
  Descriptor, FDStat,
  STDIN, STDOUT, STDERR,
  IO, Console, Random, Date, Process, EnvironEntry, Environ, CommandLine, Filesystem, FileStat
};

// turn into export
import {
  advice as Advice, filetype as FileType, fdflags as FDFlags, rights as Rights
} from "bindings/wasi";

Console.error("test");
IO.advise(1, 2, 3, Advice.DONTNEED);

let st = IO.fileType(0);
Console.log(st.toString());

IO.setFlags(1, FDFlags.SYNC);

let x = IO.fileStat(1);
Console.log(x.creation_time.toString());