'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsArray
} = require('@guseyn/cutie-is');
const {
  OwnPropertyNames
} = require('./../index');

let obj = {key: 'value'}

new Assertion(
  new IsArray(
    new OwnPropertyNames(
      obj
    )
  )
).call();
