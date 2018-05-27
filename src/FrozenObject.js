'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is object
class FrozenObject extends AsyncObject {

  constructor(obj) {
    super(obj);
  }

  definedSyncCall() {
    return (obj) => {
      return Object.freeze(obj);
    }
  }

}

module.exports = FrozenObject;
