/**
 * Created by ezequielpereira on 05/03/2017.
 */
var bird; // Store the actual bird object
var pipes = []; // Store the actual pipes objects
var bgColor = []; // Background color for reset purposes
var start = false;
var started = false;
var startButton = false;
var birdSize = 35;

function game(){

    this.init = function(){
        // Create bird
        var positionX = (canvasWidth / 2) - 30;
        var positionY = (canvasHeight / 2);
        bird = new bird(birdSize, positionX, positionY, canvasHeight);
    };

    this.runGame = function(){
        // Did it start the game already?
        if(!start) {
            // Is the start button the default value?
            if (!startButton) {
                // show the button so we can start
                startButton = createButton('Start playing');
                startButton.position(canvasWidth / 2 + 90, canvasHeight / 2);
                startButton.mousePressed(function () {
                    start = true;
                });
            }

            // Is it in the reset status?
        } else if(start == 'reset'){
            // Is already showing the button?
            if (!startButton) {
                // show the play again button
                startButton = createButton('Play again?');
                startButton.position(canvasWidth / 2 + 100, canvasHeight / 2 + 50);
                startButton.mousePressed(function () {
                    start = true;
                    started = false;
                });
            }

            // The game is ready for starting
        } else {
            // Has it started already? If not let the games begin!
            if(!started) {
                this.startgame();
            }
            // Update the position of the bird on the screen
            bird.update();

            // Every 80 frames generate a pipe
            if(frameCount % 80 == 0){
                pipes.push(new pipe(canvasWidth, canvasHeight, birdSize));
            }

            //Loop trough the pipes and animate them
            for(var i = pipes.length-1; i > 0; i--){
                pipes[i].show();
                pipes[i].update();

                if(pipes[i].hits(bird)){
                    this.gameover();
                    break;
                }

                if(pipes[i].offscreen()){
                    pipes.splice(i, 1);
                }
            }
        }

        // Did the bird die?
        if(bird.dead){
            // Trigger the game over actions
            this.gameover();
        }
    };

    this.startgame = function(){
        if(startButton != false){
            startButton.remove();
            startButton = false;
            bird.resetBird();
        }
        started = true;
        bird.showBird();
    };

    this.gameover = function(){
        textSize(32);
        text("GAME OVER", (canvasWidth / 2 - 90), (canvasHeight / 2 - 50));
        if(start != 'reset') {
            start = 'reset';
            pipes = [];
        }
    };

    this.bounce = function(){
        bird.goUp();
    }
}