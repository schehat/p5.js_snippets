let Bubble1, Bubble2;

function setup() {
  createCanvas(600, 400);
  Bubble1 = new Bubble(100,200,20,random(255),random(255),random(255),5,5);
  Bubble2 = new Bubble(200,300,40,random(255),random(255),random(255),5,5);
}

function draw() {
  background(0);
  Bubble1.Show();
  Bubble2.Show();
  Bubble1.Move();
  Bubble2.Move();
}
