'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsBoolean
} = require('@guseyn/cutie-is');
const {
  IsExtensible
} = require('./../index');

let obj = {key: 'value'}

new Assertion(
  new IsBoolean(
    new IsExtensible(
      obj
    )
  )
).call();
