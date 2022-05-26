let canvas;
let h1;
let x = 100;
let y = 100;

function setup() {
  canvas = createCanvas(400, 200);
  h1 = createElement("h1","Waiting");
  canvas.position(200,400);
}

function mousePressed()
{
  createP("Drumm Roll... " + round(random(50)));
  h1.html("Random Numbers Boi");
  
}

function draw() {
  background(220);
  fill(0,0,255);
  rect(x,y,50,50);
  x += random(-5,5);
  h1.position(x,y);
}