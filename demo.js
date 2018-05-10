
var x; 
var y; 
var red; 
var green; 
var blue; 

function setup () {
	createCanvas(windowWidth, windowHeight); 
}


function draw() { 
  red = random(0, 255);
  green = random(0, 255); 
  blue = random(0, 255); 
  noStroke (); 
 
  if (mouseIsPressed){
  fill (red, green, blue);
  ellipse (mouseX, mouseY, 20, 20); 

  }
}

