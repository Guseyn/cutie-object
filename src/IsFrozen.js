'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is boolean
class IsFrozen extends AsyncObject {
  constructor (obj) {
    super(obj)
  }

  definedSyncCall () {
    return (obj) => {
      return Object.isFrozen(obj)
    }
  }
}

module.exports = IsFrozen
