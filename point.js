"use strict";
exports.__esModule = true;
exports.PointB = void 0;
var PointB = /** @class */ (function () {
    function PointB(x, y) {
        this.x = x;
        this.y = y;
    }
    PointB.prototype.draw = function () {
        console.log("X = " + this.x + " Y = " + this.y);
    };
    return PointB;
}());
exports.PointB = PointB;
