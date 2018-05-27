'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is object
class SealedObject extends AsyncObject {

  constructor(obj) {
    super(obj);
  }

  definedSyncCall() {
    return (obj) => {
      return Object.seal(obj);
    }
  }

}

module.exports = SealedObject;
