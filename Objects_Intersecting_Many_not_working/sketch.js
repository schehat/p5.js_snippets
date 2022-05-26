let bubbles = [];

function setup() {
  createCanvas(600, 400);
  for(let i = 0; i < 30; i++)
  {
    x = random(600);
    y = random(400);
    r = random(30,60);
    bubbles[i] = new Bubble(x,y,r,5,5);
  }
}

function draw() {
  background(0);
  
  for(let b of bubbles)
  {
    b.Show();
    b.Move();
    let overlapping = false;
    
    for(let other of bubbles)
    {
      if(b != other && b.Inter(other))
         {
           overlapping = true;
         }  
      }
      
    if(overlapping == true)
    {
      fill(200);
    }
    else
    {
      fill(0);
    }
    }
  
}
