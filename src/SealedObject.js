'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is object
class SealedObject extends AsyncObject {
  constructor (obj) {
    super(obj)
  }

  syncCall () {
    return (obj) => {
      return Object.seal(obj)
    }
  }
}

module.exports = SealedObject
