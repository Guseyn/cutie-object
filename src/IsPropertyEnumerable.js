'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is boolean
class IsPrototypeEnumerable extends AsyncObject {

  constructor(obj, prop) {
    super(obj, prop);
  }

  definedSyncCall() {
    return (obj, prop) => {
      return obj.propertyIsEnumerable(prop);
    }
  }

}

module.exports = IsPrototypeEnumerable;
