'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is object
class AssignedObject extends AsyncObject {

  constructor(target, ...sources) {
    super(target, ...sources);
  }

  definedSyncCall() {
    return (target, ...sources) => {
      return Object.assign(target, ...sources);
    }
  }

}

module.exports = AssignedObject;
