let vertices = [];
let check = true;

function setup() {
  createCanvas(600, 600);
  resetSketch();
  let button = createButton("reset");
  button.mousePressed(resetSketch);
  
}

function resetSketch()
{
    for(let i = 0; i < 100; i++)
  {
    let points = createVector(random(width), random(height));
    vertices.splice(0, vertices.length);
  }
  
  for(let i = 0; i < 100; i++)
  {
    let points = createVector(random(width), random(height));
    vertices.push(points);
  }
}

function mousePressed()
{
  let v = createVector(mouseX, mouseY);
  vertices.push(v);
}

function draw() {
  background(100);
  
  let reached = [];
  let unreached = [];
  
  for(let i = 0; i < vertices.length; i++)
  {
    unreached.push(vertices[i]);
  }
  
  reached.push(vertices[0]);
  unreached.splice(0,1);
                   
  while (unreached.length > 0)
  {
    let record = Infinity;
    let rIndex;
    let uIndex;
    
    for(let i = 0; i < reached.length; i++)
    {
      for(let j = 0; j < unreached.length; j++)
      {
        let v1 = reached[i];
        let v2 = unreached[j];
        
        let d = dist(v1.x, v1.y, v2.x, v2.y);
        
        if(d < record)
        {
          record = d;
          rIndex = i;
          uIndex = j;
        }
        
      }
      
    }
    
    line(reached[rIndex].x, reached[rIndex].y, unreached[uIndex].x, unreached[uIndex].y);
    
    reached.push(unreached[uIndex]);
    unreached.splice(uIndex,1);
    
  }
  
  for(let i = 0; i < vertices.length; i++)
  {
  fill(255);
  stroke(225);
  ellipse(vertices[i].x, vertices[i].y, 16,16);
  }
}