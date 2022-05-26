let paragraphs;

function setup() {

  paragraphs = selectAll("p");
  for(let i = 0; i < paragraphs.length; i++)
  {
    paragraphs[i].mouseOver(highlight);
    paragraphs[i].mouseOut(unhighlight);
  }
  
}

function highlight()
{
  let paddin = this.style("padding","" + 10);
  this.style("background-color", "white");
  this.style("padding","+paddin");
  
}

function unhighlight()
{
  this.style("background-color", "");
  this.style("padding","");
  
}

function draw() {
  
}