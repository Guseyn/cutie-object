'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  Is
} = require('@cuties/is');
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
