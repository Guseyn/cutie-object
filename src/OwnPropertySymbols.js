'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is string[]
class OwnPropertySymbols extends AsyncObject {

  constructor(obj) {
    super(obj);
  }

  definedSyncCall() {
    return (obj) => {
      return Object.getOwnPropertySymbols(obj);
    }
  }

}

module.exports = OwnPropertySymbols;
