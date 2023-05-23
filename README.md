# cohash

![NPM](https://img.shields.io/npm/l/cohash?color=blue&style=flat-square) ![npm](https://img.shields.io/npm/v/cohash?color=blue&style=flat-square)

`cohash` is a simple command line to generate a hash value for files.

## Install

```shell
pnpm add cohash -g
npm i cohash -g
```

## Useage

```shell
cohash ./test.js -l 8 -o a.[hash].js
```

## Flags

- `--output` or `-o`: 
  - Specify the address of the generated file. It will log the hash value to the terminal if there is no `--output` or `-o`.
- `--length` or `-l`: 
   - Limit the length of the hash value.
- `--stream` or `-s`: 
  - Default is `true`. Whether to read as a file stream.
  
