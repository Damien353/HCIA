
// Your code goes here

//--------------------------------------------------------------------//

class Agency {
  constructor(name) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }

    this._name = name;
    this._agentList = [];
    }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  get agentList() {
    return this._agentList;
  }

  addAgent(agent){
    this._agentList.push(agent);
  }
}

class Agent {
  constructor(name, id) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }

    this._name = name;
    this._id = id;
    this._objectives = [];
    }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  get id() {
    return this._id;
  }

  set id(value){
    if (typeof value !== 'string') {
      throw new TypeError('id must be a string');
    }

    if (length(id) !== 3){
      throw new ValueError('id must be three caracters long');
    }
    this._id = value;
  }
  assignObjective(objective) {
    return this._objectives.push(objective);
  }

  get objectives() {
    return this._objectives;
  }
}

class Objective {
  constructor(description) {
    if (typeof description !== 'string') {
      throw new TypeError('description must be a string');
    }

    this._description = description;
    }

  get description() {
    return this._description;
  }

  set description(value) {
    if (typeof value !== 'string') {
      throw new TypeError('description must be a string');
    }
    this._description = value;
  }
}

class Surveillance extends Objective {
  constructor(description, target) {

    if (typeof target !== 'string') {
      throw new TypeError('target must be a string');
    }

    super(description);
    this._target = target;
    }

  get target() {
    return this._target;
  }

  set target(value){
    if (typeof value !== 'string') {
      throw new TypeError('target must be a string');
    }
    this._target = value;
  }
}

class Elimination extends Objective {
  constructor(description, target) {

    if (typeof target !== 'string') {
      throw new TypeError('target must be a string');
    }
    super(description);
    this._target = target;
    }

  get target() {
    return this._target;
  }

  set target(value){
    if (typeof value !== 'string') {
      throw new TypeError('target must be a string');
    }
    this._target = value;
  }
}

class Exfiltration extends Objective {
  constructor(description, location) {

    if (typeof location !== 'string') {
      throw new TypeError('location must be a string');
    }
    super(description);
    this._location = location;
    }

  get location() {
    return this._location;
  }

  set location(value){
    if (typeof value !== 'string') {
      throw new TypeError('location must be a string');
    }
    this._location = value;
  }
}
module.exports = { Agency, Agent, Objective, Surveillance, Elimination, Exfiltration }; // When you add a new class to this file, add the name of the class inside brackets for export it and allow jest to use it in test file. Each class added inside brackets must be separated by commas.
