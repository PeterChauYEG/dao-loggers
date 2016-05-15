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

[Roadmap]: https://docs.google.com/document/d/1OAPd_LVQ2q3ktejibDRYDcyiuQAGz79ls9RpErcxV7g/edit#