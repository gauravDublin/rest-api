/**
 * Created by kapoor on 27-09-2017.
 */
class Point2D {
  constructor(private x?: number, private y?: number) {
  }

  draw() {
    console.log('x co-ordinate is ' + this.x);
    console.log('y co-ordinate is ' + this.y);
  }

}

let point2 = new Point2D(10, 20);
point2.draw();
