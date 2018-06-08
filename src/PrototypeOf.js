'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is prototype
class PrototypeOf extends AsyncObject {

  constructor(obj) {
    super(obj);
  }

  definedSyncCall() {
    return (obj) => {
      return Object.getPrototypeOf(obj);
    }
  }

}

module.exports = PrototypeOf;
