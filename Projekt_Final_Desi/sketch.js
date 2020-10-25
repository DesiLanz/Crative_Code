let angle = 0;
let verschieben = 0;
let up = 0;
let untergrenze = 50;
let obergrenze = 0;
var gui;
var laenge = 0;
var laengeMin = 0;
var laengeMax = 200;
var laengeStep = 5;


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(HSB);

  gui = createGui('p5.gui');
  gui.addGlobals('laenge');
}

function draw() {
  let s = second();
  background(88 + s, 100, 80 - s * 1.8);


  let angle = map(mouseX, 0, windowWidth, -60, 60);

  if (mouseIsPressed) {
       MULTIPLY= (LIGHTEST);

   }else{
      MULTIPLY= (MULTIPLY);
   }


  strokeWeight(3);

  if (up == 0) {
    if (verschieben < untergrenze) {
      verschieben += 10;
    } else {
      up = 1;
    }

  } else {
    if (verschieben > obergrenze) {
      verschieben -= 10;
    } else {
      up = 0;
    }
  }
  // console.log(verschieben);
  stroke(122, 100, 86, 80);

  for (let x = 1; x < width / 3; x += 10) {
    for (let y = 1; y <= height; y += 10) {

      push();
      blendMode(MULTIPLY);
      translate(x + 30, 10 * y + 10+ laenge);
      rotate(angle);
      translate(-x - 30, -10 * y - 10- laenge);
      line(x + 30, 10 * y, x + 30, 10 * y + 10 + laenge);
      pop();

      push();
      blendMode(MULTIPLY);
      translate(x + 100, 30 * y + 30+ laenge);
      rotate(angle);
      translate(-x - 100, -30 * y - 30- laenge);
      line(x + 100, 30 * y, x + 100, 30 * y + 30 + laenge);
      pop();

      push();
      blendMode(MULTIPLY);
      translate(x + 180, 140 * y + 60+ laenge);
      rotate(angle);
      translate(-x - 180, -140 * y - 60- laenge);
      line(x + 180, 140 * y, x + 180, 140 * y + 60 + laenge);
      pop();

      push();
      blendMode(MULTIPLY);
      translate(x, 70 * y + 20+ laenge);
      rotate(angle);
      translate(-x, -70 * y - 20- laenge);
      line(x, 70 * y, x, 70 * y + 20 + laenge);
      pop();

      push();
      blendMode(MULTIPLY);
      translate(x + 570, 50 * y + 80+ laenge);
      rotate(angle);
      translate(-x - 570, -50 * y - 80- laenge);
      line(x + 570, 50 * y, x + 570, 50 * y + 80 + laenge);
      pop();

      push();
      blendMode(MULTIPLY);
      translate(x + 920, 10 * y + 30+ laenge);
      rotate(angle);
      translate(-x - 920, -10 * y - 30- laenge);
      line(x + 920, 10 * y, x + 920, 10 * y + 30 + laenge);
      pop();

      push();
      blendMode(MULTIPLY);
      translate(x + 720, 140 * y + 50+ laenge);
      rotate(angle);
      translate(-x - 720, -140 * y - 50- laenge);
      line(x + 720, 140 * y, x + 720, 140 * y + 50 + laenge);
      pop();

      push();
      blendMode(MULTIPLY);
      translate(x + 530, 42 * y + 10+ laenge);
      rotate(angle);
      translate(-x - 530, -42 * y - 10- laenge);
      line(x + 530, 42 * y, x + 530, 42 * y + 10 + laenge);
      pop();

      push();
      blendMode(MULTIPLY);
      translate(x + 510, 210 * y + 50+ laenge);
      rotate(angle);
      translate(-x - 510, -210 * y - 50- laenge);
      line(x + 510, 210 * y, x + 510, 210 * y + 50 + laenge);
      pop();

      push();
      blendMode(MULTIPLY);
      translate(x + 510, 510 * y + 50+ laenge);
      rotate(angle);
      translate(-x - 510, -510 * y - 50- laenge);
      line(x + 510, 510 * y, x + 510, 510 * y + 50 + laenge);
      pop();

      push();
      blendMode(MULTIPLY);
      translate(x + 450, 700 * y + 80+ laenge);
      rotate(angle);
      translate(-x - 450, -700 * y - 80- laenge);
      line(x + 450, 710 * y, x + 450, 710 * y + 70 + laenge);
      pop();

      push();
      blendMode(MULTIPLY);
      translate(x, 32 * y + 40+ laenge- laenge);
      rotate(angle);
      translate(-x, -32 * y - 40);
      line(x, 32 * y, x, 32 * y + 40 + laenge);
      pop();

      push();
      blendMode(MULTIPLY);
      translate(x + 850, 32 * y + 10+ laenge);
      rotate(angle);
      translate(-x - 850, -32 * y - 10- laenge);
      line(x + 850, 32 * y, x + 850, 32 * y + 10 + laenge);
      pop();

      push();
      blendMode(MULTIPLY);
      translate(x + 1200, 30 * y + 80+ laenge);
      rotate(angle);
      translate(-x - 1200, -30 * y - 80- laenge);
      line(x + 1200, 30 * y, x + 1200, 30 * y + 80 + laenge);
      pop();

      // push();
      // blendMode(MULTIPLY);
      // stroke(255,0,0);
      // translate(x + 30, 10 * y + 10+verschieben);
      // rotate(angle);
      // translate(-x - 30, -10 * y - 10-verschieben);
      // line(x + 30, 10*y, x + 30, 10*y + 10+laenge);
      // pop();



    }
  }


}