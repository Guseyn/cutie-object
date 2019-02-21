'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is object
class NotExtensibleObject extends AsyncObject {
  constructor (obj) {
    super(obj)
  }

  syncCall () {
    return (obj) => {
      return Object.preventExtensions(obj)
    }
  }
}

module.exports = NotExtensibleObject
