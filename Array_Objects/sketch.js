let Bubbles = [];

function setup() {
  createCanvas(600, 400);
}

function mouseDragged()
{
  rad = random(10,50);
  b = new Bubble(mouseX,mouseY,rad,random(255),random(255),random(255),5,5);
  Bubbles.push(b);
}

function mousePressed()
{
  rad = random(10,50);
  b = new Bubble(mouseX,mouseY,rad,random(255),random(255),random(255),5,5);
  Bubbles.push(b);
}

function draw() {
  background(0);
  
  for(let i = 0; i < Bubbles.length; i++)
  {
   Bubbles[i].Show();
   Bubbles[i].Move();

  }

}
