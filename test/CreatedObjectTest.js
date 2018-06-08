'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  Is
} = require('@guseyn/cutie-is');
const {
  CreatedObject
} = require('./../index');

new Assertion(
  new Is(
    new CreatedObject(
      Object.prototype
    ), Object
  )
).call();
