let chair;

function preload() {
  chair = loadModel('chair.obj');
}

function setup() {
  createCanvas(800, 600, WEBGL);
}

function draw() {
  background(0);
  noStroke();
  scale(20)
  if (mouseIsPressed){
    rotateY(-mouseX / 200)
    rotateZ(-mouseY / 100)
  }
  model(chair);
}