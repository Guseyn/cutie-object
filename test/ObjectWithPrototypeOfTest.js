'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsObject
} = require('@cuties/is')
const {
  ObjectWithPrototypeOf
} = require('./../index')

let obj = {}

new Assertion(
  new IsObject(
    new ObjectWithPrototypeOf(
      obj, Date.prototype
    )
  )
).call()
