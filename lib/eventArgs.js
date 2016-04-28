"use strict";

// parse event args
module.exports = (event) => {
    const args = event.args;
    let parsed = [];

    for (var arg in args) {
        parsed.push(`>*${arg}:* ${JSON.stringify(args[arg])}`);
    }

    return parsed.join('\n');
}
