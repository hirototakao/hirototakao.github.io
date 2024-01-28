let ball; 
  
        let x = 0; 
        let y = 0; 
        // This method is used for creating canvas 
        function setup() { 
            createCanvas(windowWidth, windowHeight); 
        } 
  
        // This method will draw the circle  
        // and track the mouse as well. 
        function draw() { 
            background(255); 
            x += (mouseX - x) * 0.04; 
            y += (mouseY - y) * 0.04; 
            fill(0); 
            ellipse(x, y, 50, 50); 
        } let ball;

function setup() {
 createCanvas(windowWidth, windowHeight);
}
function draw() {
   background(100);
   let x += (mouseX - x) * 0.04; 
   let y += (mouseY - y) * 0.04; 
   fill(random(256), random(256), random(256)); 
   ellipse(x, y, 50, 50);
}
