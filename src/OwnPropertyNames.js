'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is string[]
class OwnPropertyNames extends AsyncObject {
  constructor (obj) {
    super(obj)
  }

  syncCall () {
    return (obj, prop) => {
      return Object.getOwnPropertyNames(obj)
    }
  }
}

module.exports = OwnPropertyNames
