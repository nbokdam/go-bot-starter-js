/**
 * Created by nbokdam on 18-5-17.
 */
var Coordinate = require("./coordinate");
var Promise = require("bluebird");

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

field.prototype.getFieldsWithState = function(s, cb) {
    var coordinates = [];
    var stack = this._field.map(function(row, y) {
        return new Promise(function(resolve, reject) {
            var stack = row.map(function(v, x) {
                return new Promise(function(resolve, reject) {
                    if(v===s) {
                        coordinates.push(new Coordinate(x, y));
                        resolve();
                    } else {
                        resolve();
                    }
                })
            });
            return Promise.all(stack).then(resolve).catch(reject);
        });
    });
    Promise.all(stack).then(function(){
        cb(coordinates);
        return Promise.resolve(coordinates);
    }).catch(console.error);
    return coordinates;
}

module.exports = field;
