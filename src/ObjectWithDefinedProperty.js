'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is object
class ObjectWithDefinedProperty extends AsyncObject {
  constructor (obj, prop, descriptor) {
    super(obj, prop, descriptor)
  }

  syncCall () {
    return (obj, prop, descriptor) => {
      return Object.defineProperty(obj, prop, descriptor)
    }
  }
}

module.exports = ObjectWithDefinedProperty
