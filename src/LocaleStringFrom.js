'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is string
class LocaleStringFrom extends AsyncObject {

  constructor(obj) {
    super(obj);
  }

  definedSyncCall() {
    return (obj) => {
      return obj.toLocaleString();
    }
  }

}

module.exports = LocaleStringFrom;
