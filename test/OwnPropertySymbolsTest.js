'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsArray
} = require('@guseyn/cutie-is');
const {
  OwnPropertySymbols
} = require('./../index');

let obj = {key: 'value'}

new Assertion(
  new IsArray(
    new OwnPropertySymbols(
      obj
    )
  )
).call();
