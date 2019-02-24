'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is obj
class ProcessedObject extends AsyncObject {
  constructor (obj, iterator) {
    super(obj, iterator)
  }

  syncCall () {
    return (obj, iterator) => {
      let newObj = Object.assign({}, obj)
      for (var key in newObj) {
        iterator(newObj, key, newObj[key])
      }
      return newObj
    }
  }
}

module.exports = ProcessedObject
