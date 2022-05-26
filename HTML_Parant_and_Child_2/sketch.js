let happy = ["rainbow", "unicorn", "purple", "love"];
let button;
let r;

function setup() {
  noCanvas();
  button = select("#button");
  button.mousePressed(addItem);
  
}

function addItem()
{
  r = floor(random(0,happy.length));
  let li = createElement("li",happy[r]);
  li.parent("#happylist");
}

function draw() {

}