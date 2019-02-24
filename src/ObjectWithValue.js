'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is obj
class ObjectWithValue extends AsyncObject {
  constructor (obj, key, value) {
    super(obj, key, value)
  }

  syncCall () {
    return (obj, key, value) => {
      let newObj = Object.assign({}, obj)
      newObj[key] = value
      return newObj
    }
  }
}

module.exports = ObjectWithValue
