var w;

function setup() {
  createCanvas(640, 360);
  // Make a Walker object
  w = new Walker();
}

function draw() {
  background(46, 134, 193);
  // Update and display object
  w.update();
  w.display();
}

function Walker() {

  // Start Walker in center
  this.pos = createVector(width / 2, height / 2);

  this.update = function() {
    // Move Walker randomly
    var vel = createVector(random(-5, 5), random(-5, 5));
    this.pos.add(vel);
  }

  this.display = function() {
    // Draw Walker as circle
    fill(211, 84, 0);
    rect(this.pos.x, this.pos.y, 48, 48);
    strokeWeight(6);
    stroke(212, 172, 13);
  }
}