var settings = require('../settings/settings.js');
var Web3 = require('web3');

// connect to test-net
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

// watch the The DAO 2 (testnet) contract
module.exports = web3.eth.contract(settings.contract.abi).at(settings.contract.address);
