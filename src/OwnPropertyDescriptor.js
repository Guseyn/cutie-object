'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is object
class OwnPropertyDescriptor extends AsyncObject {

  constructor(obj, prop) {
    super(obj, prop);
  }

  definedSyncCall() {
    return (obj, prop) => {
      return Object.getOwnPropertyDescriptor(obj, prop);
    }
  }

}

module.exports = OwnPropertyDescriptor;
