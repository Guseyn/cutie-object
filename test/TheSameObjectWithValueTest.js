'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsObject
} = require('@cuties/is')
const {
  TheSameObjectWithValue
} = require('./../index')

let obj = {}

new Assertion(
  new IsObject(
    new TheSameObjectWithValue(
      obj, 'key', 'value'
    )
  )
).call()
