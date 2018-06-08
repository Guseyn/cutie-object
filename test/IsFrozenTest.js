'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsBoolean
} = require('@guseyn/cutie-is');
const {
  IsFrozen
} = require('./../index');

let obj = {key: 'value'}

new Assertion(
  new IsBoolean(
    new IsFrozen(
      obj
    )
  )
).call();
