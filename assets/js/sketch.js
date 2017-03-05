
// global variables
var canvasWidth;
var canvasHeight;
var game;
var mousePress = false;

function setup() {
    //Setup the canvas

    frameRate(60);

    // Get the navigation Height
    var heightOfNavigation = $('.nav-wrapper').outerHeight();

    // Setup the Canvas width and height
    canvasWidth = $('#canvas-holder').width();
    canvasHeight = windowHeight - heightOfNavigation;
    var canvas = createCanvas(canvasWidth, canvasHeight);

    // Attach the canvas to the right place
    canvas.parent('canvas-holder');

    // Reset view
    bgColor = [102, 187, 197];
    background(bgColor);
    noStroke();

    game = new game();
    game.init();
}

// Start the game
function draw() {
    background(bgColor);

    game.runGame();

    if (mouseIsPressed) {
        if(!mousePress) {
            mousePress = true;
            game.bounce();
        }
    } else {
        mousePress = false;
    }
}