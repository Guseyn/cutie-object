'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is object
class NotExtensibleObject extends AsyncObject {
  constructor (obj) {
    super(obj)
  }

  definedSyncCall () {
    return (obj) => {
      return Object.preventExtensions(obj)
    }
  }
}

module.exports = NotExtensibleObject
