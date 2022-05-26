function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  for (x = 0; x <= mouseX -30 ;
       x += 20) {
    for (y = 0; y <= height; y += 20){
    fill(random(340-x), random(340-x), random(340-x))
    ellipse(x, y , 20,20)
    stroke(random(340-x), random(340-x), random(340-x))
    line(x, y, mouseX, mouseY)
    }
  }
}