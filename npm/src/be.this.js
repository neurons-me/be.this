// be.this.js
// This module will take an instance of this.be and adjust its state based on given instructions.
class BeThis {
  constructor(thisBeing) {
    this.thisBe = thisBeing;
  }

  adjustStateBasedOnInput(instruction, data) {
    switch(instruction) {
      case 'ADD':
        this.thisBe.setState(data.key, data.value);
        break;
      case 'REMOVE':
        this.thisBe.deleteState(data.key);
        break;
      // You can add more cases here for further customization
      default:
        console.log("Instruction not recognized.");
    }
  }
}

module.exports = BeThis;

