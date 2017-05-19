/**
 * Created by nbokdam on 18-5-17.
 */
/**
 * Whenever a move is requested, this function is called.
 * @param time limit to do a move
 * @param game the current game (use game.state() to get all info)
 * @param move callback: function (x, y, pass). To pass, use move(null, null, true), else use move(x, y)
 */
module.exports = function (time, game, move) {
    //console.error(game.state());

    move(null, null, true);
};