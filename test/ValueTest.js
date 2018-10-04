'use strict'

const {
  EqualAssertion
} = require('@cuties/assert');
const {
  IsObject
} = require('@cuties/is');
const {
  Value
} = require('./../index');

let obj = {key: 'value'}

new EqualAssertion(
  new Value(obj, 'key'), 'value'
).call();
