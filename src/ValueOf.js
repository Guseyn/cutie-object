'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is value
class ValueOf extends AsyncObject {
  constructor (obj) {
    super(obj)
  }

  syncCall () {
    return (obj) => {
      return obj.valueOf()
    }
  }
}

module.exports = ValueOf
