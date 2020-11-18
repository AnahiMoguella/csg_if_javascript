function setup() {
  canvas = createCanvas(450,450);
  background('cornflowerblue');
  canvas.parent('processing');
  noLoop();
}

function draw() {
 noStroke();
 fill('tan');
 rect(0,0,400,400);
 fill('peru');
 rect(0,0,150,150);
}
