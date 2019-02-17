'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  Is
} = require('@cuties/is')
const {
  CreatedObject
} = require('./../index')

new Assertion(
  new Is(
    new CreatedObject(
      Object.prototype
    ), Object
  )
).call()
