let circ = {
    xPos : 0,
    yPos : 0,
    size : 0
};

let col = {
    R : 0,
    G : 0,
    B : 0,
    alph : 0
};


function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {
  circ.xPos = random(0,width);
  circ.yPos = random(0,height);
  col.R = random(100,255);
  col.B = random(100,200);
  col.alph = random(100,200);
  circ.size = random(15,25);
  noStroke();
  fill(col.R, col.G, col.B, col.alph);
  circle(circ.xPos, circ.yPos, circ.size, circ.size);
}