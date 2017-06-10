/**
 * Created by nbokdam on 10-6-2017.
 */
var Coordinate = function(x, y) {
    this._x = x;
    this._y = y;
}

Coordinate.prototype.get = function() {
    return {
        x: this._x,
        y: this._y
    }
}

module.exports = Coordinate;