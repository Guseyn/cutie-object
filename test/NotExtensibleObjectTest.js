'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsObject
} = require('@guseyn/cutie-is');
const {
  NotExtensibleObject
} = require('./../index');

let obj = {key: 'value'}

new Assertion(
  new IsObject(
    new NotExtensibleObject(
      obj
    )
  )
).call();
