
<a name="readmemd"></a>

**as-wasi**

***

# as-wasi

## Classes

- [CommandLine](#classescommandlinemd)
- [Console](#classesconsolemd)
- [Date](#classesdatemd)
- [Descriptor](#classesdescriptormd)
- [Environ](#classesenvironmd)
- [EnvironEntry](#classesenvironentrymd)
- [FileStat](#classesfilestatmd)
- [FileSystem](#classesfilesystemmd)
- [Process](#classesprocessmd)
- [Random](#classesrandommd)
- [Time](#classestimemd)
- [WASIError](#classeswasierrormd)

# Classes


<a name="classescommandlinemd"></a>

[**as-wasi**](#readmemd)

***

[as-wasi](#readmemd) / CommandLine

## Class: CommandLine

Defined in: [as-wasi.ts:986](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L986)

### Constructors

#### Constructor

> **new CommandLine**(): `CommandLine`

Defined in: [as-wasi.ts:989](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L989)

##### Returns

`CommandLine`

### Properties

#### args

> **args**: `string`[]

Defined in: [as-wasi.ts:987](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L987)

### Accessors

#### all

##### Get Signature

> **get** `static` **all**(): `string`[]

Defined in: [as-wasi.ts:1016](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L1016)

Return all the command-line arguments

###### Returns

`string`[]

### Methods

#### all()

> **all**(): `string`[]

Defined in: [as-wasi.ts:1024](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L1024)

Return all the command-line arguments

##### Returns

`string`[]

***

#### get()

> **get**(`index`): `string` \| `null`

Defined in: [as-wasi.ts:1032](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L1032)

Return the i-th command-ine argument

##### Parameters

###### index

`number`

##### Returns

`string` \| `null`


<a name="classesconsolemd"></a>

[**as-wasi**](#readmemd)

***

[as-wasi](#readmemd) / Console

## Class: Console

Defined in: [as-wasi.ts:819](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L819)

### Constructors

#### Constructor

> **new Console**(): `Console`

##### Returns

`Console`

### Methods

#### error()

> `static` **error**(`s`, `newline`): `void`

Defined in: [as-wasi.ts:855](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L855)

Write an error to the console

##### Parameters

###### s

`string`

string

###### newline

`bool` = `true`

`false` to avoid inserting a newline after the string

##### Returns

`void`

***

#### log()

> `static` **log**(`s`): `void`

Defined in: [as-wasi.ts:846](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L846)

Alias for `Console.write()`

##### Parameters

###### s

`string`

##### Returns

`void`

***

#### readAll()

> `static` **readAll**(): `string` \| `null`

Defined in: [as-wasi.ts:832](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L832)

Read as much data as possible from the console, convert it to a native string

##### Returns

`string` \| `null`

***

#### readLine()

> `static` **readLine**(): `string` \| `null`

Defined in: [as-wasi.ts:839](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L839)

Read a line of text from the console, convert it from UTF8 to a native string

##### Returns

`string` \| `null`

***

#### write()

> `static` **write**(`s`, `newline`): `void`

Defined in: [as-wasi.ts:825](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L825)

Write a string to the console

##### Parameters

###### s

`string`

string

###### newline

`bool` = `true`

`false` to avoid inserting a newline after the string

##### Returns

`void`


<a name="classesdatemd"></a>

[**as-wasi**](#readmemd)

***

[as-wasi](#readmemd) / Date

## Class: Date

Defined in: [as-wasi.ts:889](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L889)

### Constructors

#### Constructor

> **new Date**(): `Date`

##### Returns

`Date`

### Methods

#### now()

> `static` **now**(): `number`

Defined in: [as-wasi.ts:893](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L893)

Return the current timestamp, as a number of milliseconds since the epoch

##### Returns

`number`


<a name="classesdescriptormd"></a>

[**as-wasi**](#readmemd)

***

[as-wasi](#readmemd) / Descriptor

## Class: Descriptor

Defined in: [as-wasi.ts:90](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L90)

A descriptor, that doesn't necessarily have to represent a file

### Constructors

#### Constructor

> **new Descriptor**(`rawfd`): `Descriptor`

Defined in: [as-wasi.ts:115](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L115)

Build a new descriptor from a raw WASI file descriptor

##### Parameters

###### rawfd

`number`

a raw file descriptor

##### Returns

`Descriptor`

### Accessors

#### rawfd

##### Get Signature

> **get** **rawfd**(): `number`

Defined in: [as-wasi.ts:119](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L119)

###### Returns

`number`

***

#### Invalid

##### Get Signature

> **get** `static` **Invalid**(): `Descriptor`

Defined in: [as-wasi.ts:94](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L94)

An invalid file descriptor, that can represent an error

###### Returns

`Descriptor`

***

#### Stderr

##### Get Signature

> **get** `static` **Stderr**(): `Descriptor`

Defined in: [as-wasi.ts:109](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L109)

The standard error

###### Returns

`Descriptor`

***

#### Stdin

##### Get Signature

> **get** `static` **Stdin**(): `Descriptor`

Defined in: [as-wasi.ts:99](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L99)

The standard input

###### Returns

`Descriptor`

***

#### Stdout

##### Get Signature

> **get** `static` **Stdout**(): `Descriptor`

Defined in: [as-wasi.ts:104](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L104)

The standard output

###### Returns

`Descriptor`

### Methods

#### advise()

> **advise**(`offset`, `len`, `advice`): `bool`

Defined in: [as-wasi.ts:130](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L130)

Hint at how the data accessible via the descriptor will be used

##### Parameters

###### offset

`number`

###### len

`number`

###### advice

`number`

##### Returns

`bool`

`true` on success, `false` on error

##### Offset

offset

##### Len

length

##### Advice

`advice.{NORMAL, SEQUENTIAL, RANDOM, WILLNEED, DONTNEED, NOREUSE}`

***

#### allocate()

> **allocate**(`offset`, `len`): `bool`

Defined in: [as-wasi.ts:140](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L140)

Preallocate data

##### Parameters

###### offset

`number`

where to start preallocating data in the file

###### len

`number`

bytes to preallocate

##### Returns

`bool`

`true` on success, `false` on error

***

#### close()

> **close**(): `void`

Defined in: [as-wasi.ts:283](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L283)

Close a file descriptor

##### Returns

`void`

***

#### dirName()

> **dirName**(): `string`

Defined in: [as-wasi.ts:261](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L261)

Return the directory associated to that descriptor

##### Returns

`string`

***

#### fatime()

> **fatime**(`ts`): `bool`

Defined in: [as-wasi.ts:207](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L207)

Update the access time

##### Parameters

###### ts

`number`

##### Returns

`bool`

`true` on success, `false` on error

##### Ts

timestamp in seconds

***

#### fdatasync()

> **fdatasync**(): `bool`

Defined in: [as-wasi.ts:148](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L148)

Wait for the data to be written

##### Returns

`bool`

`true` on success, `false` on error

***

#### fileType()

> **fileType**(): `number`

Defined in: [as-wasi.ts:163](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L163)

Return the file type

##### Returns

`number`

***

#### fmtime()

> **fmtime**(`ts`): `bool`

Defined in: [as-wasi.ts:219](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L219)

Update the modification time

##### Parameters

###### ts

`number`

##### Returns

`bool`

`true` on success, `false` on error

##### Ts

timestamp in seconds

***

#### fsync()

> **fsync**(): `bool`

Defined in: [as-wasi.ts:156](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L156)

Wait for the data and metadata to be written

##### Returns

`bool`

`true` on success, `false` on error

***

#### ftruncate()

> **ftruncate**(`size`): `bool`

Defined in: [as-wasi.ts:198](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L198)

Change the size of a file

##### Parameters

###### size

`number` = `0`

new size

##### Returns

`bool`

`true` on success, `false` on error

***

#### futimes()

> **futimes**(`atime`, `mtime`): `bool`

Defined in: [as-wasi.ts:232](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L232)

Update both the access and the modification times

##### Parameters

###### atime

`number`

###### mtime

`number`

##### Returns

`bool`

`true` on success, `false` on error

##### Atime

timestamp in seconds

##### Mtime

timestamp in seconds

***

#### read()

> **read**(`data`, `chunk_size`): `number`[] \| `null`

Defined in: [as-wasi.ts:348](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L348)

Read data from a file descriptor

##### Parameters

###### data

`number`[] = `[]`

existing array to push data to

###### chunk\_size

`number` = `4096`

chunk size (default: 4096)

##### Returns

`number`[] \| `null`

***

#### readAll()

> **readAll**(`data`, `chunk_size`): `number`[] \| `null`

Defined in: [as-wasi.ts:378](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L378)

Read from a file descriptor until the end of the stream

##### Parameters

###### data

`number`[] = `[]`

existing array to push data to

###### chunk\_size

`number` = `4096`

chunk size (default: 4096)

##### Returns

`number`[] \| `null`

***

#### readLine()

> **readLine**(): `string` \| `null`

Defined in: [as-wasi.ts:411](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L411)

Read a line of text from a file descriptor

##### Returns

`string` \| `null`

***

#### readString()

> **readString**(`chunk_size`): `string` \| `null`

Defined in: [as-wasi.ts:448](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L448)

Read as much data as possible from a file descriptor, convert it to a native string

##### Parameters

###### chunk\_size

`number` = `4096`

chunk size (default: 4096)

##### Returns

`string` \| `null`

***

#### seek()

> **seek**(`off`, `w`): `bool`

Defined in: [as-wasi.ts:462](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L462)

Seek into a stream

##### Parameters

###### off

`number`

###### w

`number`

##### Returns

`bool`

##### Off

offset

##### W

the position relative to which to set the offset of the file descriptor.

***

#### setFlags()

> **setFlags**(`flags`): `bool`

Defined in: [as-wasi.ts:177](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L177)

Set WASI flags for that descriptor

##### Parameters

###### flags

`number`

##### Returns

`bool`

`true` on success, `false` on error

##### Params

flags: one or more of `fdflags.{APPEND, DSYNC, NONBLOCK, RSYNC, SYNC}`

***

#### stat()

> **stat**(): [`FileStat`](#classesfilestatmd)

Defined in: [as-wasi.ts:185](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L185)

Retrieve information about a descriptor

##### Returns

[`FileStat`](#classesfilestatmd)

a `FileStat` object`

***

#### tell()

> **tell**(): `number`

Defined in: [as-wasi.ts:473](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L473)

Return the current offset in the stream

##### Returns

`number`

offset

***

#### touch()

> **touch**(): `bool`

Defined in: [as-wasi.ts:247](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L247)

Update the timestamp of the object represented by the descriptor

##### Returns

`bool`

`true` on success, `false` on error

***

#### write()

> **write**(`data`): `void`

Defined in: [as-wasi.ts:291](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L291)

Write data to a file descriptor

##### Parameters

###### data

`number`[]

data

##### Returns

`void`

***

#### writeString()

> **writeString**(`s`, `newline`): `void`

Defined in: [as-wasi.ts:309](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L309)

Write a string to a file descriptor, after encoding it to UTF8

##### Parameters

###### s

`string`

string

###### newline

`bool` = `false`

`true` to add a newline after the string

##### Returns

`void`

***

#### writeStringLn()

> **writeStringLn**(`s`): `void`

Defined in: [as-wasi.ts:328](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L328)

Write a string to a file descriptor, after encoding it to UTF8, with a newline

##### Parameters

###### s

`string`

string

##### Returns

`void`


<a name="classesenvironmd"></a>

[**as-wasi**](#readmemd)

***

[as-wasi](#readmemd) / Environ

## Class: Environ

Defined in: [as-wasi.ts:927](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L927)

### Constructors

#### Constructor

> **new Environ**(): `Environ`

Defined in: [as-wasi.ts:930](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L930)

##### Returns

`Environ`

### Properties

#### env

> **env**: [`EnvironEntry`](#classesenvironentrymd)[]

Defined in: [as-wasi.ts:928](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L928)

### Accessors

#### all

##### Get Signature

> **get** `static` **all**(): [`EnvironEntry`](#classesenvironentrymd)[]

Defined in: [as-wasi.ts:958](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L958)

Return all environment variables

###### Returns

[`EnvironEntry`](#classesenvironentrymd)[]

### Methods

#### all()

> **all**(): [`EnvironEntry`](#classesenvironentrymd)[]

Defined in: [as-wasi.ts:966](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L966)

Return all environment variables

##### Returns

[`EnvironEntry`](#classesenvironentrymd)[]

***

#### get()

> **get**(`key`): `string` \| `null`

Defined in: [as-wasi.ts:974](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L974)

Return the value for an environment variable

##### Parameters

###### key

`string`

environment variable name

##### Returns

`string` \| `null`


<a name="classesenvironentrymd"></a>

[**as-wasi**](#readmemd)

***

[as-wasi](#readmemd) / EnvironEntry

## Class: EnvironEntry

Defined in: [as-wasi.ts:923](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L923)

### Constructors

#### Constructor

> **new EnvironEntry**(`key`, `value`): `EnvironEntry`

Defined in: [as-wasi.ts:924](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L924)

##### Parameters

###### key

`string`

###### value

`string`

##### Returns

`EnvironEntry`

### Properties

#### key

> `readonly` **key**: `string`

Defined in: [as-wasi.ts:924](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L924)

***

#### value

> `readonly` **value**: `string`

Defined in: [as-wasi.ts:924](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L924)


<a name="classesfilestatmd"></a>

[**as-wasi**](#readmemd)

***

[as-wasi](#readmemd) / FileStat

## Class: FileStat

Defined in: [as-wasi.ts:70](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L70)

Portable information about a file

### Constructors

#### Constructor

> **new FileStat**(`st_buf`): `FileStat`

Defined in: [as-wasi.ts:77](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L77)

##### Parameters

###### st\_buf

`number`

##### Returns

`FileStat`

### Properties

#### access\_time

> **access\_time**: `number`

Defined in: [as-wasi.ts:73](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L73)

***

#### creation\_time

> **creation\_time**: `number`

Defined in: [as-wasi.ts:75](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L75)

***

#### file\_size

> **file\_size**: `number`

Defined in: [as-wasi.ts:72](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L72)

***

#### file\_type

> **file\_type**: `number`

Defined in: [as-wasi.ts:71](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L71)

***

#### modification\_time

> **modification\_time**: `number`

Defined in: [as-wasi.ts:74](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L74)


<a name="classesfilesystemmd"></a>

[**as-wasi**](#readmemd)

***

[as-wasi](#readmemd) / FileSystem

## Class: FileSystem

Defined in: [as-wasi.ts:486](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L486)

A class to access a filesystem

### Constructors

#### Constructor

> **new FileSystem**(): `FileSystem`

##### Returns

`FileSystem`

### Methods

#### dirfdForPath()

> `protected` `static` **dirfdForPath**(`path`): `number`

Defined in: [as-wasi.ts:813](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L813)

##### Parameters

###### path

`string`

##### Returns

`number`

***

#### exists()

> `static` **exists**(`path`): `bool`

Defined in: [as-wasi.ts:577](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L577)

Check if a file exists at a given path

##### Parameters

###### path

`string`

##### Returns

`bool`

`true` on success, `false` on failure

##### Path

path

***

#### link()

> `static` **link**(`old_path`, `new_path`): `bool`

Defined in: [as-wasi.ts:600](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L600)

Create a hard link
@old_path old path
@new_path new path

##### Parameters

###### old\_path

`string`

###### new\_path

`string`

##### Returns

`bool`

`true` on success, `false` on failure

***

#### lstat()

> `static` **lstat**(`path`): [`FileStat`](#classesfilestatmd)

Defined in: [as-wasi.ts:716](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L716)

Retrieve information about a file or a symbolic link

##### Parameters

###### path

`string`

##### Returns

[`FileStat`](#classesfilestatmd)

a `FileStat` object

##### Path

path

***

#### mkdir()

> `static` **mkdir**(`path`): `bool`

Defined in: [as-wasi.ts:560](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L560)

Create a new directory

##### Parameters

###### path

`string`

##### Returns

`bool`

`true` on success, `false` on failure

##### Path

path

***

#### open()

> `static` **open**(`path`, `flags`): [`Descriptor`](#classesdescriptormd) \| `null`

Defined in: [as-wasi.ts:493](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L493)

Open a path

##### Parameters

###### path

`string`

###### flags

`string` = `"r"`

##### Returns

[`Descriptor`](#classesdescriptormd) \| `null`

a descriptor

##### Path

path

##### Flags

r, r+, w, wx, w+ or xw+

***

#### readdir()

> `static` **readdir**(`path`): `string`[] \| `null`

Defined in: [as-wasi.ts:770](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L770)

Get the content of a directory

##### Parameters

###### path

`string`

the directory path

##### Returns

`string`[] \| `null`

An array of file names

***

#### rename()

> `static` **rename**(`old_path`, `new_path`): `bool`

Defined in: [as-wasi.ts:742](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L742)

Rename a file
@old_path old path
@new_path new path

##### Parameters

###### old\_path

`string`

###### new\_path

`string`

##### Returns

`bool`

`true` on success, `false` on failure

***

#### rmdir()

> `static` **rmdir**(`path`): `bool`

Defined in: [as-wasi.ts:674](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L674)

Remove a directory

##### Parameters

###### path

`string`

##### Returns

`bool`

`true` on success, `false` on failure

##### Path

path

***

#### stat()

> `static` **stat**(`path`): [`FileStat`](#classesfilestatmd)

Defined in: [as-wasi.ts:691](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L691)

Retrieve information about a file

##### Parameters

###### path

`string`

##### Returns

[`FileStat`](#classesfilestatmd)

a `FileStat` object

##### Path

path

***

#### symlink()

> `static` **symlink**(`old_path`, `new_path`): `bool`

Defined in: [as-wasi.ts:631](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L631)

Create a symbolic link
@old_path old path
@new_path new path

##### Parameters

###### old\_path

`string`

###### new\_path

`string`

##### Returns

`bool`

`true` on success, `false` on failure

***

#### unlink()

> `static` **unlink**(`path`): `bool`

Defined in: [as-wasi.ts:657](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L657)

Unlink a file

##### Parameters

###### path

`string`

##### Returns

`bool`

`true` on success, `false` on failure

##### Path

path


<a name="classesprocessmd"></a>

[**as-wasi**](#readmemd)

***

[as-wasi](#readmemd) / Process

## Class: Process

Defined in: [as-wasi.ts:912](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L912)

### Constructors

#### Constructor

> **new Process**(): `Process`

##### Returns

`Process`

### Methods

#### exit()

> `static` **exit**(`status`): `void`

Defined in: [as-wasi.ts:918](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L918)

Cleanly terminate the current process

##### Parameters

###### status

`number`

exit code

##### Returns

`void`


<a name="classesrandommd"></a>

[**as-wasi**](#readmemd)

***

[as-wasi](#readmemd) / Random

## Class: Random

Defined in: [as-wasi.ts:860](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L860)

### Constructors

#### Constructor

> **new Random**(): `Random`

##### Returns

`Random`

### Methods

#### randomBytes()

> `static` **randomBytes**(`len`): `Uint8Array`

Defined in: [as-wasi.ts:882](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L882)

Return an array of random bytes

##### Parameters

###### len

`number`

length

##### Returns

`Uint8Array`

***

#### randomFill()

> `static` **randomFill**(`buffer`): `void`

Defined in: [as-wasi.ts:865](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L865)

Fill a buffer with random data

##### Parameters

###### buffer

`ArrayBuffer`

An array buffer

##### Returns

`void`


<a name="classestimemd"></a>

[**as-wasi**](#readmemd)

***

[as-wasi](#readmemd) / Time

## Class: Time

Defined in: [as-wasi.ts:1042](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L1042)

### Constructors

#### Constructor

> **new Time**(): `Time`

##### Returns

`Time`

### Properties

#### MILLISECOND

> `static` **MILLISECOND**: `number`

Defined in: [as-wasi.ts:1044](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L1044)

***

#### NANOSECOND

> `static` **NANOSECOND**: `number` = `1`

Defined in: [as-wasi.ts:1043](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L1043)

***

#### SECOND

> `static` **SECOND**: `number`

Defined in: [as-wasi.ts:1045](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L1045)

### Methods

#### sleep()

> `static` **sleep**(`nanoseconds`): `void`

Defined in: [as-wasi.ts:1049](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L1049)

##### Parameters

###### nanoseconds

`number`

##### Returns

`void`


<a name="classeswasierrormd"></a>

[**as-wasi**](#readmemd)

***

[as-wasi](#readmemd) / WASIError

## Class: WASIError

Defined in: [as-wasi.ts:60](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L60)

A WASI error

### Extends

- `Error`

### Constructors

#### Constructor

> **new WASIError**(`message`): `WASIError`

Defined in: [as-wasi.ts:61](https://github.com/jedisct1/as-wasi/blob/e1a428f0c32366affcec1428405353ca05fbd616/assembly/as-wasi.ts#L61)

##### Parameters

###### message

`string` = `""`

##### Returns

`WASIError`

##### Overrides

`Error.constructor`
