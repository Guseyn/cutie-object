'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsObject
} = require('@cuties/is')
const {
  OwnPropertyDescriptor
} = require('./../index')

let obj = { key: 'value' }

new Assertion(
  new IsObject(
    new OwnPropertyDescriptor(
      obj, 'key'
    )
  )
).call()
