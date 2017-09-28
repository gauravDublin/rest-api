/*
function log(message) {
  console.log(message);
}

var msg = "testing";
log(msg);
*/
/*
function log() {
  for(let i=0; i<5; i++) {
    console.log(i);
  }

  console.log('Finally:' + i);
}

log();
*/
/*let an: number;
an = 4;
an = '';

let an2: any;
an2 = 4;
an2 = '';*/
var a;
var b;
var c;
var d;
var e = [1, 2, 3, 4];
var f = [a, 'test', 4, 3.0];
var colorRed = 0;
var colorGreen = 1;
var colorBlue = 2;
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["blue"] = 2] = "blue";
})(color || (color = {}));
;
var backgroundCol = color.blue; // 0
