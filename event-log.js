"use strict";

var contract = require('./lib/contract.js');
var ddpclient = require('./lib/ddp.js');
var settings = require('./settings/settings.js');

// connect to Meteor server
ddpclient.connect((err, wasReconnect) => {
    if (err) {
        return console.log('DDP connection error: ' + err);
    }

    if (wasReconnect) {
        console.log('Reestablishment of a connection.');
    }

    console.log('Connected!');

    // focus scope of event log
    const events = contract.allEvents({
        fromBlock: settings.contract.blockStart,
        toBlock: 'latest'
    });

    // get all of this smart contract's events
    events.get((err, res) => {
        if (err) {
            return console.log(`Error retrieving past logs: ${err}`);
        }

        console.log('Getting All Smart Contract Events');
        if (res) {
            // write event to meteor's database
            for (var log in res) {
                ddpclient.call('event.insert', [res[log]], (err, result) => {
                    console.log(`Called Event Insert. ${result}`);
                });
            }
        }
    });
});
