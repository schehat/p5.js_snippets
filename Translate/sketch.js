function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  translate(mouseX,mouseY);
  
  fill(255);
  
  rect(0,0,100,50);
  rect(150,50,100,50);
}