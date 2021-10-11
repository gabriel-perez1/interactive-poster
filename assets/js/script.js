let gap = 10;
let circNum = 40;
let circSize = 20;
let angle = 0;
let pointNum = 100;
let rectSize = 800;
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
  angle = angle + map(mouseX, 0, width, -0.01, 0.01);
  noFill();
  stroke('white');
  strokeWeight(1);
  //for loop: 1. where to start, 2. where to end, 3. increment
  for(let i=0; i < circNum; i++){
    arc(0, 0, circSize + gap * i, circSize + gap * i, angle * i, 360 - angle/2); //x and y position is zero bc it's at the center of translate
  }
  pop(); //only used when separating sections with translate

  //title and subtitle
  push();
  translate(width/2, height - 150);
  noStroke();
  textFont('Times New Roman');
  textSize(15);
  textAlign(CENTER, CENTER);
  text('Love', 0, 0);
  textSize(12);
  text('a decision, a judgement, a promise', 0, 20)
  pop();
  
  //border
  push();
  translate(width/2, height/2);
  noFill();
  stroke('white');
  strokeWeight(2);
  rectMode(CENTER);
  rect(0, 0, rectSize, rectSize);

  //background noise
  stroke('white');
  strokeWeight(1);
  for(let i = 0; i < pointNum; i++); {
    point(random(-rectSize/2, rectSize/2), random(-rectSize/2, rectSize/2));
  }
  pop();
}


