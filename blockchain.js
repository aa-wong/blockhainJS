'use strict';

const Block = require('./block');

class Blockchain {
  constructor(difficulty) {
    this.chain = this.createGenesis()
    this.difficulty = difficulty;
  }

  createGenesis() {
    return new Block(
      0,
      "Genesis Block",
      "0");
  }

  latestBlock() {
    return this.chain;
  }

  addBlock(data) {
    const block = new Block(++this.chain.index, data);
    block.previousHash = this.latestBlock().hash;
    block.previous = this.chain;
    block.mineBlock(this.difficulty);
    ++this.difficulty;
    this.chain = block;
  }

  entireChain() {
    let curr = this.chain;
    const array = [];
    while (curr) {
      array.push(curr);
      curr = curr.previous;
    }
    return array;
  }
}

module.exports = Blockchain;
