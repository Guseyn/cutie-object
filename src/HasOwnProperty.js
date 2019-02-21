'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is boolean
class HasOwnProperty extends AsyncObject {
  constructor (obj, prop) {
    super(obj, prop)
  }

  syncCall () {
    return (obj, prop) => {
      return obj.hasOwnProperty(prop)
    }
  }
}

module.exports = HasOwnProperty
