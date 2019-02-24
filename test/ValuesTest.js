'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsArray
} = require('@cuties/is')
const {
  Values
} = require('./../index')

let obj = { key: 'value' }

new Assertion(
  new IsArray(
    new Values(
      obj
    )
  )
).call()
