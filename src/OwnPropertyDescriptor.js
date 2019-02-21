'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is object
class OwnPropertyDescriptor extends AsyncObject {
  constructor (obj, prop) {
    super(obj, prop)
  }

  syncCall () {
    return (obj, prop) => {
      return Object.getOwnPropertyDescriptor(obj, prop)
    }
  }
}

module.exports = OwnPropertyDescriptor
