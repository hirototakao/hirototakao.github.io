let x = 0;
let y = 0;

function setup(){
 createCanvas(windowWidth, windowHeight);
}
function draw() {
	background(255);
	x += (mouseX - x) * 0.2;
	y += (mouseY - y) * 0.2;
	fill(100);
	noStroke();
  circle(x, y, 50);
}
function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
}
