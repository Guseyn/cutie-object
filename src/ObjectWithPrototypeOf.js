'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is object
class ObjectWithPrototypeOf extends AsyncObject {

  constructor(obj, prototype) {
    super(obj, prototype);
  }

  definedSyncCall() {
    return (obj, prototype) => {
      return Object.freeze(obj, prototype);
    }
  }

}

module.exports = ObjectWithPrototypeOf;
