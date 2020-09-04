let scale=2;
function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {
  background(7,45,62);
  noStroke();
  quad(30*scale, 70*scale, 40*scale, 90*scale, 70*scale, 110*scale, 90*scale, 110*scale);
  fill(190,220,245);
  triangle(30*scale,70*scale,90*scale,110*scale,100*scale,60*scale);
  fill(51,90,121);
  triangle(100*scale,60*scale,90*scale,110*scale,130*scale,110*scale);
  fill(107,171,221);
  triangle(100*scale,60*scale,130*scale,110*scale,150*scale,100*scale);
  fill(51,122,178);
  quad(200*scale,30*scale,170*scale,70*scale,190*scale,70*scale,205*scale,30*scale);
  fill(139,190,231);
  triangle(100*scale,60*scale,150*scale,100*scale,190*scale,70*scale);
  fill(93,156,207);
  triangle(200*scale,30*scale,210*scale,10*scale,210*scale,30*scale);
  fill(190,220,245);
  triangle(200*scale,30*scale,220*scale,20*scale,215*scale,30*scale);
  fill(93,156,207);
  triangle(70*scale,90*scale,70*scale,115*scale,115*scale,120*scale);
}
