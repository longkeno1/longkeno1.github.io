let y1 = 0;
let y2 = 0;
let y3 = 0;
let y4 = 0;
let y5 = 0;
let y6 = 0;
let y7 = 0;
let y8 = 0;

let x1 = 0;
let x2 = 0;
let x3 = 0;
let x4 = 0;
let x5 = 0;
let x6 = 0;
let x7 = 0;
let x8 = 0;

let angle = 0;
let angle2 = 0;
let angle3 = 0;
let angle4 = 0;
let angle5 = 0;
let angle6 = 0;
let angle7 = 0;
let angle8 = 0;

let r = 120;
let r2 = 170;
let r3 = 220;
let r4 = 270;
let r5 = 320;
let r6 = 370;
let r7 = 420;
let r8 = 470;
function setup() {
  createCanvas(1000, 1000);

  background("black");
} //setup
function draw() {
  background("black");

  noFill();
  stroke("lightblue");
  ellipse(500, 500, r * 2, r * 2);
  ellipse(500, 500, r2 * 2, r2 * 2);
  ellipse(500, 500, r3 * 2, r3 * 2);
  ellipse(500, 500, r4 * 2, r4 * 2);
  ellipse(500, 500, r5 * 2, r5 * 2);
  ellipse(500, 500, r6 * 2, r6 * 2);
  ellipse(500, 500, r7 * 2, r7 * 2);
  ellipse(500, 500, r8 * 2, r8 * 2);

  fill("yellow");
  stroke("orange");
  arc(500, 500, 200, 200, 0, 2 * PI);

  //mercury
  fill("gray");
  stroke("gray");
  circle(x1, y1, 8);
  angle += 0.0415;
  x1 = r * cos(angle) + 500;
  y1 = r * sin(angle) + 500;

  //venus
  fill("yellow");
  stroke("orange");
  circle(x2, y2, 19);
  angle2 += 0.0163;
  x2 = r2 * cos(angle2) + 500;
  y2 = r2 * sin(angle2) + 500;

  //earth
  fill("blue");
  stroke("green");
  circle(x3, y3, 20);
  angle3 += 0.01;
  x3 = r3 * cos(angle3) + 500;
  y3 = r3 * sin(angle3) + 500;

  //a good enough moon 
  fill("gray");
  stroke("lightblue");
  circle(x3+10, y3+10, 5);

  //mars
  fill("red");
  stroke("orange");
  circle(x4, y4, 10);
  angle4 += 0.0053;
  x4 = r4 * cos(angle4) + 500;
  y4 = r4 * sin(angle4) + 500;

  //Jupitar
  fill("orange");
  stroke("white");
  circle(x5, y5, 60);
  angle5 += 0.00084;
  x5 = r5 * cos(angle5) + 500;
  y5 = r5 * sin(angle5) + 500;

  //saturn
  fill("brown");
  stroke("yellow");
  circle(x6, y6, 50);
  angle6 += 0.00033;
  x6 = r6 * cos(angle6) + 500;
  y6 = r6 * sin(angle6) + 500;
  
  //rings of satern trust :)
  noFill()
  stroke("pink")
  ellipse(x6, y6, 60, 60);
    noFill()
  stroke("pink")
  ellipse(x6, y6, 61, 61);  
  stroke("gray")
  ellipse(x6, y6, 62, 62);
  stroke("pink")
  ellipse(x6, y6, 63, 63);
  stroke("white")
  ellipse(x6, y6, 64, 64);
  stroke("pink")
  ellipse(x6, y6, 65, 65);
  stroke("gray")
  ellipse(x6, y6, 66, 66);
  stroke("pink")
  ellipse(x6, y6, 67, 67);
  

  //uranus
  fill("lightblue");
  stroke("cyan");
  circle(x7, y7, 40);
  angle7 += 0.00012;
  x7 = r7 * cos(angle7) + 500;
  y7 = r7 * sin(angle7) + 500;

  //neptune
  fill("blue");
  stroke("cyan");
  circle(x8, y8, 41);
  angle8 += 0.000067;
  x8 = r8 * cos(angle8) + 500;
  y8 = r8 * sin(angle8) + 500;
}
