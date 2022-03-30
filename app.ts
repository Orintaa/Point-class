class Point {   
    constructor(
        private _pointX: number,
        private _pointY: number
        ) {
    }

    get pointX(){
        return this._pointX;
    }

    get pointY(){
        return this._pointY;
    }

    set pointX(x:number){
        this._pointX = x;
    }

    set pointY(y:number){
        this._pointY = y;
    }

    public toString():string {
        return '['+this._pointX+';'+this._pointY+']';
    }

    public distanceFromOrigin = () => {
        return Math.sqrt(this._pointX*this._pointX+this._pointY*this._pointY); //arba this._pointX ** 2 galima uzrasyti
    }

    public translate = (dx:number, dy:number) => {
            this._pointX += dx;
            this._pointY += dy;
    }

    public distance = (p:Point) => {
        return Math.sqrt((p._pointX - this._pointX)**2 +
        (p._pointY - this._pointY)**2)
    }

}

const o1 = new Point(5, 5);
const o2 = new Point(2,4);
console.log(o1.distanceFromOrigin());

// console.log(o1.toString());
// o1.translate(2, 1)
console.log(o1.toString());
// o2.translate(2, 3)
// console.log(o2.toString());
// o1.distance(o2);
console.log(o1.distance(o2));
