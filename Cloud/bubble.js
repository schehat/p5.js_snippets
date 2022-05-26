class Bubble
{
   constructor(x,y,rad,xspeed,yspeed)
  {
    this.x = x;
    this.y = y;
    this.rad = rad;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
    
  }
  
  Show()
  {
    noStroke(255);
    fill(255,10);
    ellipse(this.x,this.y,this.rad * 2);
  }
  
  Move()
  {
    this.x += random(-this.xspeed,this.xspeed);
    this.y += random(-this.yspeed,this.yspeed);
  }
  
}