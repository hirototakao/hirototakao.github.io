let ball;

function setup() {
 createCanvas(windowWidth, windowHeight);
 background(100);
}
function draw() {
   background(100);
   let x += (mouseX - x) * 0.04; 
   let y += (mouseY - y) * 0.04; 
   fill(random(256), random(256), random(256)); 
   ellipse(x, y, 50, 50);
}
