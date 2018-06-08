'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsObject
} = require('@guseyn/cutie-is');
const {
  ValueOf
} = require('./../index');

let obj = {key: 'value'}

new Assertion(
  new IsObject(
    new ValueOf(obj)
  )
).call();
