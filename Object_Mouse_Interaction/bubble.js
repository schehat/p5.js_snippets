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
  
  Clicked(mx,my)
  {
    this.dis = dist(mx,my,this.x,this.y);
    if(this.dis < this.rad)
    {
      console.log(this.dis);
      this.r = random(255);
      this.g = random(255);
      this.b = random(255);
    }
  }
  
  Show()
  {
    stroke(255);
    strokeWeight(5);
    fill(this.r,this.g,this.b);
    if(this.dis < this.rad)
    {
    rect(this.x,this.y,this.rad,this.rad);
    }
    else{
    ellipse(this.x,this.y,this.rad);
    }
  }
  
  Move()
  {
    this.x += random(-this.xspeed,this.xspeed);
    this.y += random(-this.yspeed,this.yspeed);
  }
  
}