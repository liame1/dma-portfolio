
let canvas;
let angle = 0;
let x = 0;
let y = 0;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0, 0);
  canvas.style("z-index", 100);

  angleMode(DEGREES);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(140, 120, 40);
  
  directionalLight(140, 140, 140, 1, 1, -0.7);
  directionalLight(160, 100, 110, -1, -1, 0.7);
  
  orbitControl();
  
  ambientMaterial(255);
  strokeWeight(0);
  
  x += 1;
  y += 1;
  angle += 0.4;
  
  
  sinX = sin(x);
  cosY = cos(y);
  
  x2 = map(sinX, 0, 1, 0, width/4);
  y2 = map(cosY, 0, 1, 0, height/4);
  
  // Sphere-1
  push();
  // translate x, y, z
  translate(x2, x2/2, y2);
  sphere(40, 20, 20);
  pop();
  
  // Sphere-2
  push();
  // translate x, y, z
  translate(-x2, -x2/2, -y2*1.2);
  sphere(60, 20, 20);
  pop();
  
  // Torus-1
  push();
  rotateZ(120);
  rotateX(angle);
  torus(100, 10, 20);
  pop();
  
  // Torus-2
  push();
  rotateY(-45);
  rotateX(20);
  rotateZ(angle);
  torus(330, 15, 20);
  pop();
  
  // Torus-3
  push();
  rotateY(angle);
  rotateX(0);
  torus(390, 15, 20);
  pop();
  
  
  
  //original ellipse below
  // ellipse(x2, y2, 50, 50);
  // sphere(x2, y2, height);
}