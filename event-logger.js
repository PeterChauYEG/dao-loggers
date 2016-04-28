"use strict";

var contract = require('./lib/contract.js');
var ddpclient = require('./lib/ddp.js');

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
    const events = contract.allEvents();

    // watch for events
    events.watch((err, res) => {
        if (err) {
            return console.log(err);
        }

        console.log('Watching Smart Contract Events');

        if (res) {
            // write event to meteor
            ddpclient.call('event.insert', [res], (err, result) => {
                console.log(`Called Event Insert. ${result}`);
            });
        }
    });
});
