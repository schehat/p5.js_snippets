let x = 0;
let timer;
let timer2;
let button;

function setup() {
  createCanvas(400, 400);


  timer = createP("0 s");
  timer2 = createP("0 s");

  button = createButton("Timer");
  
  button.mousePressed(startTimer(timer, 1000));
  button.mousePressed(startTimer(timer2, 500));
  
}

function startTimer(elt, wait) {
  
  let counter = 0;
  setInterval(Time, wait);

  function Time() {
    elt.html(counter + " s");
    counter++;
  }
}

function draw() {
  background(0);

  stroke(255);
  line(x, 0, x, height);

  if (x >= width) {
    x = 0;
  }

  x += width / getFrameRate();

}