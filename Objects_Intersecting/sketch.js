let bubble1, bubble2;

function setup() {
  createCanvas(600, 400);
  
  bubble1 = new Bubble(200,200,100,5,5);
  bubble2 = new Bubble(400,200,50,5,5);
}

function draw() {
  background(0);
  
  if(bubble2.inter(bubble1))
  {
    background(100,30,200);
  }
  
   bubble1.Show();
   bubble2.Show();
   bubble1.Move();
   bubble2.x = mouseX;
   bubble2.y = mouseY;
  
}
