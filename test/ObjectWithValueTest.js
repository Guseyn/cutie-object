'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsObject
} = require('@cuties/is')
const {
  ObjectWithValue
} = require('./../index')

let obj = {}

new Assertion(
  new IsObject(
    new ObjectWithValue(
      obj, 'key', 'value'
    )
  )
).call()
