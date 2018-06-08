'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsObject
} = require('@guseyn/cutie-is');
const {
  ObjectWithPrototypeOf
} = require('./../index');

let obj = {}

new Assertion(
  new IsObject(
    new ObjectWithPrototypeOf(
      obj, Date.prototype
    )
  )
).call();
