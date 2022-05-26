let rec = {
    xPos : 300,
    yPos : 200
};

let extraCanvas;

function setup() {
  createCanvas(600, 400);
  background(0);
  extraCanvas = createGraphics(600,400);
  extraCanvas.clear();
}

function draw() {
  
  // trails
  background(0);
  rectMode(CENTER);
  fill(255,0,0);
  rec.xPos += random(-5,5);
  rec.yPos += random(-5,5)
  
  //no trails
  if(mouseIsPressed){
  extraCanvas.fill(200, 100);
  extraCanvas.noStroke();
  extraCanvas.ellipse(mouseX, mouseY, 50,50);
     
     }
  
  image(extraCanvas,0,0);
  
  noStroke();
  rect(rec.xPos, rec.yPos, 20,20);
}
