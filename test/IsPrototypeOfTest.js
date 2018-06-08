'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsPrototypeOf
} = require('./../index');

let obj = {key: 'value'}

new Assertion(
  new IsPrototypeOf(
    Object.prototype, Object
  )
).call();
