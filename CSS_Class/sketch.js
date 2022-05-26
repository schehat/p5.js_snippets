function setup() {

  for(let i = 0; i < 30; i++)
  {
    let p = createA("https://www.google.com/","apple");
    let x = floor(random(windowWidth));
    let y = floor(random(windowHeight));
    p.position(x,y);
    p.class("apple");
  }
  
  for(let i = 0; i < 30; i++)
  {
    let p = createP("blueberry");
    let x = floor(random(windowWidth));
    let y = floor(random(windowHeight));
    p.position(x,y);
    p.class("blueberry");
    p.mousePressed(becomeApple);
  }
  
}

function becomeApple()
{
  this.removeClass("blueberry");
  this.class("apple");
  
}

function draw() {
 
}