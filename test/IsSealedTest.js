'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsBoolean
} = require('@cuties/is')
const {
  IsSealed
} = require('./../index')

let obj = { key: 'value' }

new Assertion(
  new IsBoolean(
    new IsSealed(
      obj
    )
  )
).call()
