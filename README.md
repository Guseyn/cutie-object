# cutie-object

[![NPM Version](https://img.shields.io/npm/v/@cuties/object.svg)](https://npmjs.org/package/@cuties/object)
[![Build Status](https://travis-ci.org/Guseyn/cutie-object.svg?branch=master)](https://travis-ci.org/Guseyn/cutie-object)
[![codecov](https://codecov.io/gh/Guseyn/cutie-object/branch/master/graph/badge.svg)](https://codecov.io/gh/Guseyn/cutie-object)

[Cutie](https://github.com/Guseyn/cutie) extension for work with </b>Object</b> in JavaScript. It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).


## Examples

You can find examples of using this library in the [test directory](https://github.com/Guseyn/cutie-object/tree/master/test).

## Install

`npm install @cuties/object`

## Run test

`npm test`

## Run build

`npm run build`

## Usage

```js
const {
  // Needed async objects here from the table below
} = require('@cuties/object');
```
For more information about parameters in the async objects visit [MDN docs for Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object).

| Async Object | Async/sync call | Parameters(default value/description) | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| `AreObjectsEqual` | `Object.is` | `obj1, obj2` | `boolean` |
| `AssignedObject` | `Object.assign` | `target, ...sources` | `object` |
| `CreatedObject` | `Object.create` | `proto, propertiesObject` | `object` |
| `CreatedOptions` | [syncCall](https://github.com/Guseyn/cutie-object/blob/master/src/CreatedOptions.js#L12) | `key1, value1, key2, value2, ...` | `{ key1: value1, key2: value2, ... }` |
| `FrozenObject` | `Object.freeze` | `obj` | `obj` |
| `HasOwnProperty` | `obj.hasOwnProperty` | `obj, prop` | `boolean` |
| `IsExtensible` | `Object.isExtensible` | `obj` | `boolean` |
| `IsFrozen` | `Object.isFrozen` | `obj` | `boolean` |
| `IsPrototypeEnumerable` | `obj.propertyIsEnumerable` | `obj, prop` | `boolean` |
| `IsPrototypeOf` | `prototypeObj.isPrototypeOf` | `prototypeObj, obj` | `boolean` |
| `IsSealed` | `Object.isSealed` | `obj` | `boolean` |
| `Keys` | `Object.keys` | `obj` | `string[]` |
| `LocaleStringFrom` | `obj.toLocaleString` | `obj` | `string` |
| `NotExtensibleObject` | `Object.preventExtensions` | `obj` | `obj` |
| `ObjectWithDefinedProperties` | `Object.defineProperties` | `obj, props` | `obj` |
| `ObjectWithDefinedProperty` | `Object.defineProperty` | `obj, prop, descriptor` | `obj` |
| `ObjectWithPrototypeOf` | `Object.setPrototypeOf` | `obj, prototype` | `obj` |
| `ObjectWithValue` | `Object.assign({}, obj)[key] = value` | `obj, key, value` | `obj` |
| `OwnPropertyDescriptor` | `Object.getOwnPropertyDescriptor` | `obj, prop` | `obj` |
| `OwnPropertyNames` | `Object.getOwnPropertyNames` | `obj, prop` | `string[]` |
| `OwnPropertySymbols` | `Object.getOwnPropertySymbols` | `obj` | `string[]` |
| `ProcessedObject` | [processedObject](https://github.com/Guseyn/cutie-object/blob/master/src/Keys.js) | `obj, iterator, ...additionalArgs` | `obj` |
| `PrototypeOf` | `Object.getPrototypeOf` | `obj` | `prototype` |
| `SealedObject` | `Object.seal` | `obj` | `obj` |
| `StringFrom` | `obj.toString` | `obj` | `string` |
| `ObjectWithValue` | `obj[key] = value` | `obj, key, value` | `obj` |
| `Value` | `obj[key]` | `obj, key` | `value` |
| `ValueOf` | `obj.valueOf` | `obj` | `value` |
| `Values` | `Object.values` | `obj` | `string[]` |
