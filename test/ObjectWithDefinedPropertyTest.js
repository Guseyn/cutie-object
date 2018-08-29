'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsObject
} = require('@cuties/is');
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
