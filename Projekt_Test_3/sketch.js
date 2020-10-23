let angle=0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  let angle = map (mouseX, 0,windowWidth,-60,60);
  let col = map(mouseX, 0, windowWidth, 153, 100);
  background(col, 148, 7);

  strokeWeight(3);

  stroke('#81C222');

  for (let x = 1; x < width/3; x += 10) {
    for (let y = 1; y <= height; y += 10) {
      push();
      blendMode(MULTIPLY);
      translate(x + 30, 10 * y + 10);
      rotate(angle);
      translate(-x - 30, -10 * y - 10);
      line(x + 30, 10*y, x + 30, 10*y + 10);
      pop();

      push();
      blendMode(MULTIPLY);
      translate(x + 100, 30 * y + 30);
      rotate(angle);
      translate(-x - 100, -30 * y - 30);
      line(x + 100, 30 * y, x + 100, 30 * y + 30);
      pop();

      push();
      blendMode(MULTIPLY);
      translate(x+180, 140*y+60);
      rotate(angle);
      translate(-x-180, -140*y-60);
      line (x+180, 140*y,x+180, 140*y+60);
      pop();

      push();
      blendMode(MULTIPLY);
      translate(x, 70 * y + 20);
      rotate(angle);
      translate(-x, -70 * y - 20);
      line(x, 70 * y, x, 70 * y + 20);
      pop();

      push();
      blendMode(MULTIPLY);
      translate(x+570, 50*y+80);
      rotate(angle);
      translate(-x-570, -50*y-80);
      line (x+570, 50*y,x+570, 50*y+80);
      pop();

      push();
      blendMode(MULTIPLY);
      translate(x+920, 10*y+30);
      rotate(angle);
      translate(-x-920, -10*y-30);
      line (x+920, 10*y,x+920, 10*y+30);
      pop();

      push();
      blendMode(MULTIPLY);
      translate(x+720, 140*y+50);
      rotate(angle);
      translate(-x-720, -140*y-50);
      line (x+720, 140*y,x+720, 140*y+50);
      pop();

      push();
      blendMode(MULTIPLY);
      translate(x + 530, 42*y + 10);
      rotate(angle);
      translate(-x - 530, -42*y- 10);
      line(x + 530, 42*y, x + 530, 42*y + 10);
      pop();

      push();
      blendMode(MULTIPLY);
      translate(x + 510, 210*y + 50);
      rotate(angle);
      translate(-x - 510, -210*y - 50);
      line(x + 510, 210*y, x + 510, 210*y + 50);
      pop();

      push();
      blendMode(MULTIPLY);
      translate(x + 510, 510*y + 50);
      rotate(angle);
      translate(-x - 510, -510*y - 50);
      line(x + 510, 510*y, x + 510, 510*y + 50);
      pop();

      push();
      blendMode(MULTIPLY);
      translate(x + 450, 700*y + 80);
      rotate(angle);
      translate(-x - 450, -700*y - 80);
      line(x + 450, 710*y, x + 450, 710*y + 70);
      pop();

      push();
      blendMode(MULTIPLY);
      translate(x , 32*y + 40);
      rotate(angle);
      translate(-x , -32*y - 40);
      line(x , 32*y, x , 32*y + 40);
      pop();

      push();
      blendMode(MULTIPLY);
      translate(x + 850, 32*y + 10);
      rotate(angle);
      translate(-x - 850, -32*y - 10);
      line(x + 850, 32*y, x + 850, 32*y + 10);
      pop();

      push();
      blendMode(MULTIPLY);
      translate(x + 1200, 30*y + 80);
      rotate(angle);
      translate(-x - 1200, -30*y - 80);
      line(x + 1200, 30*y, x + 1200, 30*y + 80);
      pop();

    }
  }


}
