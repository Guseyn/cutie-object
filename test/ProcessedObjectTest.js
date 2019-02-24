'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsObject
} = require('@cuties/is')
const {
  ProcessedObject
} = require('./../index')

let obj = { key: 'value' }

new Assertion(
  new IsObject(
    new ProcessedObject(
      obj, (obj, key, value) => {
        obj[key] = value + '!'
      }
    )
  )
).call()
