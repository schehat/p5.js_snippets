let a = 5;
let b = 6;
let c = 6;
let arr = [];

function setup() {
  createCanvas(400, 400);
  
  // usually not giving arguments like that but console does not work
  let val = sum(a,b,c);
  console.log(val);
  
  arr = [a,b,c];
  val = sum(arr);
  console.log(val);
  
}

function sum(arr)
{
  if(arr instanceof Array)
  {
    let val = 0;
    for(let i = 0; i < arr.length; i++)
  {
    val += arr[i];
  }
  return val;
  }
  
  let val = 0;
  for(let i = 0; i < arguments.length; i++)
  {
    val += arguments[i];
  }
  return val;
}

function draw() {
  background(220);
}