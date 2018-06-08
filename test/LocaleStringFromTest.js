'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsString
} = require('@guseyn/cutie-is');
const {
  LocaleStringFrom
} = require('./../index');

let obj = {key: 'value'}

new Assertion(
  new IsString(
    new LocaleStringFrom(
      obj
    )
  )
).call();
