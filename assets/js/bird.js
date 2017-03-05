/**
 * Created by ezequielpereira on 05/03/2017.
 */

function bird(birdSize, x, y, limitY, game) {

    this.x = x;
    this.y = y;
    this.defaultY = y;
    this.birdSize = birdSize;
    this.limitY = limitY;
    this.dead = false;

    this.gravity = .4;
    this.lift = -12;
    this.velocity = 0;

    this.deathDirection = '';

    this.showBird = function () {
        fill(255);
        ellipse(this.x, this.y, this.birdSize, this.birdSize);
    };

    this.resetBird = function () {
        this.y = this.defaultY;
        this.dead = false;
        this.velocity = 0;
        this.update();
        console.log('rested to: ', this.y);
    };

    this.update = function () {
        console.log(this.dead);
        if(!this.dead) {
            this.velocity += this.gravity;
            this.y += this.velocity;

            if (!this.dead && this.floorColision()) {
                this.deadAnimation();
            }

            if(this.ceileingColision()){
                this.y = 0 + this.birdSize / 2;
                this.velocity = 0;
            }
            this.showBird();
        }
    };

    this.floorColision = function(){
        if ((this.y + (this.birdSize / 2)) >= limitY) {
            return true;
        }
        return false;
    };

    this.ceileingColision = function(){
        if ((this.y - (this.birdSize / 2)) <= 0) {
            return true;
        }
        return false;
    };

    this.deadAnimation = function () {
        if (!this.dead) {
            this.velocity = 0;
            this.dead = true;
        }

        this.y = this.limitY - this.birdSize / 2;
    };

    this.goUp = function(){
        this.velocity += this.lift;
    }
}