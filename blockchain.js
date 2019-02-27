const Block = require('./block')

class Blockchain {
  constructor(difficulty) {
    this.chain = [this.createGenesis()]
    this.difficulty = difficulty
  }

  createGenesis() {
    return new Block(
      0,
      new Date().toString(),
      "Genesis Block",
      "0")
  }

  latestBlock() {
    return this.chain[this.chain.length -  1]
  }

  addBlock(block) {
    block.previousHash = this.latestBlock().hash
    block.mineBlock(this.difficulty)
    this.difficulty ++
    return this.chain.push(block)
  }

  checkValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const current = this.chain[i]
      const previous = this.chain[i - 1]
      if (current.hash !== current.calculateHash()) return false
      if (current.previousHash !== previous.hash) return false
    }
    return true
  }
}

module.exports = Blockchain
