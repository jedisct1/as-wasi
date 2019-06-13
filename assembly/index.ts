import {
  INVALID_DESCRIPTOR, STDIN, STDOUT, STDERR,
  Descriptor, FDStat, FDWhence,
  Console, Random, Date, Process, EnvironEntry, Environ, CommandLine, FileSystem, FileStat
} from "./wasa";

export {
  INVALID_DESCRIPTOR, STDIN, STDOUT, STDERR,
  Descriptor, FDStat, FDWhence,
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

let x = STDOUT.stat();
Console.log(x.creation_time.toString());

let z = FileSystem.readdir("assembly");
for (let i = 0; i < z!.length; i++) {
  Console.log(z![i]);
}