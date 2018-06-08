'use strict'

const {
  StrictEqualAssertion
} = require('@guseyn/cutie-assert');
const {
  PrototypeOf,
  CreatedObject
} = require('./../index');

let obj = {key: 'value'}

new StrictEqualAssertion(
  new PrototypeOf(
    new CreatedObject(obj)
  ), obj
).call();
