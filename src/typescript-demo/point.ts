/**
 * Created by kapoor on 27-09-2017.
 */
export class Point2D {
  constructor(private _x?: number, private _y?: number) {
  }

  draw() {
    console.log('x co-ordinate is ' + this._x);
    console.log('y co-ordinate is ' + this._y);
  }
}
