'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsArray
} = require('@cuties/is')
const {
  Keys
} = require('./../index')

let obj = { key: 'value' }

new Assertion(
  new IsArray(
    new Keys(
      obj
    )
  )
).call()
