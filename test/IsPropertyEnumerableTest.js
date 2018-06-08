'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsBoolean
} = require('@guseyn/cutie-is');
const {
  IsPropertyEnumerable
} = require('./../index');

let obj = {key: 'value'}

new Assertion(
  new IsBoolean(
    new IsPropertyEnumerable(
      obj
    )
  )
).call();
