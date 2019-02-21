'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is prototype
class PrototypeOf extends AsyncObject {
  constructor (obj) {
    super(obj)
  }

  syncCall () {
    return (obj) => {
      return Object.getPrototypeOf(obj)
    }
  }
}

module.exports = PrototypeOf
