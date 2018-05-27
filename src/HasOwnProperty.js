'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is boolean
class HasOwnProperty extends AsyncObject {

  constructor(obj, prop) {
    super(obj, prop);
  }

  definedSyncCall() {
    return (obj, prop) => {
      return obj.hasOwnProperty(prop);
    }
  }

}

module.exports = HasOwnProperty;
