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

    this.r = random(255);
    this.g = random(255);
    this.b = random(255);

    this.deathDirection = '';

    this.showBird = function () {
        // Beak
        fill(226, 224, 60);
        triangle((this.x + this.birdSize/2)-10, this.y - (this.birdSize/2)+5, (this.x + this.birdSize/2) + 10, this.y, (this.x + this.birdSize/2)-10, this.y + (this.birdSize/2)-5);
        // Body
        fill(this.r, this.g, this.b);
        ellipse(this.x, this.y, this.birdSize, this.birdSize);

        // Eye
        fill(0);
        ellipse(this.x + 10, this.y - 10, this.birdSize/3, this.birdSize/3);
        fill(255);
        ellipse(this.x + 10, this.y - 11, this.birdSize/4, this.birdSize/4);
        fill(0);
        ellipse(this.x + 12, this.y - 13, this.birdSize/6, this.birdSize/6);
    };

    this.resetBird = function () {
        this.y = this.defaultY;
        this.r = random(255);
        this.g = random(255);
        this.b = random(255);
        this.dead = false;
        this.velocity = 0;
        this.update();
        console.log('rested to: ', this.y);
    };

    this.update = function () {
        if (!this.dead) {
            this.velocity += this.gravity;
            this.y += this.velocity;

            if (!this.dead && this.floorColision()) {
                this.deadAnimation();
            }

            if (this.ceileingColision()) {
                this.y = 0 + this.birdSize / 2;
                this.velocity = 0;
            }
            this.showBird();
        }
    };

    this.floorColision = function () {
        if ((this.y + (this.birdSize / 2)) >= limitY - 40) {
            return true;
        }
        return false;
    };

    this.ceileingColision = function () {
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

    this.goUp = function () {
        this.velocity += this.lift;
    };

    this.hitsPipe = function (pipe) {
        // Check if in the direction of pipe
        if ((this.y - this.birdSize / 2) <= pipe.top || (this.y + this.birdSize / 2) >= (pipe.top + pipe.gapSize)) {
            // Check if within pipe range
            if ((this.x + this.birdSize / 2) >= pipe.x && (this.x + this.birdSize / 2) < pipe.x + pipe.rectwidth) {
                this.dead = true;
                return true;
            }
        }

        return false;
    }
}