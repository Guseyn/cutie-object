'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is string[]
class Keys extends AsyncObject {

  constructor(obj) {
    super(obj);
  }

  definedSyncCall() {
    return (obj) => {
      return Object.keys(obj);
    }
  }

}

module.exports = Keys;
