'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is value
class Value extends AsyncObject {

  constructor(obj, key) {
    super(obj, key);
  }

  definedSyncCall() {
    return (obj, key) => {
      return obj[key];
    }
  }

}

module.exports = Value;
