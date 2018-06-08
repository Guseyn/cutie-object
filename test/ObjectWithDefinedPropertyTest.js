'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsObject
} = require('@guseyn/cutie-is');
const {
  ObjectWithDefinedProperty
} = require('./../index');

let obj = {}

new Assertion(
  new IsObject(
    new ObjectWithDefinedProperty(
      obj, 'key', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: 'static'
      }
    )
  )
).call();
