function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(245);

  for(var x=0; x<=width; x+=50) {
    for (var y=0; y<=height / 3; y++) {
      ellipse(x,y,100,100)
    }}

}
