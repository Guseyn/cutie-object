'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  HasOwnProperty
} = require('./../index');

let obj = {key: 'value'}

new Assertion(
  new HasOwnProperty(
    obj, 'key'
  )
).call();
