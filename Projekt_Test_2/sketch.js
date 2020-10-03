let angle=0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  let angle = map (mouseX, 0,400,-60,0);
  let col = map(mouseX, 0, 400, 153, 100);
  background(col, 148, 7);

  strokeWeight(3);
  stroke(255);

  for (let x = 1; x < width/3; x += 10) {
    for (let y = 1; y < height; y += 10) {
      push();
      translate(x + 30, 10 * y + 10);
      rotate(angle);
      translate(-x - 30, -10 * y - 10);
      line(x + 30, 10*y, x + 30, 10*y + 10);
      pop();

      push();
      translate(x + 100, 30 * y + 30);
      rotate(angle);
      translate(-x - 100, -30 * y - 30);
      line(x + 100, 30 * y, x + 100, 30 * y + 30);
      pop();

      push();
      translate(x+180, 140*y+60);
      rotate(angle);
      translate(-x-180, -140*y-60);
      line (x+180, 140*y,x+180, 140*y+60);
      pop();

      push();
      translate(x, 70 * y + 20);
      rotate(angle);
      translate(-x, -70 * y - 20);
      line(x, 70 * y, x, 70 * y + 20);
      pop();
    }
  }


}
