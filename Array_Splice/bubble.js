class Bubble
{
   constructor(x,y,rad,r,g,b,xspeed,yspeed)
  {
    this.x = x;
    this.y = y;
    this.rad = rad;
    this.r = r;
    this.g = g;
    this.b = b;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
    this.dis;
  }
  
  Clicked(px,py)
  {
    this.dis = dist(px,py,this.x,this.y);
    if(this.dis < this.rad)
    {
      console.log(this.dis);
      return true;
    }
    else{
    return false;
    }
  }
  
  Show()
  {
    stroke(255);
    strokeWeight(5);
    fill(this.r,this.g,this.b);
    ellipse(this.x,this.y,this.rad);
  }
  
  Move()
  {
    this.x += random(-this.xspeed,this.xspeed);
    this.y += random(-this.yspeed,this.yspeed);
  }
  
}