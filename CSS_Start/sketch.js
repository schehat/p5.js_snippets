function setup() {
  h1 = createElement("h1","Waiting");
  bgColor = 220;
  
  h1.mouseOver(overpara);
  h1.mouseOut(outpara);
}

function overpara()
{
  h1.style("background-color", "green");
}

function outpara()
{
  h1.style("background-color", "pink");
}

function draw() {

}