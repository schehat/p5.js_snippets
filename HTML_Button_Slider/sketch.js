let canvas;
let h1;
let x = 100;
let y = 100;
let bgColor;
let button;
let slider;
let input;
let name;

function setup() {
  canvas = createCanvas(400, 200);
  h1 = createElement("h1","Waiting");
  canvas.position(200,200);
  bgColor = 220;
  button = createButton("Click Me");
  button.mousePressed(changeColor)
  slider = createSlider(10,100,50);
  input = createInput("Type something");
  name = createP("Type Your Name");
  
  name.mouseOver(overpara);
  name.mouseOut(outpara);
  
  input.changed(textUpdate);
}

function textUpdate()
{
  name.html(input.value());
}

function overpara()
{
  name.html("you are over me")
}

function outpara()
{
  name.html("you are mouse is out")
}

function changeColor()
{
  bgColor = color(random(250), random(250),random(250));
}

function mousePressed()
{
  createP("Drumm Roll... " + round(random(50)));
  h1.html("Random Numbers Boi");
  
}

function draw() {
  background(bgColor);
  fill(0,0,255);
  rect(x,y,slider.value(),slider.value());
  x += random(-5,5);
  h1.position(x,400);
  text(input.value(), 10,10);
  //name.html(input.value());
}