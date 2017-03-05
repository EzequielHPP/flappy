/**
 * Created by ezequielpereira on 05/03/2017.
 */

function pipe(screenWidth, screenHeight, birdSize) {
    this.top = random(screenHeight/2);
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
    this.rectwidth = 20;
    this.gapSize = birdSize * 5;
    this.x = this.screenWidth + this.rectwidth;
    this.speed = 3;
    this.scored = false;

    this.show = function(){
        fill(255);
        // Top pipe
        rect(this.x, 0, this.rectwidth, this.top);
        // Bottom pipe
        rect(this.x, this.top + this.gapSize, this.rectwidth, this.screenHeight);
    };

    this.update = function(birdDead){
        if(!birdDead) {
            this.x -= this.speed;
        }
    };

    this.offscreen = function(){
        if(this.x < this.rectwidth * -1){
            return true;
        }

        return false;
    };

    this.hits = function(bird){
        // Check if in the direction of pipe
        if((bird.y - birdSize/2) <= this.top || (bird.y + birdSize/2) >= (this.top + this.gapSize)){
            // Check if within pipe range
            if((bird.x + birdSize/2) >= this.x && (bird.x + birdSize/2) < this.x + this.rectwidth) {
                return true;
            }
        }

        return false;
    };

    this.pastBird = function(bird){
        if(!bird.dead && bird.x + birdSize/2 > this.x){
            if(this.scored == false) {
                this.scored = true;
                return true;
            }
        }

        return false;
    }
}