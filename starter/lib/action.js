/**
 * Created by nbokdam on 18-5-17.
 */

module.exports = function (action, game, bot) {
    bot(action, game, function (x, y, pass) {
        if (pass) {
            console.log('pass')
        } else {
            console.log('place_move', x, y);
        }
    });
};