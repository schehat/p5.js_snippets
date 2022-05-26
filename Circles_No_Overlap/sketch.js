let circles = [];
let protection = 0;

function setup() {
  createCanvas(600, 600);
  
  while(circles.length < 1000)
  {
    
    let circle = {
    r : random(10,40),
    x : random(width),
    y : random(height)
    };
  
  let overlapping = false;
  
  for(let j = 0; j < circles.length; j++)
  {
   let other = circles[j];
   let d = dist(circle.x,circle.y,other.x,other.y);
   if(d < circle.r + other.r)
   {
     overlapping = true;
     break;
   }
  }
    if(!overlapping)
    {
      circles.push(circle);
    }
    
    protection++;
    
    if(protection > 100000)
    {
      break;
    }
  
}
  
  for(i = 0; i < circles.length; i++)
  {
    fill(255,0,60,100);
    noStroke();
    ellipse(circles[i].x,circles[i].y,circles[i].r*2,circles[i].r*2);
  }

}

function draw() {
  
}