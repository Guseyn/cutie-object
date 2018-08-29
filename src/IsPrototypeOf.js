'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is boolean
class IsPrototypeOf extends AsyncObject {

  constructor(prototypeObj, obj) {
    super(prototypeObj, obj);
  }

  definedSyncCall() {
    return (prototypeObj, obj) => {
      return prototypeObj.isPrototypeOf(obj);
    }
  }

}

module.exports = IsPrototypeOf;
