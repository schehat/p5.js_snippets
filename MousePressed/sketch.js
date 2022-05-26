let rec = {
  xPos: 250,
  yPos: 150,
  xSize: 100,
  ySize: 100,
  xSpeed: 3,
  ySpeed: 3
};

let on = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  noFill();
  stroke(255);
  if (mouseX >= rec.xPos && rec.xPos + rec.xSize >= mouseX && mouseY >= rec.yPos && rec.yPos + rec.ySize >= mouseY) {
    fill(200, 0, 200);
    if (on) //mouseIsPressed possible
    {
      background(0);
    } else {
      background(0, 200, 200);
    }
  }
  if (rec.xPos + rec.xSize > width || rec.xPos < 0) {
    rec.xSpeed = -rec.xSpeed 
  }
  rec.xPos += rec.xSpeed;
  if (rec.yPos + rec.ySize > height || rec.yPos < 0) {
    rec.ySpeed = -rec.ySpeed
  }
  rec.yPos += rec.ySpeed;
  rect(rec.xPos, rec.yPos, rec.xSize, rec.ySize);
}

function mousePressed() {
  on = !on;
}