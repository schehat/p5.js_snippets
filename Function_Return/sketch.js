function setup() {
  createCanvas(400, 400);
  bmi = bmi(1.70,80);
  print(bmi + " BMI");
  miles = miles(20);
  print(miles + " Miles");
}

function bmi(height, weight)
{
  return weight/(height*height);
}

function miles(km)
{
   return km / 1.609; 
}

function draw() {
  background(220);
}