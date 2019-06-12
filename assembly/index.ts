import {
  Descriptor, FDStat,
  IO, Console, Random, Date, Process, EnvironEntry, Environ, CommandLine, FileSystem, FileStat
} from "./wasa";

export {
  Descriptor, FDStat,
  IO, Console, Random, Date, Process, EnvironEntry, Environ, CommandLine, FileSystem, FileStat
};

// turn into export
import {
  advice as Advice, filetype as FileType, fdflags as FDFlags, rights as Rights
} from "bindings/wasi";

Console.error("test");
FileSystem.advise(new Descriptor(1), 2, 3, Advice.DONTNEED);

let st = FileSystem.fileType(Descriptor.Stdin());
Console.log(st.toString());

FileSystem.setFlags(Descriptor.Stdout(), FDFlags.SYNC);

let x = FileSystem.fileStat(Descriptor.Stdout());
Console.log(x.creation_time.toString());
