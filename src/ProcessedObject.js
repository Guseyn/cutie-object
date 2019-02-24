'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is obj
class ProcessedObject extends AsyncObject {
  constructor (obj, iterator) {
    super(obj, iterator)
  }

  syncCall () {
    return (obj, iterator) => {
      for (var key in obj) {
        iterator(obj, key, obj[key])
      }
      return obj
    }
  }
}

module.exports = ProcessedObject
