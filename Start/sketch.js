function setup() {
  createCanvas(400, 400);
  background(250,200,0);
}

function draw() {
  
  rectMode(CENTER);
  fill(0,0,255);
  stroke(255,0,0);
  strokeWeight(2);
  rect(200,200,100,100);
  
  fill(255,0,0);
  stroke(0,0,255);
  strokeWeight(2);
  ellipse(200,100,50,50);
  ellipse(mouseX,50,50,50);
  ellipse(mouseX,350,50,50);
  ellipse(50,mouseY,50,50);
  ellipse(350,mouseY,50,50);
  
  stroke(255,0,0);
  strokeWeight(5);
  line(150,300,250,300);
  
  triangle(75,250,100,100,50,100);

}

function mousePressed()
{
    background(250,200,0);
}