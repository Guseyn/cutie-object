'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is object
class ObjectWithDefinedProperty extends AsyncObject {

  constructor(obj, prop, descriptor) {
    super(obj, prop, descriptor);
  }

  definedSyncCall() {
    return (obj, prop, descriptor) => {
      return Object.defineProperty(obj, prop, descriptor);
    }
  }

}

module.exports = ObjectWithDefinedProperty;
