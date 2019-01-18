// inspired by an Actionscript code of Glenn Rhodes
// published in the book "Flash Math Creativity, 2nd edition" (FriendsofED 2004)
var maxwidth = 960;
var maxheight = 500;
var balls = {};
var max_i = 10;
var max_j = 10;
var num = 0;
var diam_ball = 62.5;
var xscale = 1;
var yscale = 1;
var ang = 0;
var coeff_multi = 2;

function setup() {
  maxwidth = windowWidth;
  maxheight = windowHeight;
  createCanvas(maxwidth, maxheight);
  for (let i=0; i<max_i; i++) {
    for (let j=0; j<max_j; j++) {
      let ball = {};
      ball.xscale = xscale;
      ball.yscale = yscale;
      ball.x = i * diam_ball;
      ball.y = j * diam_ball;
      ball.sx = ball.x;
      ball.sy = ball.y;
      ball.ang = ang;
      ball.mynum = num;
      num++;

      balls[i+'|'+j] = ball;
    }
  }
  frameRate(20);
}

function draw() {
  background(255);
  ellipseMode(CORNERS);

  for (let i=0; i<max_i; i++) {
    for (let j=0; j<max_j; j++) {
      let ball = balls[i+'|'+j];

      ball.x = 275 + Math.cos(ball.ang) * ball.mynum;
      ball.y = 200 + Math.sin(ball.ang) * ball.mynum;
      ball.ang += ball.mynum / (225*coeff_multi);
      balls[i+'|'+j] = ball;
      let rgba = 'rgba('+Math.floor(ball.x)+', 0, '+Math.floor(ball.y)+', .1)';
      let c = color(rgba);
      stroke(c);
      fill(c);
      push();
      scale(ball.xscale, ball.yscale);
      ellipse(ball.x, ball.y, ball.sx, ball.sy);
      pop();
    }
  }

}

function keyPressed() {
  // console.log(keyCode);
  var tmpkey = key.toLowerCase();
  if (tmpkey == 'x') {
    console.log('STOP');
    console.log(displayList1.getChildren4Debug());
    noLoop();
  }
  if (tmpkey == '1' || tmpkey == '2' || tmpkey == '3' || tmpkey == '4') {
    coeff_multi = parseInt(tmpkey);
  }
}
