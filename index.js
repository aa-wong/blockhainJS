'use strict';

const Blockchain = require('./blockchain');
const Block = require('./block');

const length = 7;

const chain = new Blockchain(0);

for (let i = 0; i < length; i++) {
  console.log("Mining block...");
  let index = i + 1;
  chain.addBlock({message: "This is block " + index});
}

// console.log(JSON.stringify(chain, null, 4));
console.log("current block chain");
console.log(chain.entireChain().reverse());
