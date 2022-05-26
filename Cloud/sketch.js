let Bubbles = [];

function setup() {
  createCanvas(600, 400);
  
  for(let i = 0; i < 1000; i++){
  x = random(width);
  y = random(height);
  r = random(10,40);
  Bubbles[i] = new Bubble(x,y,r,5,5);
  }
}

function draw() {
  background(51,170,229,200);
  
  for(let i = 0; i < Bubbles.length; i++)
  {
   Bubbles[i].Show();
   Bubbles[i].Move();

  }

}
