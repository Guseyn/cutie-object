'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsBoolean
} = require('@cuties/is');
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
