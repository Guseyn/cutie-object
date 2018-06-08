'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  Is
} = require('@guseyn/cutie-is');
const {
  AssignedObject
} = require('./../index');

let obj = {key: 'value'}

new Assertion(
  new AssignedObject(
    obj
  )
).call();
