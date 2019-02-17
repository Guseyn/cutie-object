'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is object
class ObjectWithPrototypeOf extends AsyncObject {
  constructor (obj, prototype) {
    super(obj, prototype)
  }

  definedSyncCall () {
    return (obj, prototype) => {
      return Object.setPrototypeOf(obj, prototype)
    }
  }
}

module.exports = ObjectWithPrototypeOf
