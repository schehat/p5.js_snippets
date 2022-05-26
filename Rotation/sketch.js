let angle = 0.01;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(0);
  
  push()
  translate(100,100);
  rotate(angle);
  fill(255,0,0);
  ellipse(0,0,100,50);
  pop();
  
  push()
  translate(300,300);
  rotate(angle * 3);
  fill(0,0,255);
  ellipse(0,0,100,50);
  pop();
  
  angle += 0.05
}