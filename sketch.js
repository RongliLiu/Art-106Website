var x1=415.581;
var x2=331;
var x3=500;
var y0=239.669;
var y=500;



function setup() {
  createCanvas(500, 500);
}

function draw() {
 //back 
  background(249,237,50);
  
  //mountain
   noStroke();
  fill(32,43,28);
beginShape();
  vertex(x1,y0);
  vertex(x2,y);
  vertex(x3,y);
  endShape(CLOSE);
  
   //feet
   noStroke();
  fill(255,56,0);
beginShape();
  vertex(249.976,463.686);
  vertex(229.717,500);
  vertex(270.235,500);
  endShape(CLOSE);
  
  
   //body
 noStroke(); 
 fill(27,117,188); 
  rect(238.976,308.807,22.158,163.924);
  
 
  
  //head
  noStroke();
  fill(255,96,0);
beginShape();
  vertex(89.968,52.262);
  vertex(408.433,52.262);
  vertex(249.2,328.599);
  endShape(CLOSE);
  
  //greentrangle
   noStroke();
  fill(17,170,68);
beginShape();
  vertex(249.231,52.262);
  vertex(157.461,168.333);
  vertex(341,168.333);
  endShape(CLOSE);
  
  
  //black oval
  fill(25,18,38);
  
 ellipse(248.87, 135.911, 121.755,64.844);
  
  //eye
  fill(237,28,36);
  
 ellipse(251.588, 136.483, 37.49,64.701);
  
  //hand
stroke(35,31,32);
strokeWeight(2);
 line(182,293.5,250,378);
  
stroke(35,31,32);
strokeWeight(2);
 line(250,378,309.747,293.5);  
 
//example
  
  
  x1 = x1-1;
  x2 = x2-1;
  x3 = x3 -1;
  
  
  // Reset to the bottom
  if (x3 <= 0) {
 x1=415.581;
 x2=331;
 x3=500;
 y0=239.669;
 y=500;
    
 
 } 
    
}
