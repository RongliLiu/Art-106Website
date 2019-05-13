
var x1=415.581;
var x2=331;
var x3=500;
var y0=239.669;
var y=500;
var eyeH = 65;
var eyeSpeed = 1;
var hx1=182;
var hy1=293;
var hx2=309;
var hy2=293;
var hspeed1=1;
var hspeed2=1;
var r=280;
var bx=238.976;
 

let myFont;
function preload() {
  myFont = loadFont('Vollkorn-Bold.ttf');
}

function setup() {
    var canvas=
  createCanvas(500, 500);
    
    canvas.parent('header')
    
}

function draw() {
 //back 
  background('#757de8');
  

   //feet
   noStroke();
  fill(204,104,128);
beginShape();
  vertex(249.976,463.686);
  vertex(229.717,500);
  vertex(270.235,500);
  endShape(CLOSE);
  
  
   //body
 noStroke(); 
 fill('#ffcdd2'); 
  rect(bx,308.807,22.158,163.924);
  
  
  //head
  noStroke();
  fill('#8bf6ff');
beginShape();
  vertex(89.968,52.262);
  vertex(408.433,52.262);
  vertex(249.2,328.599);
  endShape(CLOSE);
  
  //smalltrangle
   noStroke();
  fill('#ffcdd2');
beginShape();
  vertex(249.231,52.262);
  vertex(157.461,168.333);
  vertex(341,168.333);
  endShape(CLOSE);
  
  
  //black oval
  fill(32,24,51);
 ellipse(248.87, 135.911, 121.755,eyeH);
  
  
  //eye
  fill('#ffffff');
  ellipse(251.588, 136.483, 37.49,eyeH);
  
  
  //hand
stroke(35,31,32);
strokeWeight(2);
 line(hx1,hy1,250,378);
  
stroke(35,31,32);
strokeWeight(2);
 line(250,378,hx2,hy2);  
  
  
//name
 textFont(myFont); 
textSize(25);
fill('#ffffff');

text("Rongli Liu",360,490);
 
  
//Animation
  
  //eye movement
  eyeH = eyeH - eyeSpeed;
  
    if(eyeH >= 65){
      eyeSpeed = -eyeSpeed;  
 } 
  
  if (eyeH <= 0){
  
  eyeSpeed = -eyeSpeed;  
  }
    
  //hand movement1

  hy1=hy1-hspeed1;
  if(hy1<=290){
    hspeed1=-hspeed1;
  }
  if(hy1>=300){
    hspeed1=-hspeed1;
  }
  
  //hand movement2
  hy2=hy2+hspeed2;
  if(hy2<=290){
    hspeed2=-hspeed2;
  }
  if(hy2>=300){
    hspeed2=-hspeed2;
  }
    
//bodymotion
     bx = bx + random(-1, 1);
    
    if (bx <= 234) {
    bx = 238.976;
  }
    
    if (bx >= 243) {
    bx = 238.976;
  }
  
}





