<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [as-wasi](#as-wasi)
- [as-wasi](#as-wasi-1)
  - [Installation](#installation)
  - [Quick Start](#quick-start)
  - [Reference API Docs](#reference-api-docs)
  - [Projects using as-wasi](#projects-using-as-wasi)
  - [Contributing](#contributing)
  - [License](#license)
- [Classes](#classes)
  - [Class: CommandLine](#class-commandline)
    - [Hierarchy](#hierarchy)
    - [Index](#index)
    - [Constructors](#constructors)
    - [Properties](#properties)
    - [Methods](#methods)
  - [Class: Console](#class-console)
    - [Hierarchy](#hierarchy-1)
    - [Index](#index-1)
    - [Methods](#methods-1)
  - [Class: Date](#class-date)
    - [Hierarchy](#hierarchy-2)
    - [Index](#index-2)
    - [Methods](#methods-2)
  - [Class: Descriptor](#class-descriptor)
    - [Hierarchy](#hierarchy-3)
    - [Index](#index-3)
    - [Constructors](#constructors-1)
    - [Accessors](#accessors)
    - [Methods](#methods-3)
  - [Class: Environ](#class-environ)
    - [Hierarchy](#hierarchy-4)
    - [Index](#index-4)
    - [Constructors](#constructors-2)
    - [Properties](#properties-1)
    - [Methods](#methods-4)
  - [Class: EnvironEntry](#class-environentry)
    - [Hierarchy](#hierarchy-5)
    - [Index](#index-5)
    - [Constructors](#constructors-3)
    - [Properties](#properties-2)
  - [Class: FileStat](#class-filestat)
    - [Hierarchy](#hierarchy-6)
    - [Index](#index-6)
    - [Constructors](#constructors-4)
    - [Properties](#properties-3)
  - [Class: FileSystem](#class-filesystem)
    - [Hierarchy](#hierarchy-7)
    - [Index](#index-7)
    - [Methods](#methods-5)
  - [Class: Performance](#class-performance)
    - [Hierarchy](#hierarchy-8)
    - [Index](#index-8)
    - [Methods](#methods-6)
  - [Class: Process](#class-process)
    - [Hierarchy](#hierarchy-9)
    - [Index](#index-9)
    - [Methods](#methods-7)
  - [Class: Random](#class-random)
    - [Hierarchy](#hierarchy-10)
    - [Index](#index-10)
    - [Methods](#methods-8)
  - [Class: StringUtils](#class-stringutils)
    - [Hierarchy](#hierarchy-11)
    - [Index](#index-11)
    - [Methods](#methods-9)
  - [Class: Time](#class-time)
    - [Hierarchy](#hierarchy-12)
    - [Index](#index-12)
    - [Properties](#properties-4)
    - [Methods](#methods-10)
  - [Class: WASIError](#class-wasierror)
    - [Hierarchy](#hierarchy-13)
    - [Index](#index-13)
    - [Constructors](#constructors-5)
    - [Properties](#properties-5)
    - [Methods](#methods-11)
- [as-wasi](#as-wasi-2)
  - [Index](#index-14)
    - [Modules](#modules)
- [Modules](#modules-1)
  - [Module: "assembly/as-wasi"](#module-assemblyas-wasi)
    - [Index](#index-15)
    - [Type aliases](#type-aliases)
    - [Functions](#functions)
  - [Module: "assembly/index"](#module-assemblyindex)
    - [Index](#index-16)
    - [References](#references)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="readmemd"></a>

[as-wasi](#readmemd) › [Globals](#globalsmd)

# as-wasi

# as-wasi

<!--- Badges -->

![npm version](https://img.shields.io/npm/v/as-wasi.svg)
![npm downloads per month](https://img.shields.io/npm/dm/as-wasi.svg)
![GitHub License](https://img.shields.io/github/license/torch2424/as-wasi.svg)

<!--- Short Description-->

A high-level AssemblyScript layer for the WebAssembly System Interface (WASI).

[WASI](https://wasi.dev) is an API providing access to the external world to WebAssembly modules. AssemblyScript exposes the low-level WASI standard set of system calls. `as-wasi` builds a higher level API on top of the AssemblyScript WASI interface, at a similar level to the [Node API](https://nodejs.org/docs/latest/api/).

## Installation

You can install `as-wasi` in your project by running the following:

`npm install --save as-bind`

## Quick Start

Example usage of the `Console` and `Environ` classes:

```typescript
// Import from the installed as-wasi package
import { Console, Environ } from "as-wasi";

// Create an envrion instance
let env = new Environ();

// Get the HOME Environment variable
let home = env.get("HOME")!;

// Log the HOME string to stdout
Console.log(home);
```

## Reference API Docs

Reference API documentation can be found in [REFERENCE_API_DOCS](./REFERENCE_API_DOCS.md).

## Projects using as-wasi

* [wasmboy](https://github.com/torch2424/wasmboy) - Game Boy / Game Boy Color Emulator Library, 🎮written for WebAssembly using AssemblyScript. 🚀
* [wasmerio/io-devices-lib](https://github.com/wasmerio/io-devices-lib) - Library for interacting with the Wasmer Experimental IO Devices API. Uses WASI for outputting graphics in a framebuffer, and handles mouse/keyboard input.
* [wasm-by-example](https://github.com/torch2424/wasm-by-example) - Wasm By Example is a website with a set of hands-on introduction examples and tutorials for WebAssembly (Wasm). Wasm By Example features `as-wasi` by default for the AssemblyScript WASI examples.
* [wasm-matrix](https://github.com/torch2424/wasm-matrix) - A Matrix effect in your terminal using AssemblyScript 🚀 and WASI 🧩 . THhise project is a bit older, and uses an older version of `as-wasi`, but still creates a cool effect!

_If you're project is using as-wasi, and you would like to be featured here. Please open a README with links to your project, and if appropriate, explaining how as-wasi is being used._ 😊

## Contributing

Contributions are definitely welcome! Feel free to open a PR for small fixes such as typos and things. Larger fixes, or new features should start out as an issue for discussion, in which then a PR should be made. 🥳

This project will also adhere to the [AssemblyScript Code of Conduct](https://github.com/AssemblyScript/assemblyscript/blob/master/CODE_OF_CONDUCT.md).

## License

[MIT](https://oss.ninja/mit/jesdict1). 📝

# Classes


<a name="classes_assembly_as_wasi_commandlinemd"></a>

[as-wasi](#readmemd) › [Globals](#globalsmd) › ["assembly/as-wasi"](#modules_assembly_as_wasi_md) › [CommandLine](#classes_assembly_as_wasi_commandlinemd)

## Class: CommandLine

### Hierarchy

* **CommandLine**

### Index

#### Constructors

* [constructor](#constructor)

#### Properties

* [args](#args)

#### Methods

* [all](#all)
* [get](#get)

### Constructors

####  constructor

\+ **new CommandLine**(): *[CommandLine](#classes_assembly_as_wasi_commandlinemd)*

*Defined in [assembly/as-wasi.ts:929](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L929)*

**Returns:** *[CommandLine](#classes_assembly_as_wasi_commandlinemd)*

### Properties

####  args

• **args**: *string[]*

*Defined in [assembly/as-wasi.ts:929](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L929)*

### Methods

####  all

▸ **all**(): *Array‹string›*

*Defined in [assembly/as-wasi.ts:958](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L958)*

Return all the command-line arguments

**Returns:** *Array‹string›*

___

####  get

▸ **get**(`i`: usize): *string | null*

*Defined in [assembly/as-wasi.ts:966](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L966)*

Return the i-th command-ine argument

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`i` | usize | index  |

**Returns:** *string | null*


<a name="classes_assembly_as_wasi_consolemd"></a>

[as-wasi](#readmemd) › [Globals](#globalsmd) › ["assembly/as-wasi"](#modules_assembly_as_wasi_md) › [Console](#classes_assembly_as_wasi_consolemd)

## Class: Console

### Hierarchy

* **Console**

### Index

#### Methods

* [error](#static-error)
* [log](#static-log)
* [readAll](#static-readall)
* [write](#static-write)

### Methods

#### `Static` error

▸ **error**(`s`: string, `newline`: bool): *void*

*Defined in [assembly/as-wasi.ts:804](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L804)*

Write an error to the console

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`s` | string | - | string |
`newline` | bool | true | `false` to avoid inserting a newline after the string  |

**Returns:** *void*

___

#### `Static` log

▸ **log**(`s`: string): *void*

*Defined in [assembly/as-wasi.ts:795](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L795)*

Alias for `Console.write()`

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |

**Returns:** *void*

___

#### `Static` readAll

▸ **readAll**(): *string | null*

*Defined in [assembly/as-wasi.ts:788](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L788)*

Read an UTF8 string from the console, convert it to a native string

**Returns:** *string | null*

___

#### `Static` write

▸ **write**(`s`: string, `newline`: bool): *void*

*Defined in [assembly/as-wasi.ts:781](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L781)*

Write a string to the console

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`s` | string | - | string |
`newline` | bool | true | `false` to avoid inserting a newline after the string  |

**Returns:** *void*


<a name="classes_assembly_as_wasi_datemd"></a>

[as-wasi](#readmemd) › [Globals](#globalsmd) › ["assembly/as-wasi"](#modules_assembly_as_wasi_md) › [Date](#classes_assembly_as_wasi_datemd)

## Class: Date

### Hierarchy

* **Date**

### Index

#### Methods

* [now](#static-now)

### Methods

#### `Static` now

▸ **now**(): *f64*

*Defined in [assembly/as-wasi.ts:842](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L842)*

Return the current timestamp, as a number of milliseconds since the epoch

**Returns:** *f64*


<a name="classes_assembly_as_wasi_descriptormd"></a>

[as-wasi](#readmemd) › [Globals](#globalsmd) › ["assembly/as-wasi"](#modules_assembly_as_wasi_md) › [Descriptor](#classes_assembly_as_wasi_descriptormd)

## Class: Descriptor

A descriptor, that doesn't necessarily have to represent a file

### Hierarchy

* **Descriptor**

### Index

#### Constructors

* [constructor](#constructor)

#### Accessors

* [rawfd](#rawfd)
* [Invalid](#static-invalid)
* [Stderr](#static-stderr)
* [Stdin](#static-stdin)
* [Stdout](#static-stdout)

#### Methods

* [advise](#advise)
* [allocate](#allocate)
* [close](#close)
* [dirName](#dirname)
* [fatime](#fatime)
* [fdatasync](#fdatasync)
* [fileType](#filetype)
* [fmtime](#fmtime)
* [fsync](#fsync)
* [ftruncate](#ftruncate)
* [futimes](#futimes)
* [read](#read)
* [readAll](#readall)
* [readString](#readstring)
* [seek](#seek)
* [setFlags](#setflags)
* [stat](#stat)
* [tell](#tell)
* [touch](#touch)
* [write](#write)
* [writeString](#writestring)
* [writeStringLn](#writestringln)

### Constructors

####  constructor

\+ **new Descriptor**(`rawfd`: fd): *[Descriptor](#classes_assembly_as_wasi_descriptormd)*

*Defined in [assembly/as-wasi.ts:109](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L109)*

Build a new descriptor from a raw WASI file descriptor

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`rawfd` | fd | a raw file descriptor  |

**Returns:** *[Descriptor](#classes_assembly_as_wasi_descriptormd)*

### Accessors

####  rawfd

• **get rawfd**(): *fd*

*Defined in [assembly/as-wasi.ts:119](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L119)*

**Returns:** *fd*

___

#### `Static` Invalid

• **get Invalid**(): *[Descriptor](#classes_assembly_as_wasi_descriptormd)*

*Defined in [assembly/as-wasi.ts:94](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L94)*

An invalid file descriptor, that can represent an error

**Returns:** *[Descriptor](#classes_assembly_as_wasi_descriptormd)*

___

#### `Static` Stderr

• **get Stderr**(): *[Descriptor](#classes_assembly_as_wasi_descriptormd)*

*Defined in [assembly/as-wasi.ts:109](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L109)*

The standard error

**Returns:** *[Descriptor](#classes_assembly_as_wasi_descriptormd)*

___

#### `Static` Stdin

• **get Stdin**(): *[Descriptor](#classes_assembly_as_wasi_descriptormd)*

*Defined in [assembly/as-wasi.ts:99](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L99)*

The standard input

**Returns:** *[Descriptor](#classes_assembly_as_wasi_descriptormd)*

___

#### `Static` Stdout

• **get Stdout**(): *[Descriptor](#classes_assembly_as_wasi_descriptormd)*

*Defined in [assembly/as-wasi.ts:104](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L104)*

The standard output

**Returns:** *[Descriptor](#classes_assembly_as_wasi_descriptormd)*

### Methods

####  advise

▸ **advise**(`offset`: u64, `len`: u64, `advice`: advice): *bool*

*Defined in [assembly/as-wasi.ts:130](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L130)*

Hint at how the data accessible via the descriptor will be used

**`offset`** offset

**`len`** length

**`advice`** `advice.{NORMAL, SEQUENTIAL, RANDOM, WILLNEED, DONTNEED, NOREUSE}`

**Parameters:**

Name | Type |
------ | ------ |
`offset` | u64 |
`len` | u64 |
`advice` | advice |

**Returns:** *bool*

`true` on success, `false` on error

___

####  allocate

▸ **allocate**(`offset`: u64, `len`: u64): *bool*

*Defined in [assembly/as-wasi.ts:140](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L140)*

Preallocate data

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`offset` | u64 | where to start preallocating data in the file |
`len` | u64 | bytes to preallocate |

**Returns:** *bool*

`true` on success, `false` on error

___

####  close

▸ **close**(): *void*

*Defined in [assembly/as-wasi.ts:283](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L283)*

Close a file descriptor

**Returns:** *void*

___

####  dirName

▸ **dirName**(): *string*

*Defined in [assembly/as-wasi.ts:261](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L261)*

Return the directory associated to that descriptor

**Returns:** *string*

___

####  fatime

▸ **fatime**(`ts`: f64): *bool*

*Defined in [assembly/as-wasi.ts:207](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L207)*

Update the access time

**`ts`** timestamp in seconds

**Parameters:**

Name | Type |
------ | ------ |
`ts` | f64 |

**Returns:** *bool*

`true` on success, `false` on error

___

####  fdatasync

▸ **fdatasync**(): *bool*

*Defined in [assembly/as-wasi.ts:148](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L148)*

Wait for the data to be written

**Returns:** *bool*

`true` on success, `false` on error

___

####  fileType

▸ **fileType**(): *filetype*

*Defined in [assembly/as-wasi.ts:163](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L163)*

Return the file type

**Returns:** *filetype*

___

####  fmtime

▸ **fmtime**(`ts`: f64): *bool*

*Defined in [assembly/as-wasi.ts:219](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L219)*

Update the modification time

**`ts`** timestamp in seconds

**Parameters:**

Name | Type |
------ | ------ |
`ts` | f64 |

**Returns:** *bool*

`true` on success, `false` on error

___

####  fsync

▸ **fsync**(): *bool*

*Defined in [assembly/as-wasi.ts:156](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L156)*

Wait for the data and metadata to be written

**Returns:** *bool*

`true` on success, `false` on error

___

####  ftruncate

▸ **ftruncate**(`size`: u64): *bool*

*Defined in [assembly/as-wasi.ts:198](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L198)*

Change the size of a file

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`size` | u64 | 0 | new size |

**Returns:** *bool*

`true` on success, `false` on error

___

####  futimes

▸ **futimes**(`atime`: f64, `mtime`: f64): *bool*

*Defined in [assembly/as-wasi.ts:232](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L232)*

Update both the access and the modification times

**`atime`** timestamp in seconds

**`mtime`** timestamp in seconds

**Parameters:**

Name | Type |
------ | ------ |
`atime` | f64 |
`mtime` | f64 |

**Returns:** *bool*

`true` on success, `false` on error

___

####  read

▸ **read**(`data`: u8[], `chunk_size`: usize): *u8[] | null*

*Defined in [assembly/as-wasi.ts:348](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L348)*

Read data from a file descriptor

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`data` | u8[] | [] | existing array to push data to |
`chunk_size` | usize | 4096 | chunk size (default: 4096)  |

**Returns:** *u8[] | null*

___

####  readAll

▸ **readAll**(`data`: u8[], `chunk_size`: usize): *u8[] | null*

*Defined in [assembly/as-wasi.ts:373](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L373)*

Read from a file descriptor until the end of the stream

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`data` | u8[] | [] | existing array to push data to |
`chunk_size` | usize | 4096 | chunk size (default: 4096)  |

**Returns:** *u8[] | null*

___

####  readString

▸ **readString**(`chunk_size`: usize): *string | null*

*Defined in [assembly/as-wasi.ts:404](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L404)*

Read an UTF8 string from a file descriptor, convert it to a native string

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`chunk_size` | usize | 4096 | chunk size (default: 4096)  |

**Returns:** *string | null*

___

####  seek

▸ **seek**(`off`: u64, `w`: whence): *bool*

*Defined in [assembly/as-wasi.ts:418](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L418)*

Seek into a stream

**`off`** offset

**`w`** the position relative to which to set the offset of the file descriptor.

**Parameters:**

Name | Type |
------ | ------ |
`off` | u64 |
`w` | whence |

**Returns:** *bool*

___

####  setFlags

▸ **setFlags**(`flags`: fdflags): *bool*

*Defined in [assembly/as-wasi.ts:177](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L177)*

Set WASI flags for that descriptor

**`params`** flags: one or more of `fdflags.{APPEND, DSYNC, NONBLOCK, RSYNC, SYNC}`

**Parameters:**

Name | Type |
------ | ------ |
`flags` | fdflags |

**Returns:** *bool*

`true` on success, `false` on error

___

####  stat

▸ **stat**(): *[FileStat](#classes_assembly_as_wasi_filestatmd)*

*Defined in [assembly/as-wasi.ts:185](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L185)*

Retrieve information about a descriptor

**Returns:** *[FileStat](#classes_assembly_as_wasi_filestatmd)*

a `FileStat` object`

___

####  tell

▸ **tell**(): *u64*

*Defined in [assembly/as-wasi.ts:429](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L429)*

Return the current offset in the stream

**Returns:** *u64*

offset

___

####  touch

▸ **touch**(): *bool*

*Defined in [assembly/as-wasi.ts:247](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L247)*

Update the timestamp of the object represented by the descriptor

**Returns:** *bool*

`true` on success, `false` on error

___

####  write

▸ **write**(`data`: u8[]): *void*

*Defined in [assembly/as-wasi.ts:291](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L291)*

Write data to a file descriptor

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | u8[] | data  |

**Returns:** *void*

___

####  writeString

▸ **writeString**(`s`: string, `newline`: bool): *void*

*Defined in [assembly/as-wasi.ts:309](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L309)*

Write a string to a file descriptor, after encoding it to UTF8

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`s` | string | - | string |
`newline` | bool | false | `true` to add a newline after the string  |

**Returns:** *void*

___

####  writeStringLn

▸ **writeStringLn**(`s`: string): *void*

*Defined in [assembly/as-wasi.ts:328](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L328)*

Write a string to a file descriptor, after encoding it to UTF8, with a newline

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`s` | string | string  |

**Returns:** *void*


<a name="classes_assembly_as_wasi_environmd"></a>

[as-wasi](#readmemd) › [Globals](#globalsmd) › ["assembly/as-wasi"](#modules_assembly_as_wasi_md) › [Environ](#classes_assembly_as_wasi_environmd)

## Class: Environ

### Hierarchy

* **Environ**

### Index

#### Constructors

* [constructor](#constructor)

#### Properties

* [env](#env)

#### Methods

* [all](#all)
* [get](#get)

### Constructors

####  constructor

\+ **new Environ**(): *[Environ](#classes_assembly_as_wasi_environmd)*

*Defined in [assembly/as-wasi.ts:877](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L877)*

**Returns:** *[Environ](#classes_assembly_as_wasi_environmd)*

### Properties

####  env

• **env**: *Array‹[EnvironEntry](#classes_assembly_as_wasi_environentrymd)›*

*Defined in [assembly/as-wasi.ts:877](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L877)*

### Methods

####  all

▸ **all**(): *Array‹[EnvironEntry](#classes_assembly_as_wasi_environentrymd)›*

*Defined in [assembly/as-wasi.ts:908](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L908)*

 Return all environment variables

**Returns:** *Array‹[EnvironEntry](#classes_assembly_as_wasi_environentrymd)›*

___

####  get

▸ **get**(`key`: string): *string | null*

*Defined in [assembly/as-wasi.ts:916](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L916)*

Return the value for an environment variable

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | environment variable name  |

**Returns:** *string | null*


<a name="classes_assembly_as_wasi_environentrymd"></a>

[as-wasi](#readmemd) › [Globals](#globalsmd) › ["assembly/as-wasi"](#modules_assembly_as_wasi_md) › [EnvironEntry](#classes_assembly_as_wasi_environentrymd)

## Class: EnvironEntry

### Hierarchy

* **EnvironEntry**

### Index

#### Constructors

* [constructor](#constructor)

#### Properties

* [key](#readonly-key)
* [value](#readonly-value)

### Constructors

####  constructor

\+ **new EnvironEntry**(`key`: string, `value`: string): *[EnvironEntry](#classes_assembly_as_wasi_environentrymd)*

*Defined in [assembly/as-wasi.ts:872](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L872)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | string |

**Returns:** *[EnvironEntry](#classes_assembly_as_wasi_environentrymd)*

### Properties

#### `Readonly` key

• **key**: *string*

*Defined in [assembly/as-wasi.ts:873](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L873)*

___

#### `Readonly` value

• **value**: *string*

*Defined in [assembly/as-wasi.ts:873](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L873)*


<a name="classes_assembly_as_wasi_filestatmd"></a>

[as-wasi](#readmemd) › [Globals](#globalsmd) › ["assembly/as-wasi"](#modules_assembly_as_wasi_md) › [FileStat](#classes_assembly_as_wasi_filestatmd)

## Class: FileStat

Portable information about a file

### Hierarchy

* **FileStat**

### Index

#### Constructors

* [constructor](#constructor)

#### Properties

* [access_time](#access_time)
* [creation_time](#creation_time)
* [file_size](#file_size)
* [file_type](#file_type)
* [modification_time](#modification_time)

### Constructors

####  constructor

\+ **new FileStat**(`st_buf`: usize): *[FileStat](#classes_assembly_as_wasi_filestatmd)*

*Defined in [assembly/as-wasi.ts:75](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`st_buf` | usize |

**Returns:** *[FileStat](#classes_assembly_as_wasi_filestatmd)*

### Properties

####  access_time

• **access_time**: *f64*

*Defined in [assembly/as-wasi.ts:73](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L73)*

___

####  creation_time

• **creation_time**: *f64*

*Defined in [assembly/as-wasi.ts:75](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L75)*

___

####  file_size

• **file_size**: *filesize*

*Defined in [assembly/as-wasi.ts:72](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L72)*

___

####  file_type

• **file_type**: *filetype*

*Defined in [assembly/as-wasi.ts:71](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L71)*

___

####  modification_time

• **modification_time**: *f64*

*Defined in [assembly/as-wasi.ts:74](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L74)*


<a name="classes_assembly_as_wasi_filesystemmd"></a>

[as-wasi](#readmemd) › [Globals](#globalsmd) › ["assembly/as-wasi"](#modules_assembly_as_wasi_md) › [FileSystem](#classes_assembly_as_wasi_filesystemmd)

## Class: FileSystem

A class to access a filesystem

### Hierarchy

* **FileSystem**

### Index

#### Methods

* [dirfdForPath](#static-protected-dirfdforpath)
* [exists](#static-exists)
* [link](#static-link)
* [lstat](#static-lstat)
* [mkdir](#static-mkdir)
* [open](#static-open)
* [readdir](#static-readdir)
* [rename](#static-rename)
* [rmdir](#static-rmdir)
* [stat](#static-stat)
* [symlink](#static-symlink)
* [unlink](#static-unlink)

### Methods

#### `Static` `Protected` dirfdForPath

▸ **dirfdForPath**(`path`: string): *fd*

*Defined in [assembly/as-wasi.ts:769](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L769)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *fd*

___

#### `Static` exists

▸ **exists**(`path`: string): *bool*

*Defined in [assembly/as-wasi.ts:533](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L533)*

Check if a file exists at a given path

**`path`** path

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *bool*

`true` on success, `false` on failure

___

#### `Static` link

▸ **link**(`old_path`: string, `new_path`: string): *bool*

*Defined in [assembly/as-wasi.ts:556](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L556)*

Create a hard link

**`old_path`** old path

**`new_path`** new path

**Parameters:**

Name | Type |
------ | ------ |
`old_path` | string |
`new_path` | string |

**Returns:** *bool*

`true` on success, `false` on failure

___

#### `Static` lstat

▸ **lstat**(`path`: string): *[FileStat](#classes_assembly_as_wasi_filestatmd)*

*Defined in [assembly/as-wasi.ts:672](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L672)*

Retrieve information about a file or a symbolic link

**`path`** path

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *[FileStat](#classes_assembly_as_wasi_filestatmd)*

a `FileStat` object

___

#### `Static` mkdir

▸ **mkdir**(`path`: string): *bool*

*Defined in [assembly/as-wasi.ts:516](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L516)*

Create a new directory

**`path`** path

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *bool*

`true` on success, `false` on failure

___

#### `Static` open

▸ **open**(`path`: string, `flags`: string): *[Descriptor](#classes_assembly_as_wasi_descriptormd) | null*

*Defined in [assembly/as-wasi.ts:449](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L449)*

Open a path

**`path`** path

**`flags`** r, r+, w, wx, w+ or xw+

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`path` | string | - |
`flags` | string | "r" |

**Returns:** *[Descriptor](#classes_assembly_as_wasi_descriptormd) | null*

a descriptor

___

#### `Static` readdir

▸ **readdir**(`path`: string): *Array‹string› | null*

*Defined in [assembly/as-wasi.ts:726](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L726)*

Get the content of a directory

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | string | the directory path |

**Returns:** *Array‹string› | null*

An array of file names

___

#### `Static` rename

▸ **rename**(`old_path`: string, `new_path`: string): *bool*

*Defined in [assembly/as-wasi.ts:698](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L698)*

Rename a file

**`old_path`** old path

**`new_path`** new path

**Parameters:**

Name | Type |
------ | ------ |
`old_path` | string |
`new_path` | string |

**Returns:** *bool*

`true` on success, `false` on failure

___

#### `Static` rmdir

▸ **rmdir**(`path`: string): *bool*

*Defined in [assembly/as-wasi.ts:630](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L630)*

Remove a directory

**`path`** path

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *bool*

`true` on success, `false` on failure

___

#### `Static` stat

▸ **stat**(`path`: string): *[FileStat](#classes_assembly_as_wasi_filestatmd)*

*Defined in [assembly/as-wasi.ts:647](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L647)*

Retrieve information about a file

**`path`** path

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *[FileStat](#classes_assembly_as_wasi_filestatmd)*

a `FileStat` object

___

#### `Static` symlink

▸ **symlink**(`old_path`: string, `new_path`: string): *bool*

*Defined in [assembly/as-wasi.ts:587](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L587)*

Create a symbolic link

**`old_path`** old path

**`new_path`** new path

**Parameters:**

Name | Type |
------ | ------ |
`old_path` | string |
`new_path` | string |

**Returns:** *bool*

`true` on success, `false` on failure

___

#### `Static` unlink

▸ **unlink**(`path`: string): *bool*

*Defined in [assembly/as-wasi.ts:613](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L613)*

Unlink a file

**`path`** path

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *bool*

`true` on success, `false` on failure


<a name="classes_assembly_as_wasi_performancemd"></a>

[as-wasi](#readmemd) › [Globals](#globalsmd) › ["assembly/as-wasi"](#modules_assembly_as_wasi_md) › [Performance](#classes_assembly_as_wasi_performancemd)

## Class: Performance

### Hierarchy

* **Performance**

### Index

#### Methods

* [now](#static-now)

### Methods

#### `Static` now

▸ **now**(): *f64*

*Defined in [assembly/as-wasi.ts:852](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L852)*

**Returns:** *f64*


<a name="classes_assembly_as_wasi_processmd"></a>

[as-wasi](#readmemd) › [Globals](#globalsmd) › ["assembly/as-wasi"](#modules_assembly_as_wasi_md) › [Process](#classes_assembly_as_wasi_processmd)

## Class: Process

### Hierarchy

* **Process**

### Index

#### Methods

* [exit](#static-exit)

### Methods

#### `Static` exit

▸ **exit**(`status`: u32): *void*

*Defined in [assembly/as-wasi.ts:867](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L867)*

Cleanly terminate the current process

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`status` | u32 | exit code  |

**Returns:** *void*


<a name="classes_assembly_as_wasi_randommd"></a>

[as-wasi](#readmemd) › [Globals](#globalsmd) › ["assembly/as-wasi"](#modules_assembly_as_wasi_md) › [Random](#classes_assembly_as_wasi_randommd)

## Class: Random

### Hierarchy

* **Random**

### Index

#### Methods

* [randomBytes](#static-randombytes)
* [randomFill](#static-randomfill)

### Methods

#### `Static` randomBytes

▸ **randomBytes**(`len`: usize): *Uint8Array*

*Defined in [assembly/as-wasi.ts:831](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L831)*

Return an array of random bytes

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`len` | usize | length  |

**Returns:** *Uint8Array*

___

#### `Static` randomFill

▸ **randomFill**(`buffer`: ArrayBuffer): *void*

*Defined in [assembly/as-wasi.ts:814](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L814)*

Fill a buffer with random data

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`buffer` | ArrayBuffer | An array buffer  |

**Returns:** *void*


<a name="classes_assembly_as_wasi_stringutilsmd"></a>

[as-wasi](#readmemd) › [Globals](#globalsmd) › ["assembly/as-wasi"](#modules_assembly_as_wasi_md) › [StringUtils](#classes_assembly_as_wasi_stringutilsmd)

## Class: StringUtils

### Hierarchy

* **StringUtils**

### Index

#### Methods

* [fromCString](#static-fromcstring)

### Methods

#### `Static` fromCString

▸ **fromCString**(`cstring`: usize): *string*

*Defined in [assembly/as-wasi.ts:1023](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L1023)*

Returns a native string from a zero-terminated C string

**Parameters:**

Name | Type |
------ | ------ |
`cstring` | usize |

**Returns:** *string*

native string


<a name="classes_assembly_as_wasi_timemd"></a>

[as-wasi](#readmemd) › [Globals](#globalsmd) › ["assembly/as-wasi"](#modules_assembly_as_wasi_md) › [Time](#classes_assembly_as_wasi_timemd)

## Class: Time

### Hierarchy

* **Time**

### Index

#### Properties

* [MILLISECOND](#static-millisecond)
* [NANOSECOND](#static-nanosecond)
* [SECOND](#static-second)

#### Methods

* [sleep](#static-sleep)

### Properties

#### `Static` MILLISECOND

▪ **MILLISECOND**: *i32* = Time.NANOSECOND * 1000000

*Defined in [assembly/as-wasi.ts:978](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L978)*

___

#### `Static` NANOSECOND

▪ **NANOSECOND**: *i32* = 1

*Defined in [assembly/as-wasi.ts:977](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L977)*

___

#### `Static` SECOND

▪ **SECOND**: *i32* = Time.MILLISECOND * 1000

*Defined in [assembly/as-wasi.ts:979](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L979)*

### Methods

#### `Static` sleep

▸ **sleep**(`nanoseconds`: i32): *void*

*Defined in [assembly/as-wasi.ts:983](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L983)*

**Parameters:**

Name | Type |
------ | ------ |
`nanoseconds` | i32 |

**Returns:** *void*


<a name="classes_assembly_as_wasi_wasierrormd"></a>

[as-wasi](#readmemd) › [Globals](#globalsmd) › ["assembly/as-wasi"](#modules_assembly_as_wasi_md) › [WASIError](#classes_assembly_as_wasi_wasierrormd)

## Class: WASIError

A WASI error

### Hierarchy

* Error

  ↳ **WASIError**

### Index

#### Constructors

* [constructor](#constructor)

#### Properties

* [message](#message)
* [name](#name)
* [stack](#optional-stack)

#### Methods

* [toString](#tostring)

### Constructors

####  constructor

\+ **new WASIError**(`message`: string): *[WASIError](#classes_assembly_as_wasi_wasierrormd)*

*Overrides void*

*Defined in [assembly/as-wasi.ts:60](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L60)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`message` | string | "" |

**Returns:** *[WASIError](#classes_assembly_as_wasi_wasierrormd)*

### Properties

####  message

• **message**: *string*

*Inherited from [WASIError](#classes_assembly_as_wasi_wasierrormd).[message](#message)*

Defined in node_modules/assemblyscript/std/assembly/index.d.ts:1578

Message provided on construction.

___

####  name

• **name**: *string*

*Inherited from [WASIError](#classes_assembly_as_wasi_wasierrormd).[name](#name)*

Defined in node_modules/assemblyscript/std/assembly/index.d.ts:1575

Error name.

___

#### `Optional` stack

• **stack**? : *undefined | string*

*Inherited from [WASIError](#classes_assembly_as_wasi_wasierrormd).[stack](#optional-stack)*

Defined in node_modules/assemblyscript/std/assembly/index.d.ts:1581

Stack trace.

### Methods

####  toString

▸ **toString**(): *string*

*Inherited from [WASIError](#classes_assembly_as_wasi_wasierrormd).[toString](#tostring)*

Defined in node_modules/assemblyscript/std/assembly/index.d.ts:1587

Method returns a string representing the specified Error class.

**Returns:** *string*


<a name="globalsmd"></a>

[as-wasi](#readmemd) › [Globals](#globalsmd)

# as-wasi

## Index

### Modules

* ["assembly/as-wasi"](#modules_assembly_as_wasi_md)
* ["assembly/index"](#modules_assembly_index_md)

# Modules


<a name="modules_assembly_as_wasi_md"></a>

[as-wasi](#readmemd) › [Globals](#globalsmd) › ["assembly/as-wasi"](#modules_assembly_as_wasi_md)

## Module: "assembly/as-wasi"

### Index

#### Classes

* [CommandLine](#classes_assembly_as_wasi_commandlinemd)
* [Console](#classes_assembly_as_wasi_consolemd)
* [Date](#classes_assembly_as_wasi_datemd)
* [Descriptor](#classes_assembly_as_wasi_descriptormd)
* [Environ](#classes_assembly_as_wasi_environmd)
* [EnvironEntry](#classes_assembly_as_wasi_environentrymd)
* [FileStat](#classes_assembly_as_wasi_filestatmd)
* [FileSystem](#classes_assembly_as_wasi_filesystemmd)
* [Performance](#classes_assembly_as_wasi_performancemd)
* [Process](#classes_assembly_as_wasi_processmd)
* [Random](#classes_assembly_as_wasi_randommd)
* [StringUtils](#classes_assembly_as_wasi_stringutilsmd)
* [Time](#classes_assembly_as_wasi_timemd)
* [WASIError](#classes_assembly_as_wasi_wasierrormd)

#### Type aliases

* [aisize](#aisize)

#### Functions

* [wasi_abort](#wasi_abort)

### Type aliases

####  aisize

Ƭ **aisize**: *i32*

*Defined in [assembly/as-wasi.ts:55](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L55)*

### Functions

####  wasi_abort

▸ **wasi_abort**(`message`: string, `fileName`: string, `lineNumber`: u32, `columnNumber`: u32): *void*

*Defined in [assembly/as-wasi.ts:1034](https://github.com/torch2424/as-wasi/blob/ee76aa3/assembly/as-wasi.ts#L1034)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`message` | string | "" |
`fileName` | string | "" |
`lineNumber` | u32 | 0 |
`columnNumber` | u32 | 0 |

**Returns:** *void*


<a name="modules_assembly_index_md"></a>

[as-wasi](#readmemd) › [Globals](#globalsmd) › ["assembly/index"](#modules_assembly_index_md)

## Module: "assembly/index"

### Index

#### References

* [CommandLine](#commandline)
* [Console](#console)
* [Date](#date)
* [Descriptor](#descriptor)
* [Environ](#environ)
* [EnvironEntry](#environentry)
* [FileStat](#filestat)
* [FileSystem](#filesystem)
* [Process](#process)
* [Random](#random)
* [Time](#time)
* [WASIError](#wasierror)

### References

####  CommandLine

• **CommandLine**:

___

####  Console

• **Console**:

___

####  Date

• **Date**:

___

####  Descriptor

• **Descriptor**:

___

####  Environ

• **Environ**:

___

####  EnvironEntry

• **EnvironEntry**:

___

####  FileStat

• **FileStat**:

___

####  FileSystem

• **FileSystem**:

___

####  Process

• **Process**:

___

####  Random

• **Random**:

___

####  Time

• **Time**:

___

####  WASIError

• **WASIError**:
