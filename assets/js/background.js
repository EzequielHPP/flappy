/**
 * Created by ezequielpereira on 05/03/2017.
 */

function bg(screenWidth, screenHeight) {

    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
    this.blocks = [];

    this.showBg = function () {
        // ground
        fill(99, 61, 12);
        rect(0, this.screenHeight - 40, this.screenWidth, 40);

        // grass
        fill(67, 160, 17);
        rect(0, this.screenHeight - 40, this.screenWidth, 20);

    };

}