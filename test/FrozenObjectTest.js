'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  Is
} = require('@guseyn/cutie-is');
const {
  FrozenObject
} = require('./../index');

let obj = {key: 'value'}

new Assertion(
  new Is(
    new FrozenObject(
      obj
    ), Object
  )
).call();
