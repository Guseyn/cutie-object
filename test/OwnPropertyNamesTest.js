'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsArray
} = require('@cuties/is')
const {
  OwnPropertyNames
} = require('./../index')

let obj = { key: 'value' }

new Assertion(
  new IsArray(
    new OwnPropertyNames(
      obj
    )
  )
).call()
