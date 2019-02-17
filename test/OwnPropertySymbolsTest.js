'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsArray
} = require('@cuties/is')
const {
  OwnPropertySymbols
} = require('./../index')

let obj = { key: 'value' }

new Assertion(
  new IsArray(
    new OwnPropertySymbols(
      obj
    )
  )
).call()
