'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is boolean
class IsPrototypeEnumerable extends AsyncObject {

  constructor(obj, prop) {
    super(obj, prop);
  }

  definedSyncCall() {
    return (obj, prop) => {
      return obj.isPrototypeEnumerable(prop);
    }
  }

}

module.exports = IsPrototypeEnumerable;
