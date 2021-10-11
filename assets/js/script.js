let gap = 10;
let circNum = 40;
let circSize = 20;
let angle;
//initial canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(degrees);

}

//draws loop forever
function draw(){
  background('black');
  noCursor(); //customizes shape of the mouse
  noStroke();
  fill('white');
  circle(mouseX, mouseY, 5);

  //main graph
  push(); // starts and saves current drawing and transformation
  translate(width/2, height/2); //sets origin of circle
  rotate(angle);
  angle = map(mouseX, 0, width, -90, 90);
  noFill();
  stroke('white');
  strokeWeight(1);
  //for loop: 1. where to start, 2. where to end, 3. increment
  for(let i=0; i < circNum; i++){
    arc(0, 0, circSize + gap * i, circSize + gap * i, 45, 360 - i); //x and y position is zero bc it's at the center of translate
  }
  pop();
}


