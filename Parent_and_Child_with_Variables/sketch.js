let p;
let images = [];

function setup() {
   noCanvas();
  
  for(let i = 0; i < 5; i++)
  {
  p = createP("just a common text")
  p.style("background-color",color(255,0,0));
  
  let a = createA("#","click me");
  a.mousePressed(addPhoto);
  
  a.parent(p);
    
    let button = select("#clean");
    button.mousePressed(removePhoto);
  }
  
  function removePhoto()
  {
    for(let i = 0; i < images.length; i++)
    {
      images[i].remove();
    }
    
    images = [];
  }
}

function addPhoto()
{
  let img = createImg("https://upload.wikimedia.org/wikipedia/commons/3/30/Googlelogo.png");
  images.push(img);
  img.size(100,100);
  
  
  let paragrapgh = this.parent();
  
  img.parent(paragrapgh);
}
