'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is object
class FrozenObject extends AsyncObject {
  constructor (obj) {
    super(obj)
  }

  syncCall () {
    return (obj) => {
      return Object.freeze(obj)
    }
  }
}

module.exports = FrozenObject
