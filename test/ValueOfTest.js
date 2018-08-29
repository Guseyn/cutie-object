'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsObject
} = require('@cuties/is');
const {
  ValueOf
} = require('./../index');

let obj = {key: 'value'}

new Assertion(
  new IsObject(
    new ValueOf(obj)
  )
).call();
