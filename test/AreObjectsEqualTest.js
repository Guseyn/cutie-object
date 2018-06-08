'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  AreObjectsEqual
} = require('./../index');

let obj = {key: 'value'}

new Assertion(
  new AreObjectsEqual(
    obj, obj
  )
).call();
