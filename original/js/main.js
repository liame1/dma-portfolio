
let canvas;
let angle = 0;
let x = 0;
let y = 0;
// let cam;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0, 0);
  canvas.style("z-index", -2);
  
  angleMode(DEGREES);

  // cam = createCamera();
  // // cam.lookAt(0, 0, 0);
  // translate(width/16, 0, height/5);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  // frameRate(24);
  clear();

  translate(100, 0, 500);
  
  // directionalLight(140, 140, 140, 1, 1, -0.7);
  // directionalLight(160, 100, 110, -1, -1, 0.7);
  
  // orbitControl();
  
  // ambientMaterial(255, 10);
  
  strokeWeight(0);
  
  // SPEED OF SPHERES
  x += 0.5;
  y += 0.5;
  //SPEED OF TORUSES
  angle += 0.2;
  
  
  sinX = sin(x);
  cosY = cos(y);

  // ROTATING CAMERA

  // cam.roll(mouseX/1000);
  // cam.roll(-mouseY/1000);
  // cam.lookAt(0,0,0);
  // cam.setPosition(0, 0, 800);


  x2 = map(sinX, 0, 1, 0, 160);
  y2 = map(cosY, 0, 1, 0, 160);
  
  // Sphere-1
  push();
  // translate x, y, z
  translate(x2, x2, y2);
  sphere(40, 20, 20);
  pop();
  
  // Sphere-2
  push();
  // translate x, y, z
  translate(-x2, -x2, -y2);
  sphere(60, 20, 20);
  pop();
  
    // Torus-1
    push();
    rotateZ(120);
    rotateX(angle);
    torus(100, 10, 30);
    pop();
  
  // Torus-2
  push();
  rotateY(angle);
  rotateX(-angle);
  rotateZ(angle);
  torus(330, 15, 50);
  pop();
  
  // Torus-3
  push();
  rotateY(-20);
  rotateX(angle);
  rotateZ(angle);
  torus(390, 15, 50);
  pop();
  
  
  
  //original ellipse below
  // ellipse(x2, y2, 50, 50);
  // sphere(x2, y2, height);
}