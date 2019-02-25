'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is obj
class ProcessedObject extends AsyncObject {
  constructor (obj, iterator, ...additionalArgs) {
    super(obj, iterator, ...additionalArgs)
  }

  syncCall () {
    return (obj, iterator, ...additionalArgs) => {
      let newObj = Object.assign({}, obj)
      for (var key in newObj) {
        iterator(newObj, key, newObj[key], ...additionalArgs)
      }
      return newObj
    }
  }
}

module.exports = ProcessedObject
