'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsBoolean
} = require('@cuties/is');
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
