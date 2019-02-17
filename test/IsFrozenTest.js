'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsBoolean
} = require('@cuties/is')
const {
  IsFrozen
} = require('./../index')

let obj = { key: 'value' }

new Assertion(
  new IsBoolean(
    new IsFrozen(
      obj
    )
  )
).call()
