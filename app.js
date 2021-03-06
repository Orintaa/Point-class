"use strict";
class Point {
    constructor(_pointX, _pointY) {
        this._pointX = _pointX;
        this._pointY = _pointY;
        this.distanceFromOrigin = () => {
            return Math.sqrt(this._pointX * this._pointX + this._pointY * this._pointY); //arba this._pointX ** 2 galima uzrasyti
        };
        this.translate = (dx, dy) => {
            this._pointX += dx;
            this._pointY += dy;
        };
        this.distance = (p) => {
            return Math.sqrt((p._pointX - this._pointX) ** 2 +
                (p._pointY - this._pointY) ** 2);
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
const o1 = new Point(5, 5);
const o2 = new Point(2, 4);
console.log(o1.distanceFromOrigin());
// console.log(o1.toString());
// o1.translate(2, 1)
console.log(o1.toString());
// o2.translate(2, 3)
// console.log(o2.toString());
// o1.distance(o2);
console.log(o1.distance(o2));
