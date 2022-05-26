let dropzone

function setup() {
  createCanvas(400, 400);
  background(255);
  
  dropzone = select("#dropzone");
  dropzone.dragOver(highlight);
  dropzone.dragLeave(unhighlight);
  dropzone.drop(gotFile, unhighlight);
}

function gotFile(file)
{
  createP(file.name + " " + file.size);
  let img = createImg(file.data);
  img.size(100,100);
}

function highlight()
{
  dropzone.style("background-color", color(0,255,0));
}

function unhighlight()
{
  dropzone.style("background-color", "");
}

function draw() {
  
}