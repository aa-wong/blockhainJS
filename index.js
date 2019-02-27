const Blockchain = require('./blockchain')
const Block = require('./block')

const length = 6
let dt = new Date()
let timestamp = dt.toString()

const chain = new Blockchain(1)

for (let i = 0; i < length; i++) {
  console.log("Mining block...")
  let index = i + 1
  chain.addBlock(new Block(index, timestamp, "This is block " + index))
}

console.log(JSON.stringify(chain, null, 4))
console.log("Is blockchain valid? ", chain.checkValid().toString());
