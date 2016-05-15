var Web3 = require('web3');

// get the latest block
var web3 = new Web3();
module.exports = web3.eth.defaultBlock;
