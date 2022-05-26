let Bubbles = [];

function setup() {
  createCanvas(600, 400);
}

function mouseDragged()
{
  rad = 40;
  x = random(width);
  y = random(height);
  i = new Bubble(mouseX,mouseY,rad,random(255),random(255),random(255),1,1);
  Bubbles.push(i);
}


function draw() {
  background(0);
  
  for(let i = 0; i < Bubbles.length; i++)
  {
   Bubbles[i].Show();
   Bubbles[i].Move();
  }
  
  if(Bubbles.length > 30)
  {
    Bubbles.splice(0,1);
  }

}
