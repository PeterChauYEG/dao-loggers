"use strict";

var DDPClient = require('ddp');
var settings = require('../settings/settings.js');

// initialize ddp client
module.exports = new DDPClient({
    host: settings.daoApi.host,
    port: settings.daoApi.port,
    ssl: false,
    autoReconnect: true,
    autoReconnectTimer: 500,
    maintainCollections: true,
    ddpVersion: '1'
    // useSockJs: true,
    // url: 'ws://dao-api-northwest69.c9users.io:8080'
});
