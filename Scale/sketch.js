let angle = 0.01;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(0);
  
  push();
  translate(200,200);
  rotate(angle);
  scale(mouseX / 100);
  fill(255);
  rect(0,0,100,50);
  pop();
  angle += 0.1;
}