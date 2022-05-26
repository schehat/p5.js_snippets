let rect1 ={
    xPos : 100,
    yPos : 100,
}
let rect2 ={
    xPos : 100,
    yPos : 300,
}
let rect3 ={
    xPos : 500,
    yPos : 100,
}
let rect4 ={
    xPos : 500,
    yPos : 300,
}
let col;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  rectMode(CENTER);
  col = map(mouseX,0,600,0,255);
  background(col);
  fill(col);
  col = map(mouseX,0,600,255,0);
  stroke(col);
  rect(rect3.xPos, rect3.yPos, 50,50);
  rect(rect4.xPos, rect4.yPos, 50,50);
  col = map(mouseX,0,600,255,0);
  fill(col);
  rect(rect1.xPos, rect1.yPos, 50,50);
  rect(rect2.xPos, rect2.yPos, 50,50);
  
}