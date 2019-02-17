'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsObject
} = require('@cuties/is')
const {
  ObjectWithDefinedProperties
} = require('./../index')

let obj = { key: 'value' }

new Assertion(
  new IsObject(
    new ObjectWithDefinedProperties(
      obj, {
        'property1': {
          value: true,
          writable: true
        },
        'property2': {
          value: 'Hello',
          writable: false
        }
      }
    )
  )
).call()
