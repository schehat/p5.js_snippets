let sketch = function(p)
{
  p.x = 100;
  p.y = 100;
  p.setup = function()
  {
    p.createCanvas(300,300);
    p.background(100);
  }
  p.draw = function()
  {
    p.fill(255,0,0,100);
    p.noStroke();
    p.ellipse(p.x,p.y,30,30);
    
    p.x = p.x + p.random(-10,10);
    p.y = p.y + p.random(-10,10);
  }
}

let myp5_1 = new p5(sketch);
let myp5_2 = new p5(sketch);

function resetBackground()
{
  myp5_1.x = myp5_1.width/2;
  myp5_1.y = myp5_1.height/2;
  myp5_1.background(100);
}

setInterval(resetBackground, 3000);