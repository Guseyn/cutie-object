'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is object
class CreatedObject extends AsyncObject {
  constructor (proto, propertiesObject) {
    super(proto, propertiesObject)
  }

  definedSyncCall () {
    return (proto, propertiesObject) => {
      return Object.create(proto, propertiesObject)
    }
  }
}

module.exports = CreatedObject
