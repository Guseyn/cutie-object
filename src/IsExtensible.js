'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is boolean
class IsExtensible extends AsyncObject {

  constructor(obj) {
    super(obj);
  }

  definedSyncCall() {
    return (obj) => {
      return Object.isExtensible(obj);
    }
  }

}

module.exports = IsExtensible;
