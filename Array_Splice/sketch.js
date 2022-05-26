let Bubbles = [];

function setup() {
  createCanvas(600, 400);
  for(let i = 0; i <20; i++){
  rad = random(20,70);
  x = random(width);
  y = random(height);
  Bubbles[i] = new Bubble(x,y,rad,random(255),random(255),random(255),5,5);
  }
}

function mousePressed()
{
  for(let i = Bubbles.length - 1; i >= 0; i--)
  {
  if(Bubbles[i].Clicked(mouseX,mouseY))
    {
      Bubbles.splice(i,1);
    }
  }
  
}

function draw() {
  background(0);
  
  for(let i = 0; i < Bubbles.length; i++)
  {
   Bubbles[i].Show();
   Bubbles[i].Move();
  }

}
