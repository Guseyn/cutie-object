'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is string[]
class Values extends AsyncObject {
  constructor (obj) {
    super(obj)
  }

  syncCall () {
    return (obj) => {
      return Object.values(obj)
    }
  }
}

module.exports = Values
