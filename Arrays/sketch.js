let shapes = [20,30,40,50];
let i = 0;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  frameRate(1);
  background(0);
  noFill();
  strokeWeight(1);
  stroke(255);
  
  for(let x = 100; x <= 400; x += 100)
  {
    noFill();
    ellipse(x,300,shapes[i]);
    i++;
    if(i > shapes.length)
    {
      i = 0;
    }
  }
  
  for(let x = 100; x <= 400; x += 100)
  {
    ellipse(x,200,shapes[i]);
    i++;
    if(i > shapes.length)
    {
      i = 0;
    }
  }
  
  for(let i = 0; i < shapes.length; i++)
  {
    ellipse(500,300,shapes[i]);
  }
}