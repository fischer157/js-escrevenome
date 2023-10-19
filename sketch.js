function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background("white");
    stroke("blue");
    fill("red")
    
    if(mouseIsPressed){
      rect(mouseX, mouseY, 10, 10);
    }
  }