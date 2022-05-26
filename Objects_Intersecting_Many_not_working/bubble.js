class Bubble
{
   constructor(x,y,rad,xspeed,yspeed)
  {
    this.x = x;
    this.y = y;
    this.rad = rad;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
    this.bright = 0;
  }
  
  Inter(other)
  {
    let d = dist(this.x,this.y,other.x,other.y);
    // divided by 2 due to diameter - not raduis
    return (d < (this.rad + other.rad) / 2);
  }
  
  Change(bright)
  {
    this.brightmess = bright;
    return this.brightess;
  }
  
  Show(bright)
  {
    stroke(255);
    strokeWeight(5);
    ellipse(this.x,this.y,this.rad);
    fill(this.bright);
  }
  
  Move()
  {
    this.x += random(-this.xspeed,this.xspeed);
    this.y += random(-this.yspeed,this.yspeed);
  }
  
}