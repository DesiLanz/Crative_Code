var gui;

var anz = 10;
var distanzX = 25;
var distanzY = 25;


function setup() {
  createCanvas(windowWidth, windowHeight);

  noFill();
  gui = createGui('p5.gui');
  gui.addGlobals('anz', 'distanzX','distanzY');
  // only call draw when then gui is changed
  noLoop();
}

function draw() {
  strokeWeight(2);
  background(242, 161, 184);

  for (let i = 1; i <= anz; i++) {
    strokeWeight(i);
    ellipse(distanzX * i, distanzY * i+100, 50*i);

    for (let x=1;x <= anz;x+=30){
        line(distanzX * x, distanzY , distanzX *x, distanzY * i+i);
  }
  }


}
