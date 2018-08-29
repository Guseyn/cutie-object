'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsObject
} = require('@cuties/is');
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
