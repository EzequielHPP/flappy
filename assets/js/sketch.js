function setup() {
    var canvas = createCanvas(480, 640);
    canvas.parent('canvas-holder');
    background(0);
    noStroke();
    fill(102);
}

function draw() {
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
}