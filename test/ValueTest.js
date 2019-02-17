'use strict'

const {
  StrictEqualAssertion
} = require('@cuties/assert')
const {
  Value
} = require('./../index')

let obj = { key: 'value' }

new StrictEqualAssertion(
  new Value(obj, 'key'), 'value'
).call()
