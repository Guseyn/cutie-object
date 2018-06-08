'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsObject
} = require('@guseyn/cutie-is');
const {
  SealedObject
} = require('./../index');

let obj = {key: 'value'}

new Assertion(
  new IsObject(
    new SealedObject(
      obj
    )
  )
).call();
