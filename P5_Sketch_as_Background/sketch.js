let canvas;
let p;

function setup() {
  p = createP("This is a common text about nothing");
  p.style("background-color",color(120,0,220));
  p.style("width", "windowWidth");
  p.style("text-align", "center");
  p.style("border-style", "dashed");
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style("z-index", -1);
  background(175);
} 

function windwosResized()
{
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {

  if(mouseIsPressed)
  {
    line(pmouseX,pmouseY,mouseX,mouseY);
  }
  
} 