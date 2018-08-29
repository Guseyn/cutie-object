'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsObject
} = require('@cuties/is');
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
