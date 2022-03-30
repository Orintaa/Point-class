"use strict";
class Point {
    constructor(_pointX, _pointY) {
        this._pointX = _pointX;
        this._pointY = _pointY;
        this.distanceFromOrigin = (p) => {
            return Math.sqrt(p._pointX * p._pointX + p._pointY * p._pointY);
        };
        this.translate = (dx, dy) => {
            this._pointX += dx;
            this._pointY += dy;
        };
        this.distance = (p) => {
            return Math.sqrt((this._pointX - p._pointX) * (this._pointX - p._pointX) +
                (this._pointY - p._pointY) * (this._pointY - p._pointY));
        };
    }
    get pointX() {
        return this._pointX;
    }
    get pointY() {
        return this._pointY;
    }
    set pointX(x) {
        this._pointX = x;
    }
    set pointY(y) {
        this._pointY = y;
    }
    toString() {
        return '[' + this.pointX + ';' + this._pointY + ']';
    }
}
const o1 = new Point(5, 3);
const o2 = new Point(2, 4);
// console.log(o1.distanceFromOrigin());
// console.log(o1.toString());
// o1.translate(2, 1)
console.log(o1.toString());
// o2.translate(2, 3)
// console.log(o2.toString());
// o1.distance(o2);
// console.log(o1.distance(o2));
