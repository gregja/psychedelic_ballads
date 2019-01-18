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
var keys = ['a', 'b', 'c', 'd', 'e', 'f'];

var mode = 'a';

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
      switch (mode) {
        case 'a': {
          ball.x = ball.sx + Math.sin(ball.ang) * ball.mynum * 2;
          ball.y = ball.sy + Math.sin(ball.ang -=.1) * ball.mynum;
          break;
        }
        case 'b': {
          ball.x = ball.sx + Math.sin(ball.ang) * ball.mynum;
          ball.y = 200 + Math.sin(ball.ang) * ball.mynum;
          break;
        }
        case 'c': {
          ball.x = 275 + Math.cos(ball.ang) * ball.mynum;
          ball.y = 200 + Math.sin(ball.ang) * ball.mynum;
          break;
        }
        case 'd': {
          ball.x = 275 + Math.cos(ball.ang) * ball.mynum;
          ball.y = ball.sy + Math.sin(ball.ang) * ball.mynum;
          break;
        }
        case 'e': {
          ball.x = ball.sx + Math.cos(ball.ang) * ball.mynum / 2;
          ball.y = ball.sy + Math.cos(ball.ang -=.1) * ball.mynum * 3;
          break;
        }
        case 'f': {
          ball.x = 275 + (Math.cos(ball.ang * 1.2) * 200);
          ball.y = 200 + (Math.sin(ball.ang +=.1) * 200);
          ball.yscale = (Math.sin(ball.ang) * ((ball.mynum + 40) / 2))/2;
          //ball.yscale = ball.xscale;
          break;
        }
      }

      ball.mynum += Math.cos(ball.ang += .2) * 7;
//      ball.mynum += Math.cos(ball.ang) * 7;

      ball.ang +=  ball.mynum / 450 ;
      balls[i+'|'+j] = ball;
      let rgba = 'rgba('+Math.floor(ball.x)+', 0, '+Math.floor(ball.y)+', .5)';
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

  var tmpkey = key.toLowerCase();
  if (tmpkey == 'x') {
    console.log('STOP');
    noLoop();
  } else {
    if (keys.includes(tmpkey)) {
      mode = tmpkey;
      console.log('mode '+mode);
    }
  }

}
