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

    this.show = function(){
        fill(255);
        // Top pipe
        rect(this.x, 0, this.rectwidth, this.top);
        // Bottom pipe
        rect(this.x, this.top + this.gapSize, this.rectwidth, this.screenHeight);
    };

    this.update = function(){
        this.x -= this.speed;
    };

    this.offscreen = function(){
        if(this.x < this.rectwidth * -1){
            return true;
        }

        return false;
    }
}