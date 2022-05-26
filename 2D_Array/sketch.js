let column = 30;
let row = 10;
let colors = [];

function setup() {
  createCanvas(600, 300);
  
  for(let i = 0; i < column; i++)
  {
    colors[i] = [];
    for(let j = 0; j < row; j++)
    {
      colors[i][j] = (i + j) * 10;
    }
  }
}

function draw() {
  background(220);
  
  for(let i = 0; i < column; i++)
  {
    for(let j = 0; j < row; j++)
    {
      let x = i * 30;
      let y = j * 30;
      fill(colors[i] [j]);
      stroke(0);
      rect(x,y,30,30);
    }
  }
}