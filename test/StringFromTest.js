'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsString
} = require('@guseyn/cutie-is');
const {
  StringFrom
} = require('./../index');

let obj = {key: 'value'}

new Assertion(
  new IsString(
    new StringFrom(obj)
  )
).call();
