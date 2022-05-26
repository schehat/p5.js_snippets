let sliders = [];
let x = 0;
let angle = 0;

function setup() {
  noCanvas();
  for(let i = 0; i < 102; i++)
  {
  sliders[i] = createSlider(0,255,50);
  }
}

function draw() {
  
  let offset = 0;
  
  for(let i = 0; i < sliders.length; i++)
  {
  x = map(sin(angle + offset),-1,1,0,255);
  sliders[i].value(x);
  offset += 0.03;
  }
  
  angle += 0.1;
  
}