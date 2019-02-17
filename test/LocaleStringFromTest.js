'use strict'

const {
  Assertion
} = require('@cuties/assert')
const {
  IsString
} = require('@cuties/is')
const {
  LocaleStringFrom
} = require('./../index')

let obj = { key: 'value' }

new Assertion(
  new IsString(
    new LocaleStringFrom(
      obj
    )
  )
).call()
