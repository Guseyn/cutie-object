'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  AssignedObject
} = require('./../index')

let obj = { key: 'value' }

new Assertion(
  new AssignedObject(
    obj
  )
).call()
