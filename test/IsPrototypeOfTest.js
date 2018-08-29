'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsPrototypeOf
} = require('./../index');

let obj = {key: 'value'}

new Assertion(
  new IsPrototypeOf(
    Object.prototype, Object
  )
).call();
