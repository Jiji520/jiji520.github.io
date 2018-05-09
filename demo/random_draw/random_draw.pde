void setup() {
  size (500, 500); 
  background (255);
}

int x; 
int y; 
int red; 
int green; 
int blue; 
int lastX = 0, lastY = 0; 
void draw (){
  
  //x = (int) random(0, width); 
  //y = (int) random(0, height); 
  red = (int) random(0, 255);
  green = (int) random(0, 255); 
  blue = (int) random(0, 255); 
 
  if (mousePressed){
  fill (red, green, blue);
  ellipse (mouseX, mouseY, 20, 20); 

  }
}