/**
 * Created by nbokdam on 18-5-17.
 */
var field = function (x, y) {
    var matrix = [];
    for (var i = 0; i < y; i++) {
        matrix[i] = [];
        for (var j = 0; j < x; j++) {
            matrix[i][j] = 0;
        }
    }
    this._field = matrix;
    this._rows = y;
    this._cols = x;
    this.state();
};

field.prototype.update = function (field) {
    var arr = field.split(',');
    const r = this._rows;
    const c = this._cols;
    var matrix = this._field;
    /*    arr.map(function(f, i) {
     //console.log(f, Math.floor(i/r));
     matrix[Math.floor(i/r)][i % r] = f;
     })*/
    for (var i = 0; i < c; i++) {
        for (var j = 0; j < r; j++) {
            this._field[j][i] = parseInt(arr[j * r + i]);
        }
    }
    //console.log(this.state());
};

field.prototype.state = function () {
    return this._field;
};

module.exports = field;
