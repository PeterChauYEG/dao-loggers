# Dao-services

This is a set of micro-services which watch an Ethereum DAO-type Smart Contract and feed data to the DAO-api.

## [Roadmap][Roadmap]

## Services

Service | Details
---|---
Event Logger | Listens for and writes the latest event to the dao-api.
Event Log | Pulls all Smart Contract events from the blockchain then writes them to the dao-api

## How to Start

1. Connect to testnet with `geth --testnet --rpc --rpccorsdomain "http://localhost:3000"`
2. Write Smart Contract Logs to Meteor with `npm run-script get-event-log` to sync up your db
3. Start Smart Contract event logger with `npm run-script start-event-logger`

## /settings/settings.js sample
```
module.exports = {
    daoApi: {
        host: 'xxx',
        port: '8080',
    },
    contract: {
        name: 'The DAO',
        address: '0xbb9bc244d798123fde783fcc1c72d3bb8c189413',
        blockStart: '1425000',
        abi: [{
            "constant": true,
            "inputs": [{
                "name": "",
                "type": "uint256"
            }],
            "name": "proposals",
            "outputs": [{
                "name": "recipient",
                "type": "address",
                "value": "0x0000000000000000000000000000000000000000"
            }, {
                "name": "amount",
                "type": "uint256",
                "value": "0"
            }, {
                "name": "description",
                "type": "string",
                "value": ""
            }, {
                "name": "votingDeadline",
                "type": "uint256",
                "value": "0"
            }, {
                "name": "open",
                "type": "bool",
                "value": false
            }, {
                "name": "proposalPassed",
                "type": "bool",
                "value": false
            }, {
                "name": "proposalHash",
                "type": "bytes32",
                "value": "0x0000000000000000000000000000000000000000000000000000000000000000"
            }, {
                "name": "proposalDeposit",
                "type": "uint256",
                "value": "0"
            }, {
                "name": "newServiceProvider",
                "type": "bool",
                "value": false
            }, {
                "name": "yea",
                "type": "uint256",
                "value": "0"
            }, {
                "name": "nay",
                "type": "uint256",
                "value": "0"
            }, {
                "name": "creator",
                "type": "address",
                "value": "0x0000000000000000000000000000000000000000"
            }],
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "_spender",
                "type": "address"
            }, {
                "name": "_amount",
                "type": "uint256"
            }],
            "name": "approve",
            "outputs": [{
                "name": "success",
                "type": "bool"
            }],
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "rewardAccount",
            "outputs": [{
                "name": "",
                "type": "address",
                "value": "0xd2e16a20dd7b1ae54fb0312209784478d069c7b0"
            }],
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "_tokenHolder",
                "type": "address"
            }],
            "name": "buyTokenProxy",
            "outputs": [{
                "name": "success",
                "type": "bool"
            }],
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "daoCreator",
            "outputs": [{
                "name": "",
                "type": "address",
                "value": "0x4a574510c7014e4ae985403536074abe582adfc8"
            }],
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
            "outputs": [{
                "name": "",
                "type": "uint256",
                "value": "2.677435362233698610605979e+24"
            }],
            "type": "function"
        }, {
            "constant": false,
            "inputs": [],
            "name": "divisor",
            "outputs": [{
                "name": "divisor",
                "type": "uint256"
            }],
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "extraBalance",
            "outputs": [{
                "name": "",
                "type": "address",
                "value": "0x807640a13483f8ac783c557fcdf27be11ea4ac7a"
            }],
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "_proposalID",
                "type": "uint256"
            }, {
                "name": "_transactionData",
                "type": "bytes"
            }],
            "name": "executeProposal",
            "outputs": [{
                "name": "_success",
                "type": "bool"
            }],
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "_from",
                "type": "address"
            }, {
                "name": "_to",
                "type": "address"
            }, {
                "name": "_value",
                "type": "uint256"
            }],
            "name": "transferFrom",
            "outputs": [{
                "name": "success",
                "type": "bool"
            }],
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "totalRewardToken",
            "outputs": [{
                "name": "",
                "type": "uint256",
                "value": "0"
            }],
            "type": "function"
        }, {
            "constant": false,
            "inputs": [],
            "name": "payDAO",
            "outputs": [{
                "name": "",
                "type": "bool"
            }],
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "closingTime",
            "outputs": [{
                "name": "",
                "type": "uint256",
                "value": "1464426000"
            }],
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{
                "name": "",
                "type": "address"
            }],
            "name": "allowedRecipients",
            "outputs": [{
                "name": "",
                "type": "bool",
                "value": false
            }],
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "_to",
                "type": "address"
            }, {
                "name": "_value",
                "type": "uint256"
            }],
            "name": "transferWithoutReward",
            "outputs": [{
                "name": "success",
                "type": "bool"
            }],
            "type": "function"
        }, {
            "constant": false,
            "inputs": [],
            "name": "refund",
            "outputs": [],
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "_recipient",
                "type": "address"
            }, {
                "name": "_amount",
                "type": "uint256"
            }, {
                "name": "_description",
                "type": "string"
            }, {
                "name": "_transactionData",
                "type": "bytes"
            }, {
                "name": "_debatingPeriod",
                "type": "uint256"
            }, {
                "name": "_newServiceProvider",
                "type": "bool"
            }],
            "name": "newProposal",
            "outputs": [{
                "name": "_proposalID",
                "type": "uint256"
            }],
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "_newContract",
                "type": "address"
            }],
            "name": "newContract",
            "outputs": [],
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{
                "name": "_owner",
                "type": "address"
            }],
            "name": "balanceOf",
            "outputs": [{
                "name": "balance",
                "type": "uint256",
                "value": "0"
            }],
            "type": "function"
        }, {
            "constant": false,
            "inputs": [],
            "name": "halveMinQuorum",
            "outputs": [{
                "name": "_success",
                "type": "bool"
            }],
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "isFunded",
            "outputs": [{
                "name": "",
                "type": "bool",
                "value": false
            }],
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "_recipient",
                "type": "address"
            }],
            "name": "addAllowedAddress",
            "outputs": [{
                "name": "_success",
                "type": "bool"
            }],
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{
                "name": "",
                "type": "address"
            }],
            "name": "paidOut",
            "outputs": [{
                "name": "",
                "type": "uint256",
                "value": "0"
            }],
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "_proposalID",
                "type": "uint256"
            }, {
                "name": "_newServiceProvider",
                "type": "address"
            }],
            "name": "splitDAO",
            "outputs": [{
                "name": "_success",
                "type": "bool"
            }],
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "proposalDeposit",
            "outputs": [{
                "name": "",
                "type": "uint256",
                "value": "2000000000000000000"
            }],
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "serviceProvider",
            "outputs": [{
                "name": "",
                "type": "address",
                "value": "0x"
            }],
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "numberOfProposals",
            "outputs": [{
                "name": "_numberOfProposals",
                "type": "uint256",
                "value": "0"
            }],
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "minValue",
            "outputs": [{
                "name": "",
                "type": "uint256",
                "value": "0"
            }],
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "rewards",
            "outputs": [{
                "name": "",
                "type": "uint256",
                "value": "0"
            }],
            "type": "function"
        }, {
            "constant": false,
            "inputs": [],
            "name": "receiveEther",
            "outputs": [{
                "name": "",
                "type": "bool"
            }],
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "_to",
                "type": "address"
            }, {
                "name": "_value",
                "type": "uint256"
            }],
            "name": "transfer",
            "outputs": [{
                "name": "success",
                "type": "bool"
            }],
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "privateSale",
            "outputs": [{
                "name": "",
                "type": "address",
                "value": "0x"
            }],
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "_proposalID",
                "type": "uint256"
            }, {
                "name": "_supportsProposal",
                "type": "bool"
            }],
            "name": "vote",
            "outputs": [{
                "name": "_voteID",
                "type": "uint256"
            }],
            "type": "function"
        }, {
            "constant": false,
            "inputs": [],
            "name": "getMyReward",
            "outputs": [{
                "name": "_success",
                "type": "bool"
            }],
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{
                "name": "",
                "type": "address"
            }],
            "name": "rewardToken",
            "outputs": [{
                "name": "",
                "type": "uint256",
                "value": "0"
            }],
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "_from",
                "type": "address"
            }, {
                "name": "_to",
                "type": "address"
            }, {
                "name": "_value",
                "type": "uint256"
            }],
            "name": "transferFromWithoutReward",
            "outputs": [{
                "name": "success",
                "type": "bool"
            }],
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{
                "name": "_owner",
                "type": "address"
            }, {
                "name": "_spender",
                "type": "address"
            }],
            "name": "allowance",
            "outputs": [{
                "name": "remaining",
                "type": "uint256",
                "value": "0"
            }],
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "_proposalDeposit",
                "type": "uint256"
            }],
            "name": "changeProposalDeposit",
            "outputs": [],
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{
                "name": "",
                "type": "address"
            }],
            "name": "blocked",
            "outputs": [{
                "name": "",
                "type": "uint256",
                "value": "0"
            }],
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{
                "name": "_proposalID",
                "type": "uint256"
            }, {
                "name": "_recipient",
                "type": "address"
            }, {
                "name": "_amount",
                "type": "uint256"
            }, {
                "name": "_transactionData",
                "type": "bytes"
            }],
            "name": "checkProposalCode",
            "outputs": [{
                "name": "_codeChecksOut",
                "type": "bool",
                "value": false
            }],
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "_account",
                "type": "address"
            }],
            "name": "isBlocked",
            "outputs": [{
                "name": "",
                "type": "bool"
            }],
            "type": "function"
        }, {
            "inputs": [{
                "name": "_defaultServiceProvider",
                "type": "address"
            }, {
                "name": "_daoCreator",
                "type": "address"
            }, {
                "name": "_minValue",
                "type": "uint256"
            }, {
                "name": "_closingTime",
                "type": "uint256"
            }, {
                "name": "_privateSale",
                "type": "address"
            }],
            "type": "constructor"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": true,
                "name": "_from",
                "type": "address"
            }, {
                "indexed": true,
                "name": "_to",
                "type": "address"
            }, {
                "indexed": false,
                "name": "_amount",
                "type": "uint256"
            }],
            "name": "Transfer",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": true,
                "name": "_owner",
                "type": "address"
            }, {
                "indexed": true,
                "name": "_spender",
                "type": "address"
            }, {
                "indexed": false,
                "name": "_amount",
                "type": "uint256"
            }],
            "name": "Approval",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }],
            "name": "FundingToDate",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": true,
                "name": "to",
                "type": "address"
            }, {
                "indexed": false,
                "name": "amount",
                "type": "uint256"
            }],
            "name": "SoldToken",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": true,
                "name": "to",
                "type": "address"
            }, {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }],
            "name": "Refund",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": true,
                "name": "proposalID",
                "type": "uint256"
            }, {
                "indexed": false,
                "name": "recipient",
                "type": "address"
            }, {
                "indexed": false,
                "name": "amount",
                "type": "uint256"
            }, {
                "indexed": false,
                "name": "newServiceProvider",
                "type": "bool"
            }, {
                "indexed": false,
                "name": "description",
                "type": "string"
            }],
            "name": "ProposalAdded",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": true,
                "name": "proposalID",
                "type": "uint256"
            }, {
                "indexed": false,
                "name": "position",
                "type": "bool"
            }, {
                "indexed": true,
                "name": "voter",
                "type": "address"
            }],
            "name": "Voted",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": true,
                "name": "proposalID",
                "type": "uint256"
            }, {
                "indexed": false,
                "name": "result",
                "type": "bool"
            }, {
                "indexed": false,
                "name": "quorum",
                "type": "uint256"
            }],
            "name": "ProposalTallied",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": true,
                "name": "_newServiceProvider",
                "type": "address"
            }],
            "name": "NewServiceProvider",
            "type": "event"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": true,
                "name": "_recipient",
                "type": "address"
            }],
            "name": "AllowedRecipientAdded",
            "type": "event"
        }]
    },
};
```

[Roadmap]: https://docs.google.com/document/d/1OAPd_LVQ2q3ktejibDRYDcyiuQAGz79ls9RpErcxV7g/edit#