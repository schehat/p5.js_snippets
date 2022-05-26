let canvas;

function setup() {
  canvas = createCanvas(400, 400);
  canvas.parent("#canvasp");
}

function draw() {
  background(220);
  
  fill(random(255));
  circle(200,200,random(100));
}