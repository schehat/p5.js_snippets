let rectUP = {
  xUP : 300,
  yUP : 200,
  xDOWN : 300,
  R : 0,
  G : 255,
  B : 0,
  alpha : 255
};

let rectDOWN = {
  xUP : 300,
  xDOWN : 300,
  yDOWN : 200,
  R : 255,
  G : 0,
  B : 0,
  alpha : 255
};

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(170, 0, 240);

  rectMode(CENTER)
  fill(rectUP.R, rectUP.G, rectUP.B, rectUP.alpha);
  rect(rectUP.xUP, rectUP.yUP, 100, 100);
  rect(rectUP.xDOWN, rectUP.yUP, 100, 100);
  fill(rectDOWN.R, rectDOWN.G, rectDOWN.B, rectDOWN.alpha);
  rect(rectDOWN.xUP, rectDOWN.yDOWN, 100, 100);
  rect(rectDOWN.xDOWN, rectDOWN.yDOWN, 100, 100);

  rectUP.xUP++;
  rectUP.yUP++;
  rectUP.xDOWN--;
  rectDOWN.xUP++;
  rectDOWN.xDOWN--;
  rectDOWN.yDOWN--;
  rectUP.R += 5;
  rectUP.G--;
  rectUP.B += 3;
  rectDOWN.R-- ;
  rectDOWN.G+= 5;
  rectDOWN.B += 3;
  rectUP.alpha--;
  rectDOWN.alpha--;

}