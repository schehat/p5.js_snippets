let p;
let x = 0;
let frame = 30;
let interval = 3000;
let time1 = 3000;
let milliseconds = 0;

function setup() {
  createCanvas(400, 400);
  
}

function paragraphIn()
{
  p = createP("A common text");
  p.style("background-color",color(255,0,0));
  p.style("width", "max-content");
}

function draw() {
  milliseconds = millis();
  print(milliseconds);
  
  if(milliseconds >= time1)
  {
  setTimeout(paragraphIn(),time1);
  time1 += interval;  
  }
  
  
  frameRate(frame);
  
  background(0);
  
  stroke(255);
  line(x,0,x,height);
  
  if(x >= width)
  {
    x = 0;
  }
  x += (width/frame) / 3;
}