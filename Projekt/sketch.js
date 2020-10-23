function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

}

function draw() {
  background('#D4EE96');
  noStroke();
  let angle = map (mouseX, 0,windowWidth,-60,60);

//Gras
 push();
  strokeWeight(4);
  stroke('#0EB008')
  blendMode(MULTIPLY);

  push();
  for (let x = 10; x < width; x += 10) {
    for (let y = 10; y < height; y += 20) {
      push();
    translate(x,y+10);
    rotate(angle);
    translate(-x,-y-10);
    line(x,y,x,y+10);
      pop();
    }}
  pop();
  pop();

  //Weg
   push();
   fill('#CEBD98');
   rect (0,50,windowWidth/2,50);
   rect (windowWidth/2,0,50,350);
   rect (windowWidth/3+60,300,500,300);
   rect (windowWidth/2,400,windowWidth/2,50);
   rect (0, 500, windowWidth/4,50);
   rect (windowWidth/4,500, 50, windowHeight);
   rect (windowWidth/4, 750, windowWidth, 50);
   rect (windowWidth/2+150,400,50,windowHeight);
   rect (windowWidth/2+225,220,50,80)
   pop ();



   //Haus
  push();
  fill('#E5CB7E');
  rect (windowWidth/2+150,150, 200,120);
  fill('#41361D');
  rect (windowWidth/2+225,205,50,65);
  fill('#DEEFED');
  stroke(140);
  strokeWeight(2);
  rect (windowWidth/2+190,205,20,40);
  rect (windowWidth/2+170,205,20,40);
  rect (windowWidth/2+290,205,20,40);
  rect (windowWidth/2+310,205,20,40);
  fill (100);
  noStroke();
  beginShape();
  vertex (windowWidth/2+130,180);
  vertex (windowWidth/2+370,180);
  vertex (windowWidth/2+320,130);
  vertex (windowWidth/2+190,130);
  endShape(CLOSE);
  fill (160);
  beginShape();
  vertex (windowWidth/2+130,180);
  vertex (windowWidth/2+190,130);
  vertex (windowWidth/2+190,60);
  vertex (windowWidth/2+130,73);
  endShape(CLOSE);
  beginShape();
  vertex (windowWidth/2+370,180);
  vertex (windowWidth/2+320,130);
  vertex (windowWidth/2+320,60);
  vertex (windowWidth/2+370,73);
  endShape(CLOSE);
  fill(125)
  rect (windowWidth/2+190,60,130,70)


  pop();



   //Wolke
   push();
   noStroke ();
   fill (255,255,255);
   ellipse (mouseX-20, mouseY, 40, 40);
   ellipse (mouseX, mouseY, 60, 30);
   ellipse (mouseX, mouseY-10, 30, 30);
   ellipse (mouseX, mouseY+10, 40, 40);
   ellipse (mouseX-25, mouseY+10, 50, 30);
   pop();



}
