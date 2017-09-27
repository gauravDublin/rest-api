/**
 * Created by kapoor on 27-09-2017.
 */
class Point2D {
  constructor(private _x?: number, private _y?: number) {
  }

  draw() {
    console.log('x co-ordinate is ' + this._x);
    console.log('y co-ordinate is ' + this._y);
  }

  get x() {
    return this._x;
  }

   set X(newX) {
    if(newX < 0) {
      throw new Error('Value cant be less than zero.');
    }
    this._x = newX;
  }
}

let point2 = new Point2D(10, 20);
let x = point2.x;
point2.x = 15; // See this
point2.draw();
