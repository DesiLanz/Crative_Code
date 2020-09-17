function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(245);

  let a=150;
  let b=20;
  strokeWeight(10);
  stroke('#ff7e67');

  line(0,b,a,b);
  line(a+20, b, a+a-50, b);
  line(a+a-30,b,a+a-10, b);
  line(a+a+10,b, a+a+100,b);

  b+=30;
  line (0,b,a-30,b);
  line (a-10,b,a+30,b);
  line (a+50,b,a+250,b);

  b+=30;
  line(0,b,a-20,b);
  line(a+10, b, a+a-50, b);
  line(a+a-30, b,a+220,b);
  line (a+240,b,a+260,b);


  b+=30;
  line(0,b,a,b);
  line(a+20, b, a+a-50, b);
  line(a+a-30,b,a+a-10, b);
  line(a+a+10,b, a+a+100,b);

  b+=60;
  line (0,b,a-30,b);
  line (a-10,b,a+30,b);
  line (a+50,b,a+250,b);

   b+=30;
  line(0,b,a,b);
  line(a+20, b, a+a-50, b);
  line(a+a-30,b,a+a-10, b);
  line(a+a+10,b, a+a+100,b);

   b+=60;
  line(0,b,a-20,b);
  line(a+10, b, a+a-50, b);
  line(a+a-30, b,a+220,b);
  line (a+240,b,a+260,b);

  b+=30;
  line (0,b,a-30,b);
  line (a-10,b,a+30,b);
  line (a+50,b,a+250,b);

  b+=30;
  line(0,b,a,b);
  line(a+20, b, a+a-50, b);
  line(a+a-30,b,a+a-10, b);
  line(a+a+10,b, a+a+100,b);

   b+=30;
  line(0,b,a-20,b);
  line(a+10, b, a+a-50, b);
  line(a+a-30, b,a+280,b);

   b+=30;
  line(0,b,a*2,b);
  line (a*2+20,b,a*2+25,b);
  line(a*2+45,b, a*2+b,b);
}
