/**
 * Created by nbokdam on 18-5-17.
 */
var Field = require('./field');


var game = function (settings) {
    this._settings = settings || {};
    this._game = {};
    this._players = {};
};

game.prototype.update = function (params) {
    //console.log(params);
    if (params[0] === 'game') {
        this._game[params[1]] = params[2];
        if (params[1] === 'field') {
            this._field.update(params[2]);
        }
    }
    else {
        this._players[params[0]][params[1]] = params[2];
    }
};

game.prototype.set = function (params) {
    var players = this._players;
    this._settings[params[0]] = params[1];
    if (params[0] === 'player_names') {
        const names = params[1].split(',');
        names.map(function (name) {
            players[name] = {
                points: 0,
                last_move: null
            }
        })
    }

    if (this._settings['field_width'] && this._settings['field_height']) {
        this._field = new Field(this._settings['field_width'], this._settings['field_height']);
    }
};

game.prototype.state = function () {
    return {
        players: this._players,
        game: this._game,
        settings: this._settings,
        field: this._field.state()
    }
};

game.prototype.fieldsWithState = function(s, cb) {
    return this._field.getFieldsWithState(s, cb);
}

module.exports = game;