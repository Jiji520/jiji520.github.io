
var x; 
var y; 
var red; 
var green; 
var blue; 

function setup () {
	var mycanvas = createCanvas (windowWidth, windowHeight); 
	background (255);
}


function draw() { 
  red = (var) random(0, 255);
  green = (var) random(0, 255); 
  blue = (var) random(0, 255); 
 
  if (mouseIsPressed){
  fill (red, green, blue);
  ellipse (mouseX, mouseY, 20, 20); 

  }
}

