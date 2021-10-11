//initial canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

//draws loop forever
function draw(){
  background('black');
  noCursor(); //customizes shape of the mouse
  fill('white');
  circle(mouseX, mouseY, 5);
}


