let sun = {
    xPos : 500,
    yPos : 100,
    xSize : 100,
    ySize : 100,
};

let ground = {
    xPos : 300,
    yPos :400,
    xSize : 50,
    ySize : 100,
    col : 255
};

let ball = {
    xPos : 300,
    yPos : 200,
    xSize : 50,
    ySize : 50,
    xSpeed : 3,
    ySpeed : 2,
};

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(50,170,220);
  rectMode(CENTER);
  ground.xSize = width;
  fill(0,255,60);
  rect(ground.xPos, ground.yPos, ground.xSize, ground.ySize);
  fill(255,255,0);
  ellipse(sun.xPos, sun.yPos, sun.xSize, sun.ySize);
  fill(255,30,50);
  ellipse(ball.xPos, ball.yPos, ball.xSize, ball.ySize);
  if(ball.xPos >= width || ball.xPos < 0)
  {
    ball.xSpeed = ball.xSpeed * (-1);
  }
  if(ball.yPos >= (ground.yPos - ground.ySize/2) || ball.yPos < 0)
  {
        ball.ySpeed = ball.ySpeed * (-1);
  }
  ball.yPos += ball.ySpeed
  ball.xPos += ball.xSpeed;
}