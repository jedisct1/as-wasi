<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [assemblyscript](#assemblyscript)
- [Standard library](#standard-library)
- [Classes](#classes)
  - [Class: $event](#class-event)
    - [Hierarchy](#hierarchy)
    - [Index](#index)
    - [Properties](#properties)
  - [Class: $prestat](#class-prestat)
    - [Hierarchy](#hierarchy-1)
    - [Index](#index-1)
    - [Properties](#properties-1)
  - [Class: $subscription](#class-subscription)
    - [Hierarchy](#hierarchy-2)
    - [Index](#index-2)
    - [Properties](#properties-2)
  - [Class: CommandLine](#class-commandline)
    - [Hierarchy](#hierarchy-3)
    - [Index](#index-3)
    - [Constructors](#constructors)
    - [Properties](#properties-3)
    - [Methods](#methods)
  - [Class: Console](#class-console)
    - [Hierarchy](#hierarchy-4)
    - [Index](#index-4)
    - [Methods](#methods-1)
  - [Class: Date](#class-date)
    - [Hierarchy](#hierarchy-5)
    - [Index](#index-5)
    - [Methods](#methods-2)
  - [Class: Descriptor](#class-descriptor)
    - [Hierarchy](#hierarchy-6)
    - [Index](#index-6)
    - [Constructors](#constructors-1)
    - [Accessors](#accessors)
    - [Methods](#methods-3)
  - [Class: dirent](#class-dirent)
    - [Hierarchy](#hierarchy-7)
    - [Index](#index-7)
    - [Properties](#properties-4)
  - [Class: Environ](#class-environ)
    - [Hierarchy](#hierarchy-8)
    - [Index](#index-8)
    - [Constructors](#constructors-2)
    - [Properties](#properties-5)
    - [Methods](#methods-4)
  - [Class: EnvironEntry](#class-environentry)
    - [Hierarchy](#hierarchy-9)
    - [Index](#index-9)
    - [Constructors](#constructors-3)
    - [Properties](#properties-6)
  - [Class: event](#class-event)
    - [Hierarchy](#hierarchy-10)
    - [Index](#index-10)
    - [Properties](#properties-7)
  - [Class: event_fd_readwrite](#class-event_fd_readwrite)
    - [Hierarchy](#hierarchy-11)
    - [Index](#index-11)
    - [Properties](#properties-8)
  - [Class: fdstat](#class-fdstat)
    - [Hierarchy](#hierarchy-12)
    - [Index](#index-12)
    - [Properties](#properties-9)
  - [Class: filestat](#class-filestat)
    - [Hierarchy](#hierarchy-13)
    - [Index](#index-13)
    - [Properties](#properties-10)
  - [Class: FileSystem](#class-filesystem)
    - [Hierarchy](#hierarchy-14)
    - [Index](#index-14)
    - [Methods](#methods-5)
  - [Class: iovec](#class-iovec)
    - [Hierarchy](#hierarchy-15)
    - [Index](#index-15)
    - [Properties](#properties-11)
  - [Class: Performance](#class-performance)
    - [Hierarchy](#hierarchy-16)
    - [Index](#index-16)
    - [Methods](#methods-6)
  - [Class: prestat](#class-prestat)
    - [Hierarchy](#hierarchy-17)
    - [Index](#index-17)
    - [Properties](#properties-12)
  - [Class: prestat_dir](#class-prestat_dir)
    - [Hierarchy](#hierarchy-18)
    - [Index](#index-18)
    - [Properties](#properties-13)
  - [Class: Process](#class-process)
    - [Hierarchy](#hierarchy-19)
    - [Index](#index-19)
    - [Methods](#methods-7)
  - [Class: Random](#class-random)
    - [Hierarchy](#hierarchy-20)
    - [Index](#index-20)
    - [Methods](#methods-8)
  - [Class: StringUtils](#class-stringutils)
    - [Hierarchy](#hierarchy-21)
    - [Index](#index-21)
    - [Methods](#methods-9)
  - [Class: subscription](#class-subscription)
    - [Hierarchy](#hierarchy-22)
    - [Index](#index-22)
    - [Properties](#properties-14)
  - [Class: subscription_clock](#class-subscription_clock)
    - [Hierarchy](#hierarchy-23)
    - [Index](#index-23)
    - [Properties](#properties-15)
  - [Class: subscription_fd_readwrite](#class-subscription_fd_readwrite)
    - [Hierarchy](#hierarchy-24)
    - [Index](#index-24)
    - [Properties](#properties-16)
  - [Class: Time](#class-time)
    - [Hierarchy](#hierarchy-25)
    - [Index](#index-25)
    - [Properties](#properties-17)
    - [Methods](#methods-10)
  - [Class: WASIError](#class-wasierror)
    - [Hierarchy](#hierarchy-26)
    - [Index](#index-26)
    - [Constructors](#constructors-4)
    - [Properties](#properties-18)
    - [Methods](#methods-11)
- [assemblyscript](#assemblyscript-1)
  - [Index](#index-27)
    - [Namespaces](#namespaces)
    - [Classes](#classes-1)
    - [Type aliases](#type-aliases)
    - [Functions](#functions)
  - [Type aliases](#type-aliases-1)
    - [aisize](#aisize)
    - [char](#char)
    - [device](#device)
    - [dircookie](#dircookie)
    - [exitcode](#exitcode)
    - [fd](#fd)
    - [filedelta](#filedelta)
    - [filesize](#filesize)
    - [inode](#inode)
    - [linkcount](#linkcount)
    - [ptr](#ptr)
    - [struct](#struct)
    - [timestamp](#timestamp)
    - [userdata](#userdata)
  - [Functions](#functions-1)
    - [args_get](#args_get)
    - [args_sizes_get](#args_sizes_get)
    - [clock_res_get](#clock_res_get)
    - [clock_time_get](#clock_time_get)
    - [environ_get](#environ_get)
    - [environ_sizes_get](#environ_sizes_get)
    - [fd_advise](#fd_advise)
    - [fd_allocate](#fd_allocate)
    - [fd_close](#fd_close)
    - [fd_datasync](#fd_datasync)
    - [fd_fdstat_get](#fd_fdstat_get)
    - [fd_fdstat_set_flags](#fd_fdstat_set_flags)
    - [fd_fdstat_set_rights](#fd_fdstat_set_rights)
    - [fd_filestat_get](#fd_filestat_get)
    - [fd_filestat_set_size](#fd_filestat_set_size)
    - [fd_filestat_set_times](#fd_filestat_set_times)
    - [fd_pread](#fd_pread)
    - [fd_prestat_dir_name](#fd_prestat_dir_name)
    - [fd_prestat_get](#fd_prestat_get)
    - [fd_pwrite](#fd_pwrite)
    - [fd_read](#fd_read)
    - [fd_readdir](#fd_readdir)
    - [fd_renumber](#fd_renumber)
    - [fd_seek](#fd_seek)
    - [fd_sync](#fd_sync)
    - [fd_tell](#fd_tell)
    - [fd_write](#fd_write)
    - [path_create_directory](#path_create_directory)
    - [path_filestat_get](#path_filestat_get)
    - [path_filestat_set_times](#path_filestat_set_times)
    - [path_link](#path_link)
    - [path_open](#path_open)
    - [path_readlink](#path_readlink)
    - [path_remove_directory](#path_remove_directory)
    - [path_rename](#path_rename)
    - [path_symlink](#path_symlink)
    - [path_unlink_file](#path_unlink_file)
    - [poll_oneoff](#poll_oneoff)
    - [proc_exit](#proc_exit)
    - [proc_raise](#proc_raise)
    - [random_get](#random_get)
    - [sched_yield](#sched_yield)
    - [sock_recv](#sock_recv)
    - [sock_send](#sock_send)
    - [sock_shutdown](#sock_shutdown)
    - [wasi_abort](#wasi_abort)
- [Modules](#modules)
  - [Namespace: advice](#namespace-advice)
    - [Index](#index-28)
    - [Variables](#variables)
  - [Namespace: clockid](#namespace-clockid)
    - [Index](#index-29)
    - [Variables](#variables-1)
  - [Namespace: errno](#namespace-errno)
    - [Index](#index-30)
    - [Variables](#variables-2)
  - [Namespace: eventrwflags](#namespace-eventrwflags)
    - [Index](#index-31)
    - [Variables](#variables-3)
  - [Namespace: eventtype](#namespace-eventtype)
    - [Index](#index-32)
    - [Variables](#variables-4)
  - [Namespace: fdflags](#namespace-fdflags)
    - [Index](#index-33)
    - [Variables](#variables-5)
  - [Namespace: filetype](#namespace-filetype)
    - [Index](#index-34)
    - [Variables](#variables-6)
  - [Namespace: fstflags](#namespace-fstflags)
    - [Index](#index-35)
    - [Variables](#variables-7)
  - [Namespace: lookupflags](#namespace-lookupflags)
    - [Index](#index-36)
    - [Variables](#variables-8)
  - [Namespace: oflags](#namespace-oflags)
    - [Index](#index-37)
    - [Variables](#variables-9)
  - [Namespace: preopentype](#namespace-preopentype)
    - [Index](#index-38)
    - [Variables](#variables-10)
  - [Namespace: riflags](#namespace-riflags)
    - [Index](#index-39)
    - [Variables](#variables-11)
  - [Namespace: rights](#namespace-rights)
    - [Index](#index-40)
    - [Variables](#variables-12)
  - [Namespace: roflags](#namespace-roflags)
    - [Index](#index-41)
    - [Variables](#variables-13)
  - [Namespace: sdflags](#namespace-sdflags)
    - [Index](#index-42)
    - [Variables](#variables-14)
  - [Namespace: siflags](#namespace-siflags)
  - [Namespace: signal](#namespace-signal)
    - [Index](#index-43)
    - [Variables](#variables-15)
  - [Namespace: subclockflags](#namespace-subclockflags)
    - [Index](#index-44)
    - [Variables](#variables-16)
  - [Namespace: whence](#namespace-whence)
    - [Index](#index-45)
    - [Variables](#variables-17)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="readmemd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd)

# assemblyscript

Standard library
================

Standard library components for use with `tsc` (portable) and `asc` (assembly).

Base configurations (.json) and definition files (.d.ts) are relevant to `tsc` only and not used by `asc`.

# Classes


<a name="classes_eventmd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [$event](#classes_eventmd)

## Class: $event

### Hierarchy

* **$event**

  ↳ [event](#classeseventmd)

  ↳ [event_fd_readwrite](#classesevent_fd_readwritemd)

### Index

#### Properties

* [__padding0](#private-__padding0)
* [error](#error)
* [type](#type)
* [userdata](#userdata)

### Properties

#### `Private` __padding0

• **__padding0**: *u16*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:970

___

####  error

• **error**: *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:966

If non-zero, an error that occurred while processing the subscription request.

___

####  type

• **type**: *[eventtype](#moduleseventtypemd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:968

The type of the event that occurred.

___

####  userdata

• **userdata**: *[userdata](#userdata)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:964

User-provided value that got attached to `subscription#userdata`.


<a name="classes_prestatmd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [$prestat](#classes_prestatmd)

## Class: $prestat

### Hierarchy

* **$prestat**

  ↳ [prestat](#classesprestatmd)

  ↳ [prestat_dir](#classesprestat_dirmd)

### Index

#### Properties

* [type](#type)

### Properties

####  type

• **type**: *[preopentype](#modulespreopentypemd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1197


<a name="classes_subscriptionmd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [$subscription](#classes_subscriptionmd)

## Class: $subscription

### Hierarchy

* **$subscription**

  ↳ [subscription](#classessubscriptionmd)

  ↳ [subscription_clock](#classessubscription_clockmd)

  ↳ [subscription_fd_readwrite](#classessubscription_fd_readwritemd)

### Index

#### Properties

* [__padding0](#private-__padding0)
* [type](#type)
* [userdata](#userdata)

### Properties

#### `Private` __padding0

• **__padding0**: *u32*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1509

___

####  type

• **type**: *[eventtype](#moduleseventtypemd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1507

The type of the event to which to subscribe.

___

####  userdata

• **userdata**: *[userdata](#userdata)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1505

User-provided value that is attached to the subscription.


<a name="classescommandlinemd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [CommandLine](#classescommandlinemd)

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

\+ **new CommandLine**(): *[CommandLine](#classescommandlinemd)*

*Defined in [assembly/as-wasi.ts:929](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L929)*

**Returns:** *[CommandLine](#classescommandlinemd)*

### Properties

####  args

• **args**: *string[]*

*Defined in [assembly/as-wasi.ts:929](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L929)*

### Methods

####  all

▸ **all**(): *Array‹string›*

*Defined in [assembly/as-wasi.ts:958](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L958)*

Return all the command-line arguments

**Returns:** *Array‹string›*

___

####  get

▸ **get**(`i`: usize): *string | null*

*Defined in [assembly/as-wasi.ts:966](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L966)*

Return the i-th command-ine argument

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`i` | usize | index  |

**Returns:** *string | null*


<a name="classesconsolemd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [Console](#classesconsolemd)

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

*Defined in [assembly/as-wasi.ts:804](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L804)*

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

*Defined in [assembly/as-wasi.ts:795](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L795)*

Alias for `Console.write()`

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |

**Returns:** *void*

___

#### `Static` readAll

▸ **readAll**(): *string | null*

*Defined in [assembly/as-wasi.ts:788](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L788)*

Read an UTF8 string from the console, convert it to a native string

**Returns:** *string | null*

___

#### `Static` write

▸ **write**(`s`: string, `newline`: bool): *void*

*Defined in [assembly/as-wasi.ts:781](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L781)*

Write a string to the console

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`s` | string | - | string |
`newline` | bool | true | `false` to avoid inserting a newline after the string  |

**Returns:** *void*


<a name="classesdatemd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [Date](#classesdatemd)

## Class: Date

### Hierarchy

* **Date**

### Index

#### Methods

* [now](#static-now)

### Methods

#### `Static` now

▸ **now**(): *f64*

*Defined in [assembly/as-wasi.ts:842](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L842)*

Return the current timestamp, as a number of milliseconds since the epoch

**Returns:** *f64*


<a name="classesdescriptormd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [Descriptor](#classesdescriptormd)

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

\+ **new Descriptor**(`rawfd`: fd): *[Descriptor](#classesdescriptormd)*

*Defined in [assembly/as-wasi.ts:109](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L109)*

Build a new descriptor from a raw WASI file descriptor

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`rawfd` | fd | a raw file descriptor  |

**Returns:** *[Descriptor](#classesdescriptormd)*

### Accessors

####  rawfd

• **get rawfd**(): *fd*

*Defined in [assembly/as-wasi.ts:119](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L119)*

**Returns:** *fd*

___

#### `Static` Invalid

• **get Invalid**(): *[Descriptor](#classesdescriptormd)*

*Defined in [assembly/as-wasi.ts:94](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L94)*

An invalid file descriptor, that can represent an error

**Returns:** *[Descriptor](#classesdescriptormd)*

___

#### `Static` Stderr

• **get Stderr**(): *[Descriptor](#classesdescriptormd)*

*Defined in [assembly/as-wasi.ts:109](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L109)*

The standard error

**Returns:** *[Descriptor](#classesdescriptormd)*

___

#### `Static` Stdin

• **get Stdin**(): *[Descriptor](#classesdescriptormd)*

*Defined in [assembly/as-wasi.ts:99](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L99)*

The standard input

**Returns:** *[Descriptor](#classesdescriptormd)*

___

#### `Static` Stdout

• **get Stdout**(): *[Descriptor](#classesdescriptormd)*

*Defined in [assembly/as-wasi.ts:104](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L104)*

The standard output

**Returns:** *[Descriptor](#classesdescriptormd)*

### Methods

####  advise

▸ **advise**(`offset`: u64, `len`: u64, `advice`: advice): *bool*

*Defined in [assembly/as-wasi.ts:130](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L130)*

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

*Defined in [assembly/as-wasi.ts:140](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L140)*

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

*Defined in [assembly/as-wasi.ts:283](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L283)*

Close a file descriptor

**Returns:** *void*

___

####  dirName

▸ **dirName**(): *string*

*Defined in [assembly/as-wasi.ts:261](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L261)*

Return the directory associated to that descriptor

**Returns:** *string*

___

####  fatime

▸ **fatime**(`ts`: f64): *bool*

*Defined in [assembly/as-wasi.ts:207](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L207)*

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

*Defined in [assembly/as-wasi.ts:148](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L148)*

Wait for the data to be written

**Returns:** *bool*

`true` on success, `false` on error

___

####  fileType

▸ **fileType**(): *[filetype](#filetype)*

*Defined in [assembly/as-wasi.ts:163](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L163)*

Return the file type

**Returns:** *[filetype](#filetype)*

___

####  fmtime

▸ **fmtime**(`ts`: f64): *bool*

*Defined in [assembly/as-wasi.ts:219](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L219)*

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

*Defined in [assembly/as-wasi.ts:156](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L156)*

Wait for the data and metadata to be written

**Returns:** *bool*

`true` on success, `false` on error

___

####  ftruncate

▸ **ftruncate**(`size`: u64): *bool*

*Defined in [assembly/as-wasi.ts:198](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L198)*

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

*Defined in [assembly/as-wasi.ts:232](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L232)*

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

*Defined in [assembly/as-wasi.ts:348](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L348)*

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

*Defined in [assembly/as-wasi.ts:373](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L373)*

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

*Defined in [assembly/as-wasi.ts:404](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L404)*

Read an UTF8 string from a file descriptor, convert it to a native string

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`chunk_size` | usize | 4096 | chunk size (default: 4096)  |

**Returns:** *string | null*

___

####  seek

▸ **seek**(`off`: u64, `w`: whence): *bool*

*Defined in [assembly/as-wasi.ts:418](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L418)*

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

▸ **setFlags**(`flags`: [fdflags](#modulesfdflagsmd)): *bool*

*Defined in [assembly/as-wasi.ts:177](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L177)*

Set WASI flags for that descriptor

**`params`** flags: one or more of `fdflags.{APPEND, DSYNC, NONBLOCK, RSYNC, SYNC}`

**Parameters:**

Name | Type |
------ | ------ |
`flags` | [fdflags](#modulesfdflagsmd) |

**Returns:** *bool*

`true` on success, `false` on error

___

####  stat

▸ **stat**(): *[FileStat](#classesfilestatmd)*

*Defined in [assembly/as-wasi.ts:185](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L185)*

Retrieve information about a descriptor

**Returns:** *[FileStat](#classesfilestatmd)*

a `FileStat` object`

___

####  tell

▸ **tell**(): *u64*

*Defined in [assembly/as-wasi.ts:429](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L429)*

Return the current offset in the stream

**Returns:** *u64*

offset

___

####  touch

▸ **touch**(): *bool*

*Defined in [assembly/as-wasi.ts:247](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L247)*

Update the timestamp of the object represented by the descriptor

**Returns:** *bool*

`true` on success, `false` on error

___

####  write

▸ **write**(`data`: u8[]): *void*

*Defined in [assembly/as-wasi.ts:291](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L291)*

Write data to a file descriptor

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | u8[] | data  |

**Returns:** *void*

___

####  writeString

▸ **writeString**(`s`: string, `newline`: bool): *void*

*Defined in [assembly/as-wasi.ts:309](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L309)*

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

*Defined in [assembly/as-wasi.ts:328](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L328)*

Write a string to a file descriptor, after encoding it to UTF8, with a newline

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`s` | string | string  |

**Returns:** *void*


<a name="classesdirentmd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [dirent](#classesdirentmd)

## Class: dirent

A directory entry.

### Hierarchy

* **dirent**

### Index

#### Properties

* [__padding0](#private-__padding0)
* [ino](#ino)
* [namlen](#namlen)
* [next](#next)
* [type](#type)

### Properties

#### `Private` __padding0

• **__padding0**: *u16*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:646

___

####  ino

• **ino**: *[inode](#inode)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:641

The serial number of the file referred to by this directory entry.

___

####  namlen

• **namlen**: *u32*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:643

The length of the name of the directory entry.

___

####  next

• **next**: *[dircookie](#dircookie)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:639

The offset of the next directory entry stored in this directory.

___

####  type

• **type**: *[filetype](#filetype)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:645

The type of the file referred to by this directory entry.


<a name="classesenvironmd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [Environ](#classesenvironmd)

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

\+ **new Environ**(): *[Environ](#classesenvironmd)*

*Defined in [assembly/as-wasi.ts:877](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L877)*

**Returns:** *[Environ](#classesenvironmd)*

### Properties

####  env

• **env**: *Array‹[EnvironEntry](#classesenvironentrymd)›*

*Defined in [assembly/as-wasi.ts:877](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L877)*

### Methods

####  all

▸ **all**(): *Array‹[EnvironEntry](#classesenvironentrymd)›*

*Defined in [assembly/as-wasi.ts:908](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L908)*

 Return all environment variables

**Returns:** *Array‹[EnvironEntry](#classesenvironentrymd)›*

___

####  get

▸ **get**(`key`: string): *string | null*

*Defined in [assembly/as-wasi.ts:916](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L916)*

Return the value for an environment variable

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | environment variable name  |

**Returns:** *string | null*


<a name="classesenvironentrymd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [EnvironEntry](#classesenvironentrymd)

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

\+ **new EnvironEntry**(`key`: string, `value`: string): *[EnvironEntry](#classesenvironentrymd)*

*Defined in [assembly/as-wasi.ts:872](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L872)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | string |

**Returns:** *[EnvironEntry](#classesenvironentrymd)*

### Properties

#### `Readonly` key

• **key**: *string*

*Defined in [assembly/as-wasi.ts:873](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L873)*

___

#### `Readonly` value

• **value**: *string*

*Defined in [assembly/as-wasi.ts:873](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L873)*


<a name="classeseventmd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [event](#classeseventmd)

## Class: event

An event that occurred.

### Hierarchy

* [$event](#classes_eventmd)

  ↳ **event**

### Index

#### Properties

* [__padding1](#private-__padding1)
* [__padding2](#private-__padding2)
* [error](#error)
* [type](#type)
* [userdata](#userdata)

### Properties

#### `Private` __padding1

• **__padding1**: *u64*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:975

___

#### `Private` __padding2

• **__padding2**: *u64*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:976

___

####  error

• **error**: *[errno](#moduleserrnomd)*

*Inherited from [$event](#classes_eventmd).[error](#error)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:966

If non-zero, an error that occurred while processing the subscription request.

___

####  type

• **type**: *[eventtype](#moduleseventtypemd)*

*Inherited from [$event](#classes_eventmd).[type](#type)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:968

The type of the event that occurred.

___

####  userdata

• **userdata**: *[userdata](#userdata)*

*Inherited from [$event](#classes_eventmd).[userdata](#userdata)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:964

User-provided value that got attached to `subscription#userdata`.


<a name="classesevent_fd_readwritemd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [event_fd_readwrite](#classesevent_fd_readwritemd)

## Class: event_fd_readwrite

An event that occurred when type is `eventtype.FD_READ` or `eventtype.FD_WRITE`.

### Hierarchy

* [$event](#classes_eventmd)

  ↳ **event_fd_readwrite**

### Index

#### Properties

* [__padding1](#private-__padding1)
* [error](#error)
* [flags](#flags)
* [nbytes](#nbytes)
* [type](#type)
* [userdata](#userdata)

### Properties

#### `Private` __padding1

• **__padding1**: *u32*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:986

___

####  error

• **error**: *[errno](#moduleserrnomd)*

*Inherited from [$event](#classes_eventmd).[error](#error)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:966

If non-zero, an error that occurred while processing the subscription request.

___

####  flags

• **flags**: *[eventrwflags](#moduleseventrwflagsmd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:984

___

####  nbytes

• **nbytes**: *[filesize](#filesize)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:982

___

####  type

• **type**: *[eventtype](#moduleseventtypemd)*

*Inherited from [$event](#classes_eventmd).[type](#type)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:968

The type of the event that occurred.

___

####  userdata

• **userdata**: *[userdata](#userdata)*

*Inherited from [$event](#classes_eventmd).[userdata](#userdata)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:964

User-provided value that got attached to `subscription#userdata`.


<a name="classesfdstatmd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [fdstat](#classesfdstatmd)

## Class: fdstat

File descriptor attributes.

### Hierarchy

* **fdstat**

### Index

#### Properties

* [filetype](#filetype)
* [flags](#flags)
* [rights_base](#rights_base)
* [rights_inheriting](#rights_inheriting)

### Properties

####  filetype

• **filetype**: *[filetype](#filetype)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1049

File type.

___

####  flags

• **flags**: *[fdflags](#modulesfdflagsmd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1051

File descriptor flags.

___

####  rights_base

• **rights_base**: *[rights](#modulesrightsmd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1053

Rights that apply to this file descriptor.

___

####  rights_inheriting

• **rights_inheriting**: *[rights](#modulesrightsmd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1055

Maximum set of rights that may be installed on new file descriptors that are created through this file descriptor, e.g., through `path_open`.


<a name="classesfilestatmd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [filestat](#classesfilestatmd)

## Class: filestat

File attributes.

### Hierarchy

* **filestat**

### Index

#### Properties

* [atim](#atim)
* [ctim](#ctim)
* [dev](#dev)
* [filetype](#filetype)
* [ino](#ino)
* [mtim](#mtim)
* [nlink](#nlink)
* [size](#size)

### Properties

####  atim

• **atim**: *[timestamp](#timestamp)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1077

Last data access timestamp.

___

####  ctim

• **ctim**: *[timestamp](#timestamp)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1081

Last file status change timestamp.

___

####  dev

• **dev**: *[device](#device)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1067

Device ID of device containing the file.

___

####  filetype

• **filetype**: *[filetype](#filetype)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1071

File type.

___

####  ino

• **ino**: *[inode](#inode)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1069

File serial number.

___

####  mtim

• **mtim**: *[timestamp](#timestamp)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1079

Last data modification timestamp.

___

####  nlink

• **nlink**: *[linkcount](#linkcount)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1073

Number of hard links to the file.

___

####  size

• **size**: *[filesize](#filesize)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1075

For regular files, the file size in bytes. For symbolic links, the length in bytes of the pathname contained in the symbolic link.


<a name="classesfilesystemmd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [FileSystem](#classesfilesystemmd)

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

*Defined in [assembly/as-wasi.ts:769](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L769)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *fd*

___

#### `Static` exists

▸ **exists**(`path`: string): *bool*

*Defined in [assembly/as-wasi.ts:533](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L533)*

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

*Defined in [assembly/as-wasi.ts:556](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L556)*

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

▸ **lstat**(`path`: string): *[FileStat](#classesfilestatmd)*

*Defined in [assembly/as-wasi.ts:672](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L672)*

Retrieve information about a file or a symbolic link

**`path`** path

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *[FileStat](#classesfilestatmd)*

a `FileStat` object

___

#### `Static` mkdir

▸ **mkdir**(`path`: string): *bool*

*Defined in [assembly/as-wasi.ts:516](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L516)*

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

▸ **open**(`path`: string, `flags`: string): *[Descriptor](#classesdescriptormd) | null*

*Defined in [assembly/as-wasi.ts:449](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L449)*

Open a path

**`path`** path

**`flags`** r, r+, w, wx, w+ or xw+

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`path` | string | - |
`flags` | string | "r" |

**Returns:** *[Descriptor](#classesdescriptormd) | null*

a descriptor

___

#### `Static` readdir

▸ **readdir**(`path`: string): *Array‹string› | null*

*Defined in [assembly/as-wasi.ts:726](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L726)*

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

*Defined in [assembly/as-wasi.ts:698](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L698)*

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

*Defined in [assembly/as-wasi.ts:630](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L630)*

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

▸ **stat**(`path`: string): *[FileStat](#classesfilestatmd)*

*Defined in [assembly/as-wasi.ts:647](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L647)*

Retrieve information about a file

**`path`** path

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *[FileStat](#classesfilestatmd)*

a `FileStat` object

___

#### `Static` symlink

▸ **symlink**(`old_path`: string, `new_path`: string): *bool*

*Defined in [assembly/as-wasi.ts:587](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L587)*

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

*Defined in [assembly/as-wasi.ts:613](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L613)*

Unlink a file

**`path`** path

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *bool*

`true` on success, `false` on failure


<a name="classesiovecmd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [iovec](#classesiovecmd)

## Class: iovec

A region of memory for scatter/gather reads.

### Hierarchy

* **iovec**

### Index

#### Properties

* [buf](#buf)
* [buf_len](#buf_len)

### Properties

####  buf

• **buf**: *usize*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1148

The address of the buffer to be filled.

___

####  buf_len

• **buf_len**: *usize*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1150

The length of the buffer to be filled.


<a name="classesperformancemd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [Performance](#classesperformancemd)

## Class: Performance

### Hierarchy

* **Performance**

### Index

#### Methods

* [now](#static-now)

### Methods

#### `Static` now

▸ **now**(): *f64*

*Defined in [assembly/as-wasi.ts:852](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L852)*

**Returns:** *f64*


<a name="classesprestatmd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [prestat](#classesprestatmd)

## Class: prestat

### Hierarchy

* [$prestat](#classes_prestatmd)

  ↳ **prestat**

### Index

#### Properties

* [__padding0](#private-__padding0)
* [type](#type)

### Properties

#### `Private` __padding0

• **__padding0**: *usize*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1202

___

####  type

• **type**: *[preopentype](#modulespreopentypemd)*

*Inherited from [$prestat](#classes_prestatmd).[type](#type)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1197


<a name="classesprestat_dirmd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [prestat_dir](#classesprestat_dirmd)

## Class: prestat_dir

The contents of a $prestat when type is `preopentype.DIR`.

### Hierarchy

* [$prestat](#classes_prestatmd)

  ↳ **prestat_dir**

### Index

#### Properties

* [name_len](#name_len)
* [type](#type)

### Properties

####  name_len

• **name_len**: *usize*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1208

The length of the directory name for use with `fd_prestat_dir_name`.

___

####  type

• **type**: *[preopentype](#modulespreopentypemd)*

*Inherited from [$prestat](#classes_prestatmd).[type](#type)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1197


<a name="classesprocessmd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [Process](#classesprocessmd)

## Class: Process

### Hierarchy

* **Process**

### Index

#### Methods

* [exit](#static-exit)

### Methods

#### `Static` exit

▸ **exit**(`status`: u32): *void*

*Defined in [assembly/as-wasi.ts:867](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L867)*

Cleanly terminate the current process

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`status` | u32 | exit code  |

**Returns:** *void*


<a name="classesrandommd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [Random](#classesrandommd)

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

*Defined in [assembly/as-wasi.ts:831](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L831)*

Return an array of random bytes

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`len` | usize | length  |

**Returns:** *Uint8Array*

___

#### `Static` randomFill

▸ **randomFill**(`buffer`: ArrayBuffer): *void*

*Defined in [assembly/as-wasi.ts:814](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L814)*

Fill a buffer with random data

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`buffer` | ArrayBuffer | An array buffer  |

**Returns:** *void*


<a name="classesstringutilsmd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [StringUtils](#classesstringutilsmd)

## Class: StringUtils

### Hierarchy

* **StringUtils**

### Index

#### Methods

* [fromCString](#static-fromcstring)

### Methods

#### `Static` fromCString

▸ **fromCString**(`cstring`: usize): *string*

*Defined in [assembly/as-wasi.ts:1023](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L1023)*

Returns a native string from a zero-terminated C string

**Parameters:**

Name | Type |
------ | ------ |
`cstring` | usize |

**Returns:** *string*

native string


<a name="classessubscriptionmd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [subscription](#classessubscriptionmd)

## Class: subscription

Subscription to an event.

### Hierarchy

* [$subscription](#classes_subscriptionmd)

  ↳ **subscription**

### Index

#### Properties

* [__padding1](#private-__padding1)
* [__padding2](#private-__padding2)
* [__padding3](#private-__padding3)
* [__padding4](#private-__padding4)
* [type](#type)
* [userdata](#userdata)

### Properties

#### `Private` __padding1

• **__padding1**: *u64*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1514

___

#### `Private` __padding2

• **__padding2**: *u64*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1515

___

#### `Private` __padding3

• **__padding3**: *u64*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1516

___

#### `Private` __padding4

• **__padding4**: *u64*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1517

___

####  type

• **type**: *[eventtype](#moduleseventtypemd)*

*Inherited from [$subscription](#classes_subscriptionmd).[type](#type)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1507

The type of the event to which to subscribe.

___

####  userdata

• **userdata**: *[userdata](#userdata)*

*Inherited from [$subscription](#classes_subscriptionmd).[userdata](#userdata)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1505

User-provided value that is attached to the subscription.


<a name="classessubscription_clockmd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [subscription_clock](#classessubscription_clockmd)

## Class: subscription_clock

### Hierarchy

* [$subscription](#classes_subscriptionmd)

  ↳ **subscription_clock**

### Index

#### Properties

* [__padding1](#private-__padding1)
* [clock_id](#clock_id)
* [flags](#flags)
* [precision](#precision)
* [timeout](#timeout)
* [type](#type)
* [userdata](#userdata)

### Properties

#### `Private` __padding1

• **__padding1**: *u32*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1531

___

####  clock_id

• **clock_id**: *[clockid](#modulesclockidmd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1523

The clock against which to compare the timestamp.

___

####  flags

• **flags**: *[subclockflags](#modulessubclockflagsmd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1529

Flags specifying whether the timeout is absolute or relative.

___

####  precision

• **precision**: *[timestamp](#timestamp)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1527

The amount of time that the implementation may wait additionally to coalesce with other events.

___

####  timeout

• **timeout**: *[timestamp](#timestamp)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1525

The absolute or relative timestamp.

___

####  type

• **type**: *[eventtype](#moduleseventtypemd)*

*Inherited from [$subscription](#classes_subscriptionmd).[type](#type)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1507

The type of the event to which to subscribe.

___

####  userdata

• **userdata**: *[userdata](#userdata)*

*Inherited from [$subscription](#classes_subscriptionmd).[userdata](#userdata)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1505

User-provided value that is attached to the subscription.


<a name="classessubscription_fd_readwritemd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [subscription_fd_readwrite](#classessubscription_fd_readwritemd)

## Class: subscription_fd_readwrite

### Hierarchy

* [$subscription](#classes_subscriptionmd)

  ↳ **subscription_fd_readwrite**

### Index

#### Properties

* [__padding1](#private-__padding1)
* [__padding2](#private-__padding2)
* [__padding3](#private-__padding3)
* [file_descriptor](#file_descriptor)
* [type](#type)
* [userdata](#userdata)

### Properties

#### `Private` __padding1

• **__padding1**: *u64*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1539

___

#### `Private` __padding2

• **__padding2**: *u64*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1540

___

#### `Private` __padding3

• **__padding3**: *u64*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1541

___

####  file_descriptor

• **file_descriptor**: *fd*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1537

The file descriptor on which to wait for it to become ready for reading or writing.

___

####  type

• **type**: *[eventtype](#moduleseventtypemd)*

*Inherited from [$subscription](#classes_subscriptionmd).[type](#type)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1507

The type of the event to which to subscribe.

___

####  userdata

• **userdata**: *[userdata](#userdata)*

*Inherited from [$subscription](#classes_subscriptionmd).[userdata](#userdata)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1505

User-provided value that is attached to the subscription.


<a name="classestimemd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [Time](#classestimemd)

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

*Defined in [assembly/as-wasi.ts:978](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L978)*

___

#### `Static` NANOSECOND

▪ **NANOSECOND**: *i32* = 1

*Defined in [assembly/as-wasi.ts:977](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L977)*

___

#### `Static` SECOND

▪ **SECOND**: *i32* = Time.MILLISECOND * 1000

*Defined in [assembly/as-wasi.ts:979](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L979)*

### Methods

#### `Static` sleep

▸ **sleep**(`nanoseconds`: i32): *void*

*Defined in [assembly/as-wasi.ts:983](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L983)*

**Parameters:**

Name | Type |
------ | ------ |
`nanoseconds` | i32 |

**Returns:** *void*


<a name="classeswasierrormd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [WASIError](#classeswasierrormd)

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

\+ **new WASIError**(`message`: string): *[WASIError](#classeswasierrormd)*

*Overrides void*

*Defined in [assembly/as-wasi.ts:60](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L60)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`message` | string | "" |

**Returns:** *[WASIError](#classeswasierrormd)*

### Properties

####  message

• **message**: *string*

*Inherited from [WASIError](#classeswasierrormd).[message](#message)*

Defined in node_modules/assemblyscript/std/assembly/index.d.ts:1578

Message provided on construction.

___

####  name

• **name**: *string*

*Inherited from [WASIError](#classeswasierrormd).[name](#name)*

Defined in node_modules/assemblyscript/std/assembly/index.d.ts:1575

Error name.

___

#### `Optional` stack

• **stack**? : *undefined | string*

*Inherited from [WASIError](#classeswasierrormd).[stack](#optional-stack)*

Defined in node_modules/assemblyscript/std/assembly/index.d.ts:1581

Stack trace.

### Methods

####  toString

▸ **toString**(): *string*

*Inherited from [WASIError](#classeswasierrormd).[toString](#tostring)*

Defined in node_modules/assemblyscript/std/assembly/index.d.ts:1587

Method returns a string representing the specified Error class.

**Returns:** *string*


<a name="globalsmd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd)

# assemblyscript

## Index

### Namespaces

* [advice](#modulesadvicemd)
* [clockid](#modulesclockidmd)
* [errno](#moduleserrnomd)
* [eventrwflags](#moduleseventrwflagsmd)
* [eventtype](#moduleseventtypemd)
* [fdflags](#modulesfdflagsmd)
* [filetype](#modulesfiletypemd)
* [fstflags](#modulesfstflagsmd)
* [lookupflags](#moduleslookupflagsmd)
* [oflags](#modulesoflagsmd)
* [preopentype](#modulespreopentypemd)
* [riflags](#modulesriflagsmd)
* [rights](#modulesrightsmd)
* [roflags](#modulesroflagsmd)
* [sdflags](#modulessdflagsmd)
* [siflags](#modulessiflagsmd)
* [signal](#modulessignalmd)
* [subclockflags](#modulessubclockflagsmd)
* [whence](#moduleswhencemd)

### Classes

* [$event](#classes_eventmd)
* [$prestat](#classes_prestatmd)
* [$subscription](#classes_subscriptionmd)
* [CommandLine](#classescommandlinemd)
* [Console](#classesconsolemd)
* [Date](#classesdatemd)
* [Descriptor](#classesdescriptormd)
* [Environ](#classesenvironmd)
* [EnvironEntry](#classesenvironentrymd)
* [FileStat](#classesfilestatmd)
* [FileSystem](#classesfilesystemmd)
* [Performance](#classesperformancemd)
* [Process](#classesprocessmd)
* [Random](#classesrandommd)
* [StringUtils](#classesstringutilsmd)
* [Time](#classestimemd)
* [WASIError](#classeswasierrormd)
* [dirent](#classesdirentmd)
* [event](#classeseventmd)
* [event_fd_readwrite](#classesevent_fd_readwritemd)
* [fdstat](#classesfdstatmd)
* [filestat](#classesfilestatmd)
* [iovec](#classesiovecmd)
* [prestat](#classesprestatmd)
* [prestat_dir](#classesprestat_dirmd)
* [subscription](#classessubscriptionmd)
* [subscription_clock](#classessubscription_clockmd)
* [subscription_fd_readwrite](#classessubscription_fd_readwritemd)

### Type aliases

* [aisize](#aisize)
* [char](#char)
* [device](#device)
* [dircookie](#dircookie)
* [exitcode](#exitcode)
* [fd](#fd)
* [filedelta](#filedelta)
* [filesize](#filesize)
* [inode](#inode)
* [linkcount](#linkcount)
* [ptr](#ptr)
* [struct](#struct)
* [timestamp](#timestamp)
* [userdata](#userdata)

### Functions

* [args_get](#args_get)
* [args_sizes_get](#args_sizes_get)
* [clock_res_get](#clock_res_get)
* [clock_time_get](#clock_time_get)
* [environ_get](#environ_get)
* [environ_sizes_get](#environ_sizes_get)
* [fd_advise](#fd_advise)
* [fd_allocate](#fd_allocate)
* [fd_close](#fd_close)
* [fd_datasync](#fd_datasync)
* [fd_fdstat_get](#fd_fdstat_get)
* [fd_fdstat_set_flags](#fd_fdstat_set_flags)
* [fd_fdstat_set_rights](#fd_fdstat_set_rights)
* [fd_filestat_get](#fd_filestat_get)
* [fd_filestat_set_size](#fd_filestat_set_size)
* [fd_filestat_set_times](#fd_filestat_set_times)
* [fd_pread](#fd_pread)
* [fd_prestat_dir_name](#fd_prestat_dir_name)
* [fd_prestat_get](#fd_prestat_get)
* [fd_pwrite](#fd_pwrite)
* [fd_read](#fd_read)
* [fd_readdir](#fd_readdir)
* [fd_renumber](#fd_renumber)
* [fd_seek](#fd_seek)
* [fd_sync](#fd_sync)
* [fd_tell](#fd_tell)
* [fd_write](#fd_write)
* [path_create_directory](#path_create_directory)
* [path_filestat_get](#path_filestat_get)
* [path_filestat_set_times](#path_filestat_set_times)
* [path_link](#path_link)
* [path_open](#path_open)
* [path_readlink](#path_readlink)
* [path_remove_directory](#path_remove_directory)
* [path_rename](#path_rename)
* [path_symlink](#path_symlink)
* [path_unlink_file](#path_unlink_file)
* [poll_oneoff](#poll_oneoff)
* [proc_exit](#proc_exit)
* [proc_raise](#proc_raise)
* [random_get](#random_get)
* [sched_yield](#sched_yield)
* [sock_recv](#sock_recv)
* [sock_send](#sock_send)
* [sock_shutdown](#sock_shutdown)
* [wasi_abort](#wasi_abort)

## Type aliases

###  aisize

Ƭ **aisize**: *i32*

*Defined in [assembly/as-wasi.ts:55](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L55)*

___

###  char

Ƭ **char**: *u8*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:7

___

###  device

Ƭ **device**: *u64*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:631

Identifier for a device containing a file system. Can be used in combination with `inode` to uniquely identify a file or directory in the filesystem.

___

###  dircookie

Ƭ **dircookie**: *u64*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:634

A reference to the offset of a directory entry. The value 0 signifies the start of the directory.

___

###  exitcode

Ƭ **exitcode**: *u32*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1016

Exit code generated by a process when exiting.

___

###  fd

Ƭ **fd**: *u32*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1019

A file descriptor number.

___

###  filedelta

Ƭ **filedelta**: *i64*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1059

Relative offset within a file.

___

###  filesize

Ƭ **filesize**: *u64*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1062

Non-negative file size or length of a region within a file.

___

###  inode

Ƭ **inode**: *u64*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1143

File serial number that is unique within its file system.

___

###  linkcount

Ƭ **linkcount**: *u64*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1154

Number of hard links to an inode.

___

###  ptr

Ƭ **ptr**: *usize*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:8

___

###  struct

Ƭ **struct**: *T*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:9

___

###  timestamp

Ƭ **timestamp**: *u64*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1545

Timestamp in nanoseconds.

___

###  userdata

Ƭ **userdata**: *u64*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1548

User-provided value that may be attached to objects that is retained when extracted from the implementation.

## Functions

###  args_get

▸ **args_get**(`argv`: [ptr](#ptr)‹[ptr](#ptr)‹[char](#char)››, `argv_buf`: [ptr](#ptr)‹[char](#char)›): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:14

Read command-line argument data.

**Parameters:**

Name | Type |
------ | ------ |
`argv` | [ptr](#ptr)‹[ptr](#ptr)‹[char](#char)›› |
`argv_buf` | [ptr](#ptr)‹[char](#char)› |

**Returns:** *[errno](#moduleserrnomd)*

___

###  args_sizes_get

▸ **args_sizes_get**(`argc`: [ptr](#ptr)‹usize›, `argv_buf_size`: [ptr](#ptr)‹usize›): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:24

Return command-line argument data sizes.

**Parameters:**

Name | Type |
------ | ------ |
`argc` | [ptr](#ptr)‹usize› |
`argv_buf_size` | [ptr](#ptr)‹usize› |

**Returns:** *[errno](#moduleserrnomd)*

___

###  clock_res_get

▸ **clock_res_get**(`clock`: [clockid](#modulesclockidmd), `resolution`: [ptr](#ptr)‹[timestamp](#timestamp)›): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:34

Return the resolution of a clock.

**Parameters:**

Name | Type |
------ | ------ |
`clock` | [clockid](#modulesclockidmd) |
`resolution` | [ptr](#ptr)‹[timestamp](#timestamp)› |

**Returns:** *[errno](#moduleserrnomd)*

___

###  clock_time_get

▸ **clock_time_get**(`clock`: [clockid](#modulesclockidmd), `precision`: [timestamp](#timestamp), `time`: [ptr](#ptr)‹[timestamp](#timestamp)›): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:44

Return the time value of a clock.

**Parameters:**

Name | Type |
------ | ------ |
`clock` | [clockid](#modulesclockidmd) |
`precision` | [timestamp](#timestamp) |
`time` | [ptr](#ptr)‹[timestamp](#timestamp)› |

**Returns:** *[errno](#moduleserrnomd)*

___

###  environ_get

▸ **environ_get**(`environ`: [ptr](#ptr)‹usize›, `environ_buf`: usize): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:56

Read environment variable data.

**Parameters:**

Name | Type |
------ | ------ |
`environ` | [ptr](#ptr)‹usize› |
`environ_buf` | usize |

**Returns:** *[errno](#moduleserrnomd)*

___

###  environ_sizes_get

▸ **environ_sizes_get**(`environ_count`: [ptr](#ptr)‹usize›, `environ_buf_size`: [ptr](#ptr)‹usize›): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:66

Return command-line argument data sizes.

**Parameters:**

Name | Type |
------ | ------ |
`environ_count` | [ptr](#ptr)‹usize› |
`environ_buf_size` | [ptr](#ptr)‹usize› |

**Returns:** *[errno](#moduleserrnomd)*

___

###  fd_advise

▸ **fd_advise**(`fd`: fd, `offset`: [filesize](#filesize), `len`: [filesize](#filesize), `advice`: advice): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:76

Provide file advisory information on a file descriptor.

**Parameters:**

Name | Type |
------ | ------ |
`fd` | fd |
`offset` | [filesize](#filesize) |
`len` | [filesize](#filesize) |
`advice` | advice |

**Returns:** *[errno](#moduleserrnomd)*

___

###  fd_allocate

▸ **fd_allocate**(`fd`: fd, `offset`: [filesize](#filesize), `len`: [filesize](#filesize)): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:90

Provide file advisory information on a file descriptor.

**Parameters:**

Name | Type |
------ | ------ |
`fd` | fd |
`offset` | [filesize](#filesize) |
`len` | [filesize](#filesize) |

**Returns:** *[errno](#moduleserrnomd)*

___

###  fd_close

▸ **fd_close**(`fd`: fd): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:102

Close a file descriptor.

**Parameters:**

Name | Type |
------ | ------ |
`fd` | fd |

**Returns:** *[errno](#moduleserrnomd)*

___

###  fd_datasync

▸ **fd_datasync**(`fd`: fd): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:110

Synchronize the data of a file to disk.

**Parameters:**

Name | Type |
------ | ------ |
`fd` | fd |

**Returns:** *[errno](#moduleserrnomd)*

___

###  fd_fdstat_get

▸ **fd_fdstat_get**(`fd`: fd, `buf`: [struct](#struct)‹[fdstat](#classesfdstatmd)›): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:118

Get the attributes of a file descriptor.

**Parameters:**

Name | Type |
------ | ------ |
`fd` | fd |
`buf` | [struct](#struct)‹[fdstat](#classesfdstatmd)› |

**Returns:** *[errno](#moduleserrnomd)*

___

###  fd_fdstat_set_flags

▸ **fd_fdstat_set_flags**(`fd`: fd, `flags`: [fdflags](#modulesfdflagsmd)): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:128

Adjust the flags associated with a file descriptor.

**Parameters:**

Name | Type |
------ | ------ |
`fd` | fd |
`flags` | [fdflags](#modulesfdflagsmd) |

**Returns:** *[errno](#moduleserrnomd)*

___

###  fd_fdstat_set_rights

▸ **fd_fdstat_set_rights**(`fd`: fd, `fs_rights_base`: [rights](#modulesrightsmd), `fs_rights_inheriting`: [rights](#modulesrightsmd)): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:138

Adjust the rights associated with a file descriptor.

**Parameters:**

Name | Type |
------ | ------ |
`fd` | fd |
`fs_rights_base` | [rights](#modulesrightsmd) |
`fs_rights_inheriting` | [rights](#modulesrightsmd) |

**Returns:** *[errno](#moduleserrnomd)*

___

###  fd_filestat_get

▸ **fd_filestat_get**(`fd`: fd, `buf`: [struct](#struct)‹[filestat](#classesfilestatmd)›): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:150

Return the attributes of an open file.

**Parameters:**

Name | Type |
------ | ------ |
`fd` | fd |
`buf` | [struct](#struct)‹[filestat](#classesfilestatmd)› |

**Returns:** *[errno](#moduleserrnomd)*

___

###  fd_filestat_set_size

▸ **fd_filestat_set_size**(`fd`: fd, `size`: [filesize](#filesize)): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:160

Adjust the size of an open file. If this increases the file's size, the extra bytes are filled with zeros.

**Parameters:**

Name | Type |
------ | ------ |
`fd` | fd |
`size` | [filesize](#filesize) |

**Returns:** *[errno](#moduleserrnomd)*

___

###  fd_filestat_set_times

▸ **fd_filestat_set_times**(`fd`: fd, `st_atim`: [timestamp](#timestamp), `st_mtim`: [timestamp](#timestamp), `fstflags`: fstflags): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:170

Adjust the timestamps of an open file or directory.

**Parameters:**

Name | Type |
------ | ------ |
`fd` | fd |
`st_atim` | [timestamp](#timestamp) |
`st_mtim` | [timestamp](#timestamp) |
`fstflags` | fstflags |

**Returns:** *[errno](#moduleserrnomd)*

___

###  fd_pread

▸ **fd_pread**(`fd`: fd, `iovs`: [ptr](#ptr)‹[struct](#struct)‹[iovec](#classesiovecmd)››, `iovs_len`: usize, `offset`: [filesize](#filesize), `nread`: [ptr](#ptr)‹usize›): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:184

Read from a file descriptor, without using and updating the file descriptor's offset.

**Parameters:**

Name | Type |
------ | ------ |
`fd` | fd |
`iovs` | [ptr](#ptr)‹[struct](#struct)‹[iovec](#classesiovecmd)›› |
`iovs_len` | usize |
`offset` | [filesize](#filesize) |
`nread` | [ptr](#ptr)‹usize› |

**Returns:** *[errno](#moduleserrnomd)*

___

###  fd_prestat_dir_name

▸ **fd_prestat_dir_name**(`fd`: fd, `path`: [ptr](#ptr)‹[char](#char)›, `path_len`: usize): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:210

Return a description of the given preopened file descriptor.

**Parameters:**

Name | Type |
------ | ------ |
`fd` | fd |
`path` | [ptr](#ptr)‹[char](#char)› |
`path_len` | usize |

**Returns:** *[errno](#moduleserrnomd)*

___

###  fd_prestat_get

▸ **fd_prestat_get**(`fd`: fd, `buf`: [struct](#struct)‹[prestat](#classesprestatmd)›): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:200

Return a description of the given preopened file descriptor.

**Parameters:**

Name | Type |
------ | ------ |
`fd` | fd |
`buf` | [struct](#struct)‹[prestat](#classesprestatmd)› |

**Returns:** *[errno](#moduleserrnomd)*

___

###  fd_pwrite

▸ **fd_pwrite**(`fd`: fd, `iovs`: [ptr](#ptr)‹[struct](#struct)‹[iovec](#classesiovecmd)››, `iovs_len`: usize, `offset`: [filesize](#filesize), `nwritten`: [ptr](#ptr)‹usize›): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:222

Write to a file descriptor, without using and updating the file descriptor's offset.

**Parameters:**

Name | Type |
------ | ------ |
`fd` | fd |
`iovs` | [ptr](#ptr)‹[struct](#struct)‹[iovec](#classesiovecmd)›› |
`iovs_len` | usize |
`offset` | [filesize](#filesize) |
`nwritten` | [ptr](#ptr)‹usize› |

**Returns:** *[errno](#moduleserrnomd)*

___

###  fd_read

▸ **fd_read**(`fd`: fd, `iovs`: [ptr](#ptr)‹[struct](#struct)‹[iovec](#classesiovecmd)››, `iovs_len`: usize, `nread`: [ptr](#ptr)‹usize›): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:238

Read from a file descriptor.

**Parameters:**

Name | Type |
------ | ------ |
`fd` | fd |
`iovs` | [ptr](#ptr)‹[struct](#struct)‹[iovec](#classesiovecmd)›› |
`iovs_len` | usize |
`nread` | [ptr](#ptr)‹usize› |

**Returns:** *[errno](#moduleserrnomd)*

___

###  fd_readdir

▸ **fd_readdir**(`fd`: fd, `buf`: [ptr](#ptr)‹[struct](#struct)‹[dirent](#classesdirentmd)››, `buf_len`: usize, `cookie`: [dircookie](#dircookie), `buf_used`: [ptr](#ptr)‹usize›): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:252

Read directory entries from a directory.

**Parameters:**

Name | Type |
------ | ------ |
`fd` | fd |
`buf` | [ptr](#ptr)‹[struct](#struct)‹[dirent](#classesdirentmd)›› |
`buf_len` | usize |
`cookie` | [dircookie](#dircookie) |
`buf_used` | [ptr](#ptr)‹usize› |

**Returns:** *[errno](#moduleserrnomd)*

___

###  fd_renumber

▸ **fd_renumber**(`from`: fd, `to`: fd): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:268

Atomically replace a file descriptor by renumbering another file descriptor.

**Parameters:**

Name | Type |
------ | ------ |
`from` | fd |
`to` | fd |

**Returns:** *[errno](#moduleserrnomd)*

___

###  fd_seek

▸ **fd_seek**(`fd`: fd, `offset`: [filedelta](#filedelta), `whence`: whence, `newoffset`: [ptr](#ptr)‹[filesize](#filesize)›): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:278

Move the offset of a file descriptor.

**Parameters:**

Name | Type |
------ | ------ |
`fd` | fd |
`offset` | [filedelta](#filedelta) |
`whence` | whence |
`newoffset` | [ptr](#ptr)‹[filesize](#filesize)› |

**Returns:** *[errno](#moduleserrnomd)*

___

###  fd_sync

▸ **fd_sync**(`fd`: fd): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:292

Synchronize the data and metadata of a file to disk.

**Parameters:**

Name | Type |
------ | ------ |
`fd` | fd |

**Returns:** *[errno](#moduleserrnomd)*

___

###  fd_tell

▸ **fd_tell**(`fd`: fd, `newoffset`: [ptr](#ptr)‹[filesize](#filesize)›): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:300

Return the current offset of a file descriptor.

**Parameters:**

Name | Type |
------ | ------ |
`fd` | fd |
`newoffset` | [ptr](#ptr)‹[filesize](#filesize)› |

**Returns:** *[errno](#moduleserrnomd)*

___

###  fd_write

▸ **fd_write**(`fd`: fd, `iovs`: [ptr](#ptr)‹[struct](#struct)‹[iovec](#classesiovecmd)››, `iovs_len`: usize, `nwritten`: [ptr](#ptr)‹usize›): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:310

Write to a file descriptor.

**Parameters:**

Name | Type |
------ | ------ |
`fd` | fd |
`iovs` | [ptr](#ptr)‹[struct](#struct)‹[iovec](#classesiovecmd)›› |
`iovs_len` | usize |
`nwritten` | [ptr](#ptr)‹usize› |

**Returns:** *[errno](#moduleserrnomd)*

___

###  path_create_directory

▸ **path_create_directory**(`fd`: fd, `path`: [ptr](#ptr)‹[char](#char)›, `path_len`: usize): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:324

**Parameters:**

Name | Type |
------ | ------ |
`fd` | fd |
`path` | [ptr](#ptr)‹[char](#char)› |
`path_len` | usize |

**Returns:** *[errno](#moduleserrnomd)*

___

###  path_filestat_get

▸ **path_filestat_get**(`fd`: fd, `flags`: [lookupflags](#moduleslookupflagsmd), `path`: [ptr](#ptr)‹[char](#char)›, `path_len`: usize, `buf`: [struct](#struct)‹[filestat](#classesfilestatmd)›): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:336

Return the attributes of a file or directory.

**Parameters:**

Name | Type |
------ | ------ |
`fd` | fd |
`flags` | [lookupflags](#moduleslookupflagsmd) |
`path` | [ptr](#ptr)‹[char](#char)› |
`path_len` | usize |
`buf` | [struct](#struct)‹[filestat](#classesfilestatmd)› |

**Returns:** *[errno](#moduleserrnomd)*

___

###  path_filestat_set_times

▸ **path_filestat_set_times**(`fd`: fd, `flags`: [lookupflags](#moduleslookupflagsmd), `path`: [ptr](#ptr)‹[char](#char)›, `path_len`: usize, `st_atim`: [timestamp](#timestamp), `st_mtim`: [timestamp](#timestamp), `fstflags`: fstflags): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:352

Adjust the timestamps of a file or directory.

**Parameters:**

Name | Type |
------ | ------ |
`fd` | fd |
`flags` | [lookupflags](#moduleslookupflagsmd) |
`path` | [ptr](#ptr)‹[char](#char)› |
`path_len` | usize |
`st_atim` | [timestamp](#timestamp) |
`st_mtim` | [timestamp](#timestamp) |
`fstflags` | fstflags |

**Returns:** *[errno](#moduleserrnomd)*

___

###  path_link

▸ **path_link**(`old_fd`: fd, `old_flags`: [lookupflags](#moduleslookupflagsmd), `old_path`: [ptr](#ptr)‹[char](#char)›, `old_path_len`: usize, `new_fd`: fd, `new_path`: [ptr](#ptr)‹[char](#char)›, `new_path_len`: usize): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:372

Create a hard link.

**Parameters:**

Name | Type |
------ | ------ |
`old_fd` | fd |
`old_flags` | [lookupflags](#moduleslookupflagsmd) |
`old_path` | [ptr](#ptr)‹[char](#char)› |
`old_path_len` | usize |
`new_fd` | fd |
`new_path` | [ptr](#ptr)‹[char](#char)› |
`new_path_len` | usize |

**Returns:** *[errno](#moduleserrnomd)*

___

###  path_open

▸ **path_open**(`dirfd`: fd, `dirflags`: [lookupflags](#moduleslookupflagsmd), `path`: [ptr](#ptr)‹[char](#char)›, `path_len`: usize, `oflags`: oflags, `fs_rights_base`: [rights](#modulesrightsmd), `fs_rights_inheriting`: [rights](#modulesrightsmd), `fs_flags`: [fdflags](#modulesfdflagsmd), `fd`: [ptr](#ptr)‹fd›): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:392

Open a file or directory.

**Parameters:**

Name | Type |
------ | ------ |
`dirfd` | fd |
`dirflags` | [lookupflags](#moduleslookupflagsmd) |
`path` | [ptr](#ptr)‹[char](#char)› |
`path_len` | usize |
`oflags` | oflags |
`fs_rights_base` | [rights](#modulesrightsmd) |
`fs_rights_inheriting` | [rights](#modulesrightsmd) |
`fs_flags` | [fdflags](#modulesfdflagsmd) |
`fd` | [ptr](#ptr)‹fd› |

**Returns:** *[errno](#moduleserrnomd)*

___

###  path_readlink

▸ **path_readlink**(`fd`: fd, `path`: [ptr](#ptr)‹[char](#char)›, `path_len`: usize, `buf`: [ptr](#ptr)‹[char](#char)›, `buf_len`: usize, `buf_used`: [ptr](#ptr)‹usize›): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:416

Read the contents of a symbolic link.

**Parameters:**

Name | Type |
------ | ------ |
`fd` | fd |
`path` | [ptr](#ptr)‹[char](#char)› |
`path_len` | usize |
`buf` | [ptr](#ptr)‹[char](#char)› |
`buf_len` | usize |
`buf_used` | [ptr](#ptr)‹usize› |

**Returns:** *[errno](#moduleserrnomd)*

___

###  path_remove_directory

▸ **path_remove_directory**(`fd`: fd, `path`: [ptr](#ptr)‹[char](#char)›, `path_len`: usize): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:434

Remove a directory.

**Parameters:**

Name | Type |
------ | ------ |
`fd` | fd |
`path` | [ptr](#ptr)‹[char](#char)› |
`path_len` | usize |

**Returns:** *[errno](#moduleserrnomd)*

___

###  path_rename

▸ **path_rename**(`old_fd`: fd, `old_path`: [ptr](#ptr)‹[char](#char)›, `old_path_len`: usize, `new_fd`: fd, `new_path`: [ptr](#ptr)‹[char](#char)›, `new_path_len`: usize): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:446

Rename a file or directory.

**Parameters:**

Name | Type |
------ | ------ |
`old_fd` | fd |
`old_path` | [ptr](#ptr)‹[char](#char)› |
`old_path_len` | usize |
`new_fd` | fd |
`new_path` | [ptr](#ptr)‹[char](#char)› |
`new_path_len` | usize |

**Returns:** *[errno](#moduleserrnomd)*

___

###  path_symlink

▸ **path_symlink**(`old_path`: [ptr](#ptr)‹[char](#char)›, `old_path_len`: usize, `fd`: fd, `new_path`: [ptr](#ptr)‹[char](#char)›, `new_path_len`: usize): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:464

Create a symbolic link.

**Parameters:**

Name | Type |
------ | ------ |
`old_path` | [ptr](#ptr)‹[char](#char)› |
`old_path_len` | usize |
`fd` | fd |
`new_path` | [ptr](#ptr)‹[char](#char)› |
`new_path_len` | usize |

**Returns:** *[errno](#moduleserrnomd)*

___

###  path_unlink_file

▸ **path_unlink_file**(`fd`: fd, `path`: [ptr](#ptr)‹[char](#char)›, `path_len`: usize): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:480

Unlink a file.

**Parameters:**

Name | Type |
------ | ------ |
`fd` | fd |
`path` | [ptr](#ptr)‹[char](#char)› |
`path_len` | usize |

**Returns:** *[errno](#moduleserrnomd)*

___

###  poll_oneoff

▸ **poll_oneoff**(`in_`: [ptr](#ptr)‹[struct](#struct)‹[subscription](#classessubscriptionmd)››, `out`: [ptr](#ptr)‹[struct](#struct)‹[event](#classeseventmd)››, `nsubscriptions`: usize, `nevents`: [ptr](#ptr)‹usize›): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:492

Concurrently poll for the occurrence of a set of events.

**Parameters:**

Name | Type |
------ | ------ |
`in_` | [ptr](#ptr)‹[struct](#struct)‹[subscription](#classessubscriptionmd)›› |
`out` | [ptr](#ptr)‹[struct](#struct)‹[event](#classeseventmd)›› |
`nsubscriptions` | usize |
`nevents` | [ptr](#ptr)‹usize› |

**Returns:** *[errno](#moduleserrnomd)*

___

###  proc_exit

▸ **proc_exit**(`rval`: u32): *void*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:506

Terminate the process normally. An exit code of 0 indicates successful termination of the program. The meanings of other values is dependent on the environment.

**Parameters:**

Name | Type |
------ | ------ |
`rval` | u32 |

**Returns:** *void*

___

###  proc_raise

▸ **proc_raise**(`sig`: [signal](#modulessignalmd)): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:514

Send a signal to the process of the calling thread.

**Parameters:**

Name | Type |
------ | ------ |
`sig` | [signal](#modulessignalmd) |

**Returns:** *[errno](#moduleserrnomd)*

___

###  random_get

▸ **random_get**(`buf`: usize, `buf_len`: usize): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:522

Write high-quality random data into a buffer.

**Parameters:**

Name | Type |
------ | ------ |
`buf` | usize |
`buf_len` | usize |

**Returns:** *[errno](#moduleserrnomd)*

___

###  sched_yield

▸ **sched_yield**(): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:532

Temporarily yield execution of the calling thread.

**Returns:** *[errno](#moduleserrnomd)*

___

###  sock_recv

▸ **sock_recv**(`sock`: fd, `ri_data`: [ptr](#ptr)‹[struct](#struct)‹[iovec](#classesiovecmd)››, `ri_data_len`: usize, `ri_flags`: [riflags](#modulesriflagsmd), `ro_datalen`: [ptr](#ptr)‹usize›, `ro_flags`: [ptr](#ptr)‹[roflags](#modulesroflagsmd)›): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:537

Receive a message from a socket.

**Parameters:**

Name | Type |
------ | ------ |
`sock` | fd |
`ri_data` | [ptr](#ptr)‹[struct](#struct)‹[iovec](#classesiovecmd)›› |
`ri_data_len` | usize |
`ri_flags` | [riflags](#modulesriflagsmd) |
`ro_datalen` | [ptr](#ptr)‹usize› |
`ro_flags` | [ptr](#ptr)‹[roflags](#modulesroflagsmd)› |

**Returns:** *[errno](#moduleserrnomd)*

___

###  sock_send

▸ **sock_send**(`sock`: fd, `si_data`: [ptr](#ptr)‹[struct](#struct)‹[iovec](#classesiovecmd)››, `si_data_len`: usize, `si_flags`: [siflags](#modulessiflagsmd), `so_datalen`: [ptr](#ptr)‹usize›): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:555

Send a message on a socket.

**Parameters:**

Name | Type |
------ | ------ |
`sock` | fd |
`si_data` | [ptr](#ptr)‹[struct](#struct)‹[iovec](#classesiovecmd)›› |
`si_data_len` | usize |
`si_flags` | [siflags](#modulessiflagsmd) |
`so_datalen` | [ptr](#ptr)‹usize› |

**Returns:** *[errno](#moduleserrnomd)*

___

###  sock_shutdown

▸ **sock_shutdown**(`sock`: fd, `how`: [sdflags](#modulessdflagsmd)): *[errno](#moduleserrnomd)*

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:571

Shut down socket send and receive channels.

**Parameters:**

Name | Type |
------ | ------ |
`sock` | fd |
`how` | [sdflags](#modulessdflagsmd) |

**Returns:** *[errno](#moduleserrnomd)*

___

###  wasi_abort

▸ **wasi_abort**(`message`: string, `fileName`: string, `lineNumber`: u32, `columnNumber`: u32): *void*

*Defined in [assembly/as-wasi.ts:1034](https://github.com/torch2424/as-wasi/blob/5b6c28b/assembly/as-wasi.ts#L1034)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`message` | string | "" |
`fileName` | string | "" |
`lineNumber` | u32 | 0 |
`columnNumber` | u32 | 0 |

**Returns:** *void*

# Modules


<a name="modulesadvicemd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [advice](#modulesadvicemd)

## Namespace: advice

File or memory access pattern advisory information.

### Index

#### Variables

* [DONTNEED](#const-dontneed)
* [NOREUSE](#const-noreuse)
* [NORMAL](#const-normal)
* [RANDOM](#const-random)
* [SEQUENTIAL](#const-sequential)
* [WILLNEED](#const-willneed)

### Variables

#### `Const` DONTNEED

• **DONTNEED**: *advice* = 4

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:601

The application expects that it will not access the specified data in the near future.

___

#### `Const` NOREUSE

• **NOREUSE**: *advice* = 5

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:605

The application expects to access the specified data once and then not reuse it thereafter.

___

#### `Const` NORMAL

• **NORMAL**: *advice* = 0

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:585

The application has no advice to give on its behavior with respect to the specified data.

___

#### `Const` RANDOM

• **RANDOM**: *advice* = 2

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:593

The application expects to access the specified data in a random order.

___

#### `Const` SEQUENTIAL

• **SEQUENTIAL**: *advice* = 1

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:589

The application expects to access the specified data sequentially from lower offsets to higher offsets.

___

#### `Const` WILLNEED

• **WILLNEED**: *advice* = 3

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:597

The application expects to access the specified data in the near future.


<a name="modulesclockidmd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [clockid](#modulesclockidmd)

## Namespace: clockid

Identifiers for clocks.

### Index

#### Variables

* [MONOTONIC](#const-monotonic)
* [PROCESS_CPUTIME_ID](#const-process_cputime_id)
* [REALTIME](#const-realtime)
* [THREAD_CPUTIME_ID](#const-thread_cputime_id)

### Variables

#### `Const` MONOTONIC

• **MONOTONIC**: *[clockid](#modulesclockidmd)* = 1

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:618

The store-wide monotonic clock. Absolute value has no meaning.

___

#### `Const` PROCESS_CPUTIME_ID

• **PROCESS_CPUTIME_ID**: *[clockid](#modulesclockidmd)* = 2

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:622

The CPU-time clock associated with the current process.

___

#### `Const` REALTIME

• **REALTIME**: *[clockid](#modulesclockidmd)* = 0

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:614

The clock measuring real time. Time value zero corresponds with 1970-01-01T00:00:00Z.

___

#### `Const` THREAD_CPUTIME_ID

• **THREAD_CPUTIME_ID**: *[clockid](#modulesclockidmd)* = 3

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:626

The CPU-time clock associated with the current thread.


<a name="moduleserrnomd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [errno](#moduleserrnomd)

## Namespace: errno

Error codes returned by functions.

### Index

#### Variables

* [ACCES](#const-acces)
* [ADDRINUSE](#const-addrinuse)
* [ADDRNOTAVAIL](#const-addrnotavail)
* [AFNOSUPPORT](#const-afnosupport)
* [AGAIN](#const-again)
* [ALREADY](#const-already)
* [BADF](#const-badf)
* [BADMSG](#const-badmsg)
* [BUSY](#const-busy)
* [CANCELED](#const-canceled)
* [CHILD](#const-child)
* [CONNABORTED](#const-connaborted)
* [CONNREFUSED](#const-connrefused)
* [CONNRESET](#const-connreset)
* [DEADLK](#const-deadlk)
* [DESTADDRREQ](#const-destaddrreq)
* [DOM](#const-dom)
* [DQUOT](#const-dquot)
* [EXIST](#const-exist)
* [FAULT](#const-fault)
* [FBIG](#const-fbig)
* [HOSTUNREACH](#const-hostunreach)
* [IDRM](#const-idrm)
* [ILSEQ](#const-ilseq)
* [INPROGRESS](#const-inprogress)
* [INTR](#const-intr)
* [INVAL](#const-inval)
* [IO](#const-io)
* [ISCONN](#const-isconn)
* [ISDIR](#const-isdir)
* [LOOP](#const-loop)
* [MFILE](#const-mfile)
* [MLINK](#const-mlink)
* [MSGSIZE](#const-msgsize)
* [MULTIHOP](#const-multihop)
* [NAMETOOLONG](#const-nametoolong)
* [NETDOWN](#const-netdown)
* [NETRESET](#const-netreset)
* [NETUNREACH](#const-netunreach)
* [NFILE](#const-nfile)
* [NOBUFS](#const-nobufs)
* [NODEV](#const-nodev)
* [NOENT](#const-noent)
* [NOEXEC](#const-noexec)
* [NOLCK](#const-nolck)
* [NOLINK](#const-nolink)
* [NOMEM](#const-nomem)
* [NOMSG](#const-nomsg)
* [NOPROTOOPT](#const-noprotoopt)
* [NOSPC](#const-nospc)
* [NOSYS](#const-nosys)
* [NOTCAPABLE](#const-notcapable)
* [NOTCONN](#const-notconn)
* [NOTDIR](#const-notdir)
* [NOTEMPTY](#const-notempty)
* [NOTRECOVERABLE](#const-notrecoverable)
* [NOTSOCK](#const-notsock)
* [NOTSUP](#const-notsup)
* [NOTTY](#const-notty)
* [NXIO](#const-nxio)
* [OVERFLOW](#const-overflow)
* [OWNERDEAD](#const-ownerdead)
* [PERM](#const-perm)
* [PIPE](#const-pipe)
* [PROTO](#const-proto)
* [PROTONOSUPPORT](#const-protonosupport)
* [PROTOTYPE](#const-prototype)
* [RANGE](#const-range)
* [ROFS](#const-rofs)
* [SPIPE](#const-spipe)
* [SRCH](#const-srch)
* [STALE](#const-stale)
* [SUCCESS](#const-success)
* [TIMEDOUT](#const-timedout)
* [TOOBIG](#const-toobig)
* [TXTBSY](#const-txtbsy)
* [XDEV](#const-xdev)

### Variables

#### `Const` ACCES

• **ACCES**: *[errno](#moduleserrnomd)* = 2

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:662

Permission denied.

___

#### `Const` ADDRINUSE

• **ADDRINUSE**: *[errno](#moduleserrnomd)* = 3

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:666

Address in use.

___

#### `Const` ADDRNOTAVAIL

• **ADDRNOTAVAIL**: *[errno](#moduleserrnomd)* = 4

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:670

Address not available.

___

#### `Const` AFNOSUPPORT

• **AFNOSUPPORT**: *[errno](#moduleserrnomd)* = 5

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:674

Address family not supported.

___

#### `Const` AGAIN

• **AGAIN**: *[errno](#moduleserrnomd)* = 6

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:678

Resource unavailable, or operation would block.

___

#### `Const` ALREADY

• **ALREADY**: *[errno](#moduleserrnomd)* = 7

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:682

Connection already in progress.

___

#### `Const` BADF

• **BADF**: *[errno](#moduleserrnomd)* = 8

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:686

Bad file descriptor.

___

#### `Const` BADMSG

• **BADMSG**: *[errno](#moduleserrnomd)* = 9

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:690

Bad message.

___

#### `Const` BUSY

• **BUSY**: *[errno](#moduleserrnomd)* = 10

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:694

Device or resource busy.

___

#### `Const` CANCELED

• **CANCELED**: *[errno](#moduleserrnomd)* = 11

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:698

Operation canceled.

___

#### `Const` CHILD

• **CHILD**: *[errno](#moduleserrnomd)* = 12

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:702

No child processes.

___

#### `Const` CONNABORTED

• **CONNABORTED**: *[errno](#moduleserrnomd)* = 13

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:706

Connection aborted.

___

#### `Const` CONNREFUSED

• **CONNREFUSED**: *[errno](#moduleserrnomd)* = 14

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:710

Connection refused.

___

#### `Const` CONNRESET

• **CONNRESET**: *[errno](#moduleserrnomd)* = 15

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:714

Connection reset.

___

#### `Const` DEADLK

• **DEADLK**: *[errno](#moduleserrnomd)* = 16

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:718

Resource deadlock would occur.

___

#### `Const` DESTADDRREQ

• **DESTADDRREQ**: *[errno](#moduleserrnomd)* = 17

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:722

Destination address required.

___

#### `Const` DOM

• **DOM**: *[errno](#moduleserrnomd)* = 18

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:726

Mathematics argument out of domain of function.

___

#### `Const` DQUOT

• **DQUOT**: *[errno](#moduleserrnomd)* = 19

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:730

Reserved.

___

#### `Const` EXIST

• **EXIST**: *[errno](#moduleserrnomd)* = 20

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:734

File exists.

___

#### `Const` FAULT

• **FAULT**: *[errno](#moduleserrnomd)* = 21

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:738

Bad address.

___

#### `Const` FBIG

• **FBIG**: *[errno](#moduleserrnomd)* = 22

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:742

File too large.

___

#### `Const` HOSTUNREACH

• **HOSTUNREACH**: *[errno](#moduleserrnomd)* = 23

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:746

Host is unreachable.

___

#### `Const` IDRM

• **IDRM**: *[errno](#moduleserrnomd)* = 24

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:750

Identifier removed.

___

#### `Const` ILSEQ

• **ILSEQ**: *[errno](#moduleserrnomd)* = 25

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:754

Illegal byte sequence.

___

#### `Const` INPROGRESS

• **INPROGRESS**: *[errno](#moduleserrnomd)* = 26

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:758

Operation in progress.

___

#### `Const` INTR

• **INTR**: *[errno](#moduleserrnomd)* = 27

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:762

Interrupted function.

___

#### `Const` INVAL

• **INVAL**: *[errno](#moduleserrnomd)* = 28

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:766

Invalid argument.

___

#### `Const` IO

• **IO**: *[errno](#moduleserrnomd)* = 29

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:770

I/O error.

___

#### `Const` ISCONN

• **ISCONN**: *[errno](#moduleserrnomd)* = 30

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:774

Socket is connected.

___

#### `Const` ISDIR

• **ISDIR**: *[errno](#moduleserrnomd)* = 31

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:778

Is a directory.

___

#### `Const` LOOP

• **LOOP**: *[errno](#moduleserrnomd)* = 32

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:782

Too many levels of symbolic links.

___

#### `Const` MFILE

• **MFILE**: *[errno](#moduleserrnomd)* = 33

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:786

File descriptor value too large.

___

#### `Const` MLINK

• **MLINK**: *[errno](#moduleserrnomd)* = 34

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:790

Too many links.

___

#### `Const` MSGSIZE

• **MSGSIZE**: *[errno](#moduleserrnomd)* = 35

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:794

Message too large.

___

#### `Const` MULTIHOP

• **MULTIHOP**: *[errno](#moduleserrnomd)* = 36

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:798

Reserved.

___

#### `Const` NAMETOOLONG

• **NAMETOOLONG**: *[errno](#moduleserrnomd)* = 37

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:802

Filename too long.

___

#### `Const` NETDOWN

• **NETDOWN**: *[errno](#moduleserrnomd)* = 38

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:806

Network is down.

___

#### `Const` NETRESET

• **NETRESET**: *[errno](#moduleserrnomd)* = 39

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:810

Connection aborted by network.

___

#### `Const` NETUNREACH

• **NETUNREACH**: *[errno](#moduleserrnomd)* = 40

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:814

Network unreachable.

___

#### `Const` NFILE

• **NFILE**: *[errno](#moduleserrnomd)* = 41

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:818

Too many files open in system.

___

#### `Const` NOBUFS

• **NOBUFS**: *[errno](#moduleserrnomd)* = 42

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:822

No buffer space available.

___

#### `Const` NODEV

• **NODEV**: *[errno](#moduleserrnomd)* = 43

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:826

No such device.

___

#### `Const` NOENT

• **NOENT**: *[errno](#moduleserrnomd)* = 44

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:830

No such file or directory.

___

#### `Const` NOEXEC

• **NOEXEC**: *[errno](#moduleserrnomd)* = 45

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:834

Executable file format error.

___

#### `Const` NOLCK

• **NOLCK**: *[errno](#moduleserrnomd)* = 46

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:838

No locks available.

___

#### `Const` NOLINK

• **NOLINK**: *[errno](#moduleserrnomd)* = 47

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:842

Reserved.

___

#### `Const` NOMEM

• **NOMEM**: *[errno](#moduleserrnomd)* = 48

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:846

Not enough space.

___

#### `Const` NOMSG

• **NOMSG**: *[errno](#moduleserrnomd)* = 49

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:850

No message of the desired type.

___

#### `Const` NOPROTOOPT

• **NOPROTOOPT**: *[errno](#moduleserrnomd)* = 50

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:854

Protocol not available.

___

#### `Const` NOSPC

• **NOSPC**: *[errno](#moduleserrnomd)* = 51

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:858

No space left on device.

___

#### `Const` NOSYS

• **NOSYS**: *[errno](#moduleserrnomd)* = 52

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:862

Function not supported.

___

#### `Const` NOTCAPABLE

• **NOTCAPABLE**: *[errno](#moduleserrnomd)* = 76

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:958

Extension: Capabilities insufficient.

___

#### `Const` NOTCONN

• **NOTCONN**: *[errno](#moduleserrnomd)* = 53

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:866

The socket is not connected.

___

#### `Const` NOTDIR

• **NOTDIR**: *[errno](#moduleserrnomd)* = 54

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:870

Not a directory or a symbolic link to a directory.

___

#### `Const` NOTEMPTY

• **NOTEMPTY**: *[errno](#moduleserrnomd)* = 55

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:874

Directory not empty.

___

#### `Const` NOTRECOVERABLE

• **NOTRECOVERABLE**: *[errno](#moduleserrnomd)* = 56

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:878

State not recoverable.

___

#### `Const` NOTSOCK

• **NOTSOCK**: *[errno](#moduleserrnomd)* = 57

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:882

Not a socket.

___

#### `Const` NOTSUP

• **NOTSUP**: *[errno](#moduleserrnomd)* = 58

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:886

Not supported, or operation not supported on socket.

___

#### `Const` NOTTY

• **NOTTY**: *[errno](#moduleserrnomd)* = 59

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:890

Inappropriate I/O control operation.

___

#### `Const` NXIO

• **NXIO**: *[errno](#moduleserrnomd)* = 60

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:894

No such device or address.

___

#### `Const` OVERFLOW

• **OVERFLOW**: *[errno](#moduleserrnomd)* = 61

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:898

Value too large to be stored in data type.

___

#### `Const` OWNERDEAD

• **OWNERDEAD**: *[errno](#moduleserrnomd)* = 62

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:902

Previous owner died.

___

#### `Const` PERM

• **PERM**: *[errno](#moduleserrnomd)* = 63

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:906

Operation not permitted.

___

#### `Const` PIPE

• **PIPE**: *[errno](#moduleserrnomd)* = 64

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:910

Broken pipe.

___

#### `Const` PROTO

• **PROTO**: *[errno](#moduleserrnomd)* = 65

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:914

Protocol error.

___

#### `Const` PROTONOSUPPORT

• **PROTONOSUPPORT**: *[errno](#moduleserrnomd)* = 66

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:918

Protocol not supported.

___

#### `Const` PROTOTYPE

• **PROTOTYPE**: *[errno](#moduleserrnomd)* = 67

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:922

Protocol wrong type for socket.

___

#### `Const` RANGE

• **RANGE**: *[errno](#moduleserrnomd)* = 68

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:926

Result too large.

___

#### `Const` ROFS

• **ROFS**: *[errno](#moduleserrnomd)* = 69

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:930

Read-only file system.

___

#### `Const` SPIPE

• **SPIPE**: *[errno](#moduleserrnomd)* = 70

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:934

Invalid seek.

___

#### `Const` SRCH

• **SRCH**: *[errno](#moduleserrnomd)* = 71

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:938

No such process.

___

#### `Const` STALE

• **STALE**: *[errno](#moduleserrnomd)* = 72

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:942

Reserved.

___

#### `Const` SUCCESS

• **SUCCESS**: *[errno](#moduleserrnomd)* = 0

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:654

No error occurred. System call completed successfully.

___

#### `Const` TIMEDOUT

• **TIMEDOUT**: *[errno](#moduleserrnomd)* = 73

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:946

Connection timed out.

___

#### `Const` TOOBIG

• **TOOBIG**: *[errno](#moduleserrnomd)* = 1

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:658

Argument list too long.

___

#### `Const` TXTBSY

• **TXTBSY**: *[errno](#moduleserrnomd)* = 74

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:950

Text file busy.

___

#### `Const` XDEV

• **XDEV**: *[errno](#moduleserrnomd)* = 75

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:954

Cross-device link.


<a name="moduleseventrwflagsmd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [eventrwflags](#moduleseventrwflagsmd)

## Namespace: eventrwflags

The state of the file descriptor subscribed to with `eventtype.FD_READ` or `eventtype.FD_WRITE`.

### Index

#### Variables

* [HANGUP](#const-hangup)

### Variables

#### `Const` HANGUP

• **HANGUP**: *[eventrwflags](#moduleseventrwflagsmd)* = 1

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:994

The peer of this socket has closed or disconnected.


<a name="moduleseventtypemd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [eventtype](#moduleseventtypemd)

## Namespace: eventtype

Type of a subscription to an event or its occurrence.

### Index

#### Variables

* [CLOCK](#const-clock)
* [FD_READ](#const-fd_read)
* [FD_WRITE](#const-fd_write)

### Variables

#### `Const` CLOCK

• **CLOCK**: *[eventtype](#moduleseventtypemd)* = 0

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1003

The time value of clock has reached the timestamp.

___

#### `Const` FD_READ

• **FD_READ**: *[eventtype](#moduleseventtypemd)* = 1

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1007

File descriptor has data available for reading.

___

#### `Const` FD_WRITE

• **FD_WRITE**: *[eventtype](#moduleseventtypemd)* = 2

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1011

File descriptor has capacity available for writing


<a name="modulesfdflagsmd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [fdflags](#modulesfdflagsmd)

## Namespace: fdflags

File descriptor flags.

### Index

#### Variables

* [APPEND](#const-append)
* [DSYNC](#const-dsync)
* [NONBLOCK](#const-nonblock)
* [RSYNC](#const-rsync)
* [SYNC](#const-sync)

### Variables

#### `Const` APPEND

• **APPEND**: *[fdflags](#modulesfdflagsmd)* = 1

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1026

Append mode: Data written to the file is always appended to the file's end.

___

#### `Const` DSYNC

• **DSYNC**: *[fdflags](#modulesfdflagsmd)* = 2

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1030

Write according to synchronized I/O data integrity completion. Only the data stored in the file is synchronized.

___

#### `Const` NONBLOCK

• **NONBLOCK**: *[fdflags](#modulesfdflagsmd)* = 4

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1034

Non-blocking mode.

___

#### `Const` RSYNC

• **RSYNC**: *[fdflags](#modulesfdflagsmd)* = 8

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1038

Synchronized read I/O operations.

___

#### `Const` SYNC

• **SYNC**: *[fdflags](#modulesfdflagsmd)* = 16

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1042

Write according to synchronized I/O file integrity completion.


<a name="modulesfiletypemd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [filetype](#modulesfiletypemd)

## Namespace: filetype

The type of a file descriptor or file.

### Index

#### Variables

* [BLOCK_DEVICE](#const-block_device)
* [CHARACTER_DEVICE](#const-character_device)
* [DIRECTORY](#const-directory)
* [REGULAR_FILE](#const-regular_file)
* [SOCKET_DGRAM](#const-socket_dgram)
* [SOCKET_STREAM](#const-socket_stream)
* [SYMBOLIC_LINK](#const-symbolic_link)
* [UNKNOWN](#const-unknown)

### Variables

#### `Const` BLOCK_DEVICE

• **BLOCK_DEVICE**: *[filetype](#filetype)* = 1

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1093

The file descriptor or file refers to a block device inode.

___

#### `Const` CHARACTER_DEVICE

• **CHARACTER_DEVICE**: *[filetype](#filetype)* = 2

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1097

The file descriptor or file refers to a character device inode.

___

#### `Const` DIRECTORY

• **DIRECTORY**: *[filetype](#filetype)* = 3

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1101

The file descriptor or file refers to a directory inode.

___

#### `Const` REGULAR_FILE

• **REGULAR_FILE**: *[filetype](#filetype)* = 4

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1105

The file descriptor or file refers to a regular file inode.

___

#### `Const` SOCKET_DGRAM

• **SOCKET_DGRAM**: *[filetype](#filetype)* = 5

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1109

The file descriptor or file refers to a datagram socket.

___

#### `Const` SOCKET_STREAM

• **SOCKET_STREAM**: *[filetype](#filetype)* = 6

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1113

The file descriptor or file refers to a byte-stream socket.

___

#### `Const` SYMBOLIC_LINK

• **SYMBOLIC_LINK**: *[filetype](#filetype)* = 7

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1117

The file refers to a symbolic link inode.

___

#### `Const` UNKNOWN

• **UNKNOWN**: *[filetype](#filetype)* = 0

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1089

The type of the file descriptor or file is unknown or is different from any of the other types specified.


<a name="modulesfstflagsmd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [fstflags](#modulesfstflagsmd)

## Namespace: fstflags

Which file time attributes to adjust.

### Index

#### Variables

* [SET_ATIM](#const-set_atim)
* [SET_ATIM_NOW](#const-set_atim_now)
* [SET_MTIM](#const-set_mtim)
* [SET_MTIM_NOW](#const-set_mtim_now)

### Variables

#### `Const` SET_ATIM

• **SET_ATIM**: *fstflags* = 1

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1126

Adjust the last data access timestamp to the value stored in `filestat#st_atim`.

___

#### `Const` SET_ATIM_NOW

• **SET_ATIM_NOW**: *fstflags* = 2

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1130

Adjust the last data access timestamp to the time of clock `clockid.REALTIME`.

___

#### `Const` SET_MTIM

• **SET_MTIM**: *fstflags* = 4

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1134

Adjust the last data modification timestamp to the value stored in `filestat#st_mtim`.

___

#### `Const` SET_MTIM_NOW

• **SET_MTIM_NOW**: *fstflags* = 8

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1138

Adjust the last data modification timestamp to the time of clock `clockid.REALTIME`.


<a name="moduleslookupflagsmd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [lookupflags](#moduleslookupflagsmd)

## Namespace: lookupflags

Flags determining the method of how paths are resolved.

### Index

#### Variables

* [SYMLINK_FOLLOW](#const-symlink_follow)

### Variables

#### `Const` SYMLINK_FOLLOW

• **SYMLINK_FOLLOW**: *[lookupflags](#moduleslookupflagsmd)* = 1

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1161

As long as the resolved path corresponds to a symbolic link, it is expanded.


<a name="modulesoflagsmd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [oflags](#modulesoflagsmd)

## Namespace: oflags

Open flags.

### Index

#### Variables

* [CREAT](#const-creat)
* [DIRECTORY](#const-directory)
* [EXCL](#const-excl)
* [TRUNC](#const-trunc)

### Variables

#### `Const` CREAT

• **CREAT**: *oflags* = 1

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1170

Create file if it does not exist.

___

#### `Const` DIRECTORY

• **DIRECTORY**: *oflags* = 2

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1174

Fail if not a directory.

___

#### `Const` EXCL

• **EXCL**: *oflags* = 4

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1178

Fail if file already exists.

___

#### `Const` TRUNC

• **TRUNC**: *oflags* = 8

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1182

Truncate file to size 0.


<a name="modulespreopentypemd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [preopentype](#modulespreopentypemd)

## Namespace: preopentype

Identifiers for preopened capabilities.

### Index

#### Variables

* [DIR](#const-dir)

### Variables

#### `Const` DIR

• **DIR**: *[preopentype](#modulespreopentypemd)* = 0

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1191

A pre-opened directory.


<a name="modulesriflagsmd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [riflags](#modulesriflagsmd)

## Namespace: riflags

Flags provided to `sock_recv`.

### Index

#### Variables

* [PEEK](#const-peek)
* [WAITALL](#const-waitall)

### Variables

#### `Const` PEEK

• **PEEK**: *[riflags](#modulesriflagsmd)* = 1

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1216

Returns the message without removing it from the socket's receive queue.

___

#### `Const` WAITALL

• **WAITALL**: *[riflags](#modulesriflagsmd)* = 2

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1220

On byte-stream sockets, block until the full amount of data can be returned.


<a name="modulesrightsmd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [rights](#modulesrightsmd)

## Namespace: rights

File descriptor rights, determining which actions may be performed.

### Index

#### Variables

* [FD_ADVISE](#const-fd_advise)
* [FD_ALLOCATE](#const-fd_allocate)
* [FD_DATASYNC](#const-fd_datasync)
* [FD_FDSTAT_SET_FLAGS](#const-fd_fdstat_set_flags)
* [FD_FILESTAT_GET](#const-fd_filestat_get)
* [FD_FILESTAT_SET_SIZE](#const-fd_filestat_set_size)
* [FD_FILESTAT_SET_TIMES](#const-fd_filestat_set_times)
* [FD_READ](#const-fd_read)
* [FD_READDIR](#const-fd_readdir)
* [FD_SEEK](#const-fd_seek)
* [FD_SYNC](#const-fd_sync)
* [FD_TELL](#const-fd_tell)
* [FD_WRITE](#const-fd_write)
* [PATH_CREATE_DIRECTORY](#const-path_create_directory)
* [PATH_CREATE_FILE](#const-path_create_file)
* [PATH_FILESTAT_GET](#const-path_filestat_get)
* [PATH_FILESTAT_SET_SIZE](#const-path_filestat_set_size)
* [PATH_FILESTAT_SET_TIMES](#const-path_filestat_set_times)
* [PATH_LINK_SOURCE](#const-path_link_source)
* [PATH_LINK_TARGET](#const-path_link_target)
* [PATH_OPEN](#const-path_open)
* [PATH_READLINK](#const-path_readlink)
* [PATH_REMOVE_DIRECTORY](#const-path_remove_directory)
* [PATH_RENAME_SOURCE](#const-path_rename_source)
* [PATH_RENAME_TARGET](#const-path_rename_target)
* [PATH_UNLINK_FILE](#const-path_unlink_file)
* [POLL_FD_READWRITE](#const-poll_fd_readwrite)
* [RIGHT_PATH_SYMLINK](#const-right_path_symlink)
* [SOCK_SHUTDOWN](#const-sock_shutdown)

### Variables

#### `Const` FD_ADVISE

• **FD_ADVISE**: *[rights](#modulesrightsmd)* = 128

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1257

The right to invoke `fd_advise`.

___

#### `Const` FD_ALLOCATE

• **FD_ALLOCATE**: *[rights](#modulesrightsmd)* = 256

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1261

The right to invoke `fd_allocate`.

___

#### `Const` FD_DATASYNC

• **FD_DATASYNC**: *[rights](#modulesrightsmd)* = 1

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1229

The right to invoke `fd_datasync`.

___

#### `Const` FD_FDSTAT_SET_FLAGS

• **FD_FDSTAT_SET_FLAGS**: *[rights](#modulesrightsmd)* = 8

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1241

The right to invoke `fd_fdstat_set_flags`.

___

#### `Const` FD_FILESTAT_GET

• **FD_FILESTAT_GET**: *[rights](#modulesrightsmd)* = 2097152

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1313

The right to invoke `fd_filestat_get`.

___

#### `Const` FD_FILESTAT_SET_SIZE

• **FD_FILESTAT_SET_SIZE**: *[rights](#modulesrightsmd)* = 4194304

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1317

The right to invoke `fd_filestat_set_size`.

___

#### `Const` FD_FILESTAT_SET_TIMES

• **FD_FILESTAT_SET_TIMES**: *[rights](#modulesrightsmd)* = 8388608

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1321

The right to invoke `fd_filestat_set_times`.

___

#### `Const` FD_READ

• **FD_READ**: *[rights](#modulesrightsmd)* = 2

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1233

The right to invoke `fd_read` and `sock_recv`.

___

#### `Const` FD_READDIR

• **FD_READDIR**: *[rights](#modulesrightsmd)* = 16384

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1285

The right to invoke `fd_readdir`.

___

#### `Const` FD_SEEK

• **FD_SEEK**: *[rights](#modulesrightsmd)* = 4

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1237

The right to invoke `fd_seek`. This flag implies `rights.FD_TELL`.

___

#### `Const` FD_SYNC

• **FD_SYNC**: *[rights](#modulesrightsmd)* = 16

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1245

The right to invoke `fd_sync`.

___

#### `Const` FD_TELL

• **FD_TELL**: *[rights](#modulesrightsmd)* = 32

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1249

The right to invoke `fd_seek` in such a way that the file offset remains unaltered (i.e., `whence.CUR` with offset zero), or to invoke `fd_tell`).

___

#### `Const` FD_WRITE

• **FD_WRITE**: *[rights](#modulesrightsmd)* = 64

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1253

The right to invoke `fd_write` and `sock_send`. If `rights.FD_SEEK` is set, includes the right to invoke `fd_pwrite`.

___

#### `Const` PATH_CREATE_DIRECTORY

• **PATH_CREATE_DIRECTORY**: *[rights](#modulesrightsmd)* = 512

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1265

The right to invoke `path_create_directory`.

___

#### `Const` PATH_CREATE_FILE

• **PATH_CREATE_FILE**: *[rights](#modulesrightsmd)* = 1024

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1269

If `rights.PATH_OPEN` is set, the right to invoke `path_open` with `oflags.CREAT`.

___

#### `Const` PATH_FILESTAT_GET

• **PATH_FILESTAT_GET**: *[rights](#modulesrightsmd)* = 262144

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1301

The right to invoke `path_filestat_get`.

___

#### `Const` PATH_FILESTAT_SET_SIZE

• **PATH_FILESTAT_SET_SIZE**: *[rights](#modulesrightsmd)* = 524288

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1305

The right to change a file's size (there is no `path_filestat_set_size`). If `rights.PATH_OPEN` is set, includes the right to invoke `path_open` with `oflags.TRUNC`.

___

#### `Const` PATH_FILESTAT_SET_TIMES

• **PATH_FILESTAT_SET_TIMES**: *[rights](#modulesrightsmd)* = 1048576

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1309

The right to invoke `path_filestat_set_times`.

___

#### `Const` PATH_LINK_SOURCE

• **PATH_LINK_SOURCE**: *[rights](#modulesrightsmd)* = 2048

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1273

The right to invoke `path_link` with the file descriptor as the source directory.

___

#### `Const` PATH_LINK_TARGET

• **PATH_LINK_TARGET**: *[rights](#modulesrightsmd)* = 4096

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1277

The right to invoke `path_link` with the file descriptor as the target directory.

___

#### `Const` PATH_OPEN

• **PATH_OPEN**: *[rights](#modulesrightsmd)* = 8192

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1281

The right to invoke `path_open`.

___

#### `Const` PATH_READLINK

• **PATH_READLINK**: *[rights](#modulesrightsmd)* = 32768

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1289

The right to invoke `path_readlink`.

___

#### `Const` PATH_REMOVE_DIRECTORY

• **PATH_REMOVE_DIRECTORY**: *[rights](#modulesrightsmd)* = 33554432

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1329

The right to invoke `path_remove_directory`.

___

#### `Const` PATH_RENAME_SOURCE

• **PATH_RENAME_SOURCE**: *[rights](#modulesrightsmd)* = 65536

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1293

The right to invoke `path_rename` with the file descriptor as the source directory.

___

#### `Const` PATH_RENAME_TARGET

• **PATH_RENAME_TARGET**: *[rights](#modulesrightsmd)* = 131072

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1297

The right to invoke `path_rename` with the file descriptor as the target directory.

___

#### `Const` PATH_UNLINK_FILE

• **PATH_UNLINK_FILE**: *[rights](#modulesrightsmd)* = 67108864

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1333

The right to invoke `path_unlink_file`.

___

#### `Const` POLL_FD_READWRITE

• **POLL_FD_READWRITE**: *[rights](#modulesrightsmd)* = 134217728

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1337

If `rights.FD_READ` is set, includes the right to invoke `poll_oneoff` to subscribe to `eventtype.FD_READ`. If `rights.FD_WRITE` is set, includes the right to invoke `poll_oneoff` to subscribe to `eventtype.FD_WRITE`.

___

#### `Const` RIGHT_PATH_SYMLINK

• **RIGHT_PATH_SYMLINK**: *[rights](#modulesrightsmd)* = 16777216

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1325

The right to invoke `path_symlink`.

___

#### `Const` SOCK_SHUTDOWN

• **SOCK_SHUTDOWN**: *[rights](#modulesrightsmd)* = 268435456

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1341

The right to invoke `sock_shutdown`.


<a name="modulesroflagsmd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [roflags](#modulesroflagsmd)

## Namespace: roflags

Flags returned by `sock_recv`.

### Index

#### Variables

* [DATA_TRUNCATED](#const-data_truncated)

### Variables

#### `Const` DATA_TRUNCATED

• **DATA_TRUNCATED**: *[roflags](#modulesroflagsmd)* = 1

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1350

Message data has been truncated.


<a name="modulessdflagsmd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [sdflags](#modulessdflagsmd)

## Namespace: sdflags

Which channels on a socket to shut down.

### Index

#### Variables

* [RD](#const-rd)
* [WR](#const-wr)

### Variables

#### `Const` RD

• **RD**: *[sdflags](#modulessdflagsmd)* = 1

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1359

Disables further receive operations.

___

#### `Const` WR

• **WR**: *[sdflags](#modulessdflagsmd)* = 2

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1363

Disables further send operations.


<a name="modulessiflagsmd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [siflags](#modulessiflagsmd)

## Namespace: siflags

Flags provided to `sock_send`.


<a name="modulessignalmd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [signal](#modulessignalmd)

## Namespace: signal

Signal condition.

### Index

#### Variables

* [ABRT](#const-abrt)
* [ALRM](#const-alrm)
* [BUS](#const-bus)
* [CHLD](#const-chld)
* [CONT](#const-cont)
* [FPE](#const-fpe)
* [HUP](#const-hup)
* [ILL](#const-ill)
* [INT](#const-int)
* [KILL](#const-kill)
* [PIPE](#const-pipe)
* [POLL](#const-poll)
* [PROF](#const-prof)
* [PWR](#const-pwr)
* [QUIT](#const-quit)
* [SEGV](#const-segv)
* [STOP](#const-stop)
* [SYS](#const-sys)
* [TERM](#const-term)
* [TRAP](#const-trap)
* [TSTP](#const-tstp)
* [TTIN](#const-ttin)
* [TTOU](#const-ttou)
* [URG](#const-urg)
* [USR1](#const-usr1)
* [USR2](#const-usr2)
* [VTALRM](#const-vtalrm)
* [WINCH](#const-winch)
* [XCPU](#const-xcpu)
* [XFSZ](#const-xfsz)

### Variables

#### `Const` ABRT

• **ABRT**: *[signal](#modulessignalmd)* = 6

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1398

Process abort signal.

___

#### `Const` ALRM

• **ALRM**: *[signal](#modulessignalmd)* = 14

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1430

Alarm clock.

___

#### `Const` BUS

• **BUS**: *[signal](#modulessignalmd)* = 7

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1402

Access to an undefined portion of a memory object.

___

#### `Const` CHLD

• **CHLD**: *[signal](#modulessignalmd)* = 16

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1438

Child process terminated, stopped, or continued.

___

#### `Const` CONT

• **CONT**: *[signal](#modulessignalmd)* = 17

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1442

Continue executing, if stopped.

___

#### `Const` FPE

• **FPE**: *[signal](#modulessignalmd)* = 8

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1406

Erroneous arithmetic operation.

___

#### `Const` HUP

• **HUP**: *[signal](#modulessignalmd)* = 1

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1378

Hangup.

___

#### `Const` ILL

• **ILL**: *[signal](#modulessignalmd)* = 4

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1390

Illegal instruction.

___

#### `Const` INT

• **INT**: *[signal](#modulessignalmd)* = 2

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1382

Terminate interrupt signal.

___

#### `Const` KILL

• **KILL**: *[signal](#modulessignalmd)* = 9

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1410

Kill.

___

#### `Const` PIPE

• **PIPE**: *[signal](#modulessignalmd)* = 13

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1426

Write on a pipe with no one to read it.

___

#### `Const` POLL

• **POLL**: *[signal](#modulessignalmd)* = 28

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1483

___

#### `Const` PROF

• **PROF**: *[signal](#modulessignalmd)* = 26

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1477

___

#### `Const` PWR

• **PWR**: *[signal](#modulessignalmd)* = 29

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1486

___

#### `Const` QUIT

• **QUIT**: *[signal](#modulessignalmd)* = 3

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1386

Terminal quit signal.

___

#### `Const` SEGV

• **SEGV**: *[signal](#modulessignalmd)* = 11

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1418

Invalid memory reference.

___

#### `Const` STOP

• **STOP**: *[signal](#modulessignalmd)* = 18

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1446

Stop executing.

___

#### `Const` SYS

• **SYS**: *[signal](#modulessignalmd)* = 30

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1490

Bad system call.

___

#### `Const` TERM

• **TERM**: *[signal](#modulessignalmd)* = 15

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1434

Termination signal.

___

#### `Const` TRAP

• **TRAP**: *[signal](#modulessignalmd)* = 5

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1394

Trace/breakpoint trap.

___

#### `Const` TSTP

• **TSTP**: *[signal](#modulessignalmd)* = 19

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1450

Terminal stop signal.

___

#### `Const` TTIN

• **TTIN**: *[signal](#modulessignalmd)* = 20

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1454

Background process attempting read.

___

#### `Const` TTOU

• **TTOU**: *[signal](#modulessignalmd)* = 21

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1458

Background process attempting write.

___

#### `Const` URG

• **URG**: *[signal](#modulessignalmd)* = 22

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1462

High bandwidth data is available at a socket.

___

#### `Const` USR1

• **USR1**: *[signal](#modulessignalmd)* = 10

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1414

User-defined signal 1.

___

#### `Const` USR2

• **USR2**: *[signal](#modulessignalmd)* = 12

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1422

User-defined signal 2.

___

#### `Const` VTALRM

• **VTALRM**: *[signal](#modulessignalmd)* = 25

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1474

Virtual timer expired.

___

#### `Const` WINCH

• **WINCH**: *[signal](#modulessignalmd)* = 27

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1480

___

#### `Const` XCPU

• **XCPU**: *[signal](#modulessignalmd)* = 23

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1466

CPU time limit exceeded.

___

#### `Const` XFSZ

• **XFSZ**: *[signal](#modulessignalmd)* = 24

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1470

File size limit exceeded.


<a name="modulessubclockflagsmd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [subclockflags](#modulessubclockflagsmd)

## Namespace: subclockflags

Flags determining how to interpret the timestamp provided in `subscription_t::u.clock.timeout.

### Index

#### Variables

* [ABSTIME](#const-abstime)

### Variables

#### `Const` ABSTIME

• **ABSTIME**: *[subclockflags](#modulessubclockflagsmd)* = 1

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1499

If set, treat the timestamp provided in `clocksubscription` as an absolute timestamp.


<a name="moduleswhencemd"></a>

[assemblyscript](#readmemd) › [Globals](#globalsmd) › [whence](#moduleswhencemd)

## Namespace: whence

The position relative to which to set the offset of the file descriptor.

### Index

#### Variables

* [CUR](#const-cur)
* [END](#const-end)
* [SET](#const-set)

### Variables

#### `Const` CUR

• **CUR**: *whence* = 1

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1559

Seek relative to current position.

___

#### `Const` END

• **END**: *whence* = 2

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1563

Seek relative to end-of-file.

___

#### `Const` SET

• **SET**: *whence* = 0

Defined in node_modules/assemblyscript/std/assembly/bindings/wasi_snapshot_preview1.ts:1555

Seek relative to start-of-file.
