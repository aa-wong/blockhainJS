'use strict';

const SHA256 = require("crypto-js/sha256");

class Block {

  /**
   * Constructor - method for creating a new block on the block chain
   * @param {Number} index             Index of the block in the chain
   * @param {ISO} timestamp            timestamp of the created block
   * @param {Any} data                 [description]
   * @param {String} [previousHash=""] [description]
   */
  constructor(index, data, previousHash = "") {
    this.index = index;
    this.timestamp = new Date().toString();
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
    this.nonce = 0;
  }

  /**
   * calculateHash -
   * @return {String} Stringified hash using all values in the block encrypted using SHA256
   */
  calculateHash() {
    return SHA256(
      this.index +
      this.previousHash +
      this.timestamp +
      JSON.stringify(this.data) +
      this.nonce
    ).toString();
  }

  /**
   * mineBlock - Method to mine the block
   * @param  {Number} difficulty - difficulty level to be set on the block for the nonce and hash value
   * @return {Null}              This method does not return anything
   */
  mineBlock(difficulty) {
    while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
    console.log("Block mined: ", this.hash);
  }
}

module.exports = Block;
