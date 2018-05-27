'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is boolean
class AreObjectsEqual extends AsyncObject {

  constructor(obj1, obj2) {
    super(obj1, obj2);
  }

  definedSyncCall() {
    return (obj1, obj2) => {
      return Object.is(obj1, obj2);
    }
  }

}

module.exports = AreObjectsEqual;
