/**
 * Created by ezequielpereira on 05/03/2017.
 */

function pipe(screenWidth, screenHeight, birdSize) {
    this.top = random(screenHeight / 2);
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
    this.rectwidth = 50;
    this.gapSize = birdSize * 4;
    this.x = this.screenWidth + this.rectwidth + 10;
    this.speed = 3;
    this.scored = false;

    this.show = function () {
        fill(53, 107, 27);
        // Top pipe
        rect(this.x, 0, this.rectwidth, this.top);
        rect(this.x - 5, this.top - 20, this.rectwidth + 10, 20);
        fill(76, 159, 41);
        rect(this.x - 5, this.top - 20, this.rectwidth + 10, 2);
        rect(this.x - 5, this.top, this.rectwidth + 10, 2);
        fill(53, 107, 27);

        // Bottom pipe
        rect(this.x, this.top + this.gapSize, this.rectwidth, this.screenHeight);
        rect(this.x - 5, (this.top + this.gapSize), this.rectwidth + 10, 20);
        fill(76, 159, 41);
        rect(this.x - 5, (this.top + this.gapSize), this.rectwidth + 10, 2);
        rect(this.x - 5, (this.top + this.gapSize) + 20, this.rectwidth + 10, 2);
    };

    this.update = function (birdDead) {
        if (!birdDead) {
            this.x -= this.speed;
        }
    };

    this.offscreen = function () {
        if (this.x < this.rectwidth * -1) {
            return true;
        }

        return false;
    };

    this.pastBird = function (bird) {
        if (!bird.dead && bird.x + birdSize / 2 > this.x) {
            if (this.scored == false) {
                this.scored = true;
                return true;
            }
        }

        return false;
    }
}