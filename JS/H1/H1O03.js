function setup() {
  canvas = createCanvas(450,450);
  background('white');
  canvas.parent('processing');
  noLoop();
  colorMode(RGB,255,255,255,1);  
}

function draw() {
  noStroke();
  fill(0,0,255,0.3);
  ('red');
  rect(0,150,450,150);
  (0,128,0);
  rect(0,0,150,450);
  (0,0,225);  
  rect(75,0,375,450);

  ellipse(450,225,450)

  beginShape();
  vertex(225,0);
  vertex(225,225);
}