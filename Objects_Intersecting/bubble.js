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
  
  inter(other)
  {
    let d = dist(this.x,this.y,other.x,other.y);
    // divided by 2 due to diameter not raduis
    return (d < (this.rad + other.rad) / 2);
  }
  
  Show()
  {
    stroke(255);
    strokeWeight(5);
    noFill()
    ellipse(this.x,this.y,this.rad);
  }
  
  Move()
  {
    this.x += random(-this.xspeed,this.xspeed);
    this.y += random(-this.yspeed,this.yspeed);
  }
  
}