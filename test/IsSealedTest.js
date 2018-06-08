'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsBoolean
} = require('@guseyn/cutie-is');
const {
  IsSealed
} = require('./../index');

let obj = {key: 'value'}

new Assertion(
  new IsBoolean(
    new IsSealed(
      obj
    )
  )
).call();
