import {
  Descriptor, FDStat,
  STDIN, STDOUT, STDERR,
  IO, Console, Random, Date, Process, EnvironEntry, Environ, CommandLine, FileSystem, FileStat
} from "./wasa";

export {
  Descriptor, FDStat,
  STDIN, STDOUT, STDERR,
  IO, Console, Random, Date, Process, EnvironEntry, Environ, CommandLine, FileSystem, FileStat
};

// turn into export
import {
  advice as Advice, filetype as FileType, fdflags as FDFlags, rights as Rights
} from "bindings/wasi";

Console.error("test");
FileSystem.advise(1, 2, 3, Advice.DONTNEED);

let st = FileSystem.fileType(0);
Console.log(st.toString());

FileSystem.setFlags(1, FDFlags.SYNC);

let x = FileSystem.fileStat(1);
Console.log(x.creation_time.toString());
