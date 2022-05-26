let x = 0;
let timer;
let counter = 1;
let button;
let interval;
let check = true;

function setup() {
  createCanvas(400, 400);
  timer = createP("0 s");
  
  button = createButton("Timer");
  
  button.mousePressed(startTimer);
}

function startTimer()
{
  if(check)
  {
  interval = setInterval(Time, 1000);
    check = !check;
  }
  button.html("stop");
}

function stopTimer()
{
  clearInterval(interval);
  button.html("start");
}

function Time()
{
  timer.html(counter + " s");
  counter++;
  if(!check)
  {
  button.mousePressed(stopTimer);
    check = !check;
  }
}

function draw() {
  background(0);
  
  stroke(255);
  line(x,0,x,height);
  
  if(x >= width)
  {
    x = 0;
  }
  
  x += width/getFrameRate();
  
}