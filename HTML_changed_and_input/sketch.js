let h1;
let h2;
let textbox;
let slider;

function setup() {
  
  textbox = createInput("Use Me");
  slider = createSlider(30,80,50);
  
    h1 = createElement("h1", "Title");
  h2 = createElement("h1", "Title");
  
  textbox.changed(updateText);
  textbox.input(updateNow)
  
  slider.input(updateSize);
}

function updateSize()
{
  h2.style("font-size",slider.value() + "pt");
}

function updateText()
{
  h1.html(textbox.value());
}

function updateNow()
{
  h2.html(textbox.value());
}

function draw() {
  
}