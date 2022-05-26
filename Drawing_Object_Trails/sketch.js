let particle;
let x;
let y;
let yspeed;
let gravity;

function setup() {
  createCanvas(600, 600);
  particle = new Particle(100,100);
}

function draw() {
  background(220);
  particle.Update();
  particle.Show();
}  

class Particle
  
{
  constructor(x,y)
  {
  this.x = x;
  this.y = y;
  this.yspeed = 0;
  this.gravity = 0.1;
  }
  
  Update(){
    
    this.y += this.yspeed;
    this.yspeed += gravity;
    
    if(this.y >= height)
    {
      this.y = height;
      this.yspeed *= 0.9;
    }
    
  }
    Show()
    {
      stroke(0);
      fill(0,150);
      ellipse(this.x, this.y, 24,24);
    
    }
    
  }