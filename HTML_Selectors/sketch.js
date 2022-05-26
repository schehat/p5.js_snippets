let button;
let buttonST;
let paragraph;

function setup() {
  
  paragraph = select("#first");
  paragraph.mouseOver(pBG);
  
  button = createButton("click me");
  buttonST = select(".second");
  button.mousePressed(bBG);
  
}

function pBG()
{
  paragraph.style("background-color" , color(random(255),random(255),random(255)));
}

function bBG()
{
  buttonST.style("background-color" , color(random(255),random(255),random(255)));
}

function draw() {
}