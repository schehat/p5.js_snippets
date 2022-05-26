function setup() {
  createCanvas(600, 500);
}

function draw() {
  background(220);
  car(255,0,0,200,100);
  car(0,0,255,200,250);
  car(0,255,0,200,400);
}
function car(r,g,b,x,y)
{
  fill(r,g,b);
  rect(x,y,200,40);
  fill(0);
  ellipse(x+50,y+40,25,25);
  ellipse(x+150,y+40,25,25);
  rect(x+50,y-30,100,30);
}