'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is string
class LocaleStringFrom extends AsyncObject {
  constructor (obj) {
    super(obj)
  }

  syncCall () {
    return (obj) => {
      return obj.toLocaleString()
    }
  }
}

module.exports = LocaleStringFrom
