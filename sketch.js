let ball; 
  
        let x = 0; 
        let y = 0; 
        canvas.style('z-index', 9999);
        noCursor();

        // This method will draw the circle  
        // and track the mouse as well. 
        function draw() { 
            x += (mouseX - x) * 0.1; 
            y += (mouseY - y) * 0.1; 
            fill(255); 
            ellipse(x, y, 50, 50); 
        } 
