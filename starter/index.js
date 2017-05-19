/**
 * Created by nbokdam on 18-5-17.
 */
var lib = require('./lib');
const readline = require('readline');
var Game = require('./game');

var init = function (bot) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: null
    });

    var game = new Game();

    rl.on('line', function (line) {
        var input = line.split(' ');
        const action = input[0];
        const params = input.slice(1);
        try {
            return lib[action](params, game, bot);
        } catch (e) {
            //console.error(e);
        }
    })
};

module.exports = init;
