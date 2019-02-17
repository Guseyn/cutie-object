'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsPrototypeOf
} = require('./../index')

new Assertion(
  new IsPrototypeOf(
    Object.prototype, Object
  )
).call()
