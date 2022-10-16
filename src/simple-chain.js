const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  result: [],
  getLength() {
    this.result.length;
  },
  addLink(value) {
    this.result.push(`( ${String(value)} )`);
    return this;
  },
  removeLink(position) {
    if (!(typeof position === 'number') && !Number.isInteger(position)) {
      this.result.length = 0;
      throw new Error ("You can't remove incorrect link!")
    };
    if (position < 1 || position > this.result.length){
      this.result.length = 0;
      throw new Error ("You can't remove incorrect link!");
    }
      let index = position - 1;
      this.result.splice(index, 1);
      return this;

  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    const chain = this.result.join('~~');
    this.result.length = 0;
    return chain;
  }
};


module.exports = {
  chainMaker
};
