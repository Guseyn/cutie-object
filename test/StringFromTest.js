'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsString
} = require('@cuties/is')
const {
  StringFrom
} = require('./../index')

let obj = { key: 'value' }

new Assertion(
  new IsString(
    new StringFrom(obj)
  )
).call()
