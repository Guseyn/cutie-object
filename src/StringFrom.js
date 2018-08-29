'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is string
class StringFrom extends AsyncObject {

  constructor(obj) {
    super(obj);
  }

  definedSyncCall() {
    return (obj) => {
      return obj.toString();
    }
  }

}

module.exports = StringFrom;
