'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is object
class ObjectWithDefinedProperties extends AsyncObject {

  constructor(obj, props) {
    super(obj, props);
  }

  definedSyncCall() {
    return (obj, props) => {
      return Object.defineProperties(obj, props);
    }
  }

}

module.exports = ObjectWithDefinedProperties;
