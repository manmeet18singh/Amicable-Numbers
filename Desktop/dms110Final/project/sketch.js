var ship;

function setup() {
    createCanvas(windowWidth, windowHeight);

    ship = createSprite(100, windowHeight / 2);
    ship.addAnimation("idle", '../addons/Sprites/ShipIdle.png');

    ship.addAnimation("attack", '../addons/Sprites/ShipAttack/sprite_00.png', '../addons/Sprites/ShipAttack/sprite_01.png', '../addons/Sprites/ShipAttack/sprite_02.png', '../addons/Sprites/ShipAttack/sprite_03.png', '../addons/Sprites/ShipAttack/sprite_04.png', '../addons/Sprites/ShipAttack/sprite_05.png', '../addons/Sprites/ShipAttack/sprite_06.png', '../addons/Sprites/ShipAttack/sprite_07.png', '../addons/Sprites/ShipAttack/sprite_08.png', '../addons/Sprites/ShipAttack/sprite_09.png', '../addons/Sprites/ShipAttack/sprite_10.png', '../addons/Sprites/ShipAttack/sprite_11.png', '../addons/Sprites/ShipAttack/sprite_12.png', '../addons/Sprites/ShipAttack/sprite_13.png', '../addons/Sprites/ShipAttack/sprite_14.png', '../addons/Sprites/ShipAttack/sprite_15.png');

}

function draw() {
    background(98, 203, 249);

    ship.scale = .04;

    if (ship.position.x < 30) {
        ship.position.x = 30;
    }
    if (ship.position.x > windowWidth - 30) {
        ship.position.x = windowWidth - 30;
    }

    if (ship.position.y < 30) {
        ship.position.y = 30;
    }
    if (ship.position.y > windowHeight - 30) {
        ship.position.y = windowHeight - 30;
    }


    ship.changeAnimation("idle");

    //    if (keyDown('d')) {
    //        if (keyDown('SHIFT')) {
    //            ship.velocity.x = 8;
    //            ship.velocity.y = 8;
    //        } else {
    //            ship.velocity.x = 6;
    //        }
    //    }
    //    if (keyDown('a')) {
    //        if (keyDown('SHIFT')) {
    //            ship.velocity.x = -8;
    //        } else {
    //            ship.velocity.x = -6;
    //        }
    //    }
    if (keyDown('w')) {
        if (dist(mouseX, mouseY, ship.position.x, ship.position.y) >= 10) {
            ship.velocity.x = (camera.mouseX - ship.position.x - 20) / 20;
            ship.velocity.y = (camera.mouseY - ship.position.y - 20) / 20;
        }
    }
    if (keyWentUp('w')) {
        ship.velocity.x = driftX((camera.mouseX - ship.position.x - 20) / 20);
        ship.velocity.y = driftY((camera.mouseY - ship.position.y - 20) / 20);
    }
    //rotation: if the mouse is behind the ship, I won't be able to rotate. Right now, rotates based on the middle of the sprite instead of front/head, so sprite art front/head should be drawn at the middle

    rotDeg = Math.atan2(mouseY - ship.position.y - 10, mouseX - ship.position.x - 10) * 180 / Math.PI;
    ship.rotation = rotDeg;


    //dash attack: hold down for a while and release to attack
    if (keyDown('SPACE')) {
        ship.changeAnimation("attack");
        if (ship.animation.getFrame() == 15) {
            ship.animation.stop();
        }
        //        ship.looping = false;
    }
    if (keyWentUp('space')) {
        ship.setSpeed(20, rotDeg);
        //        ship.changeAnimation("idle");
    }

    //                    ship.animation.play();

    drawSprites();
}

function driftX(currentVel) {
    this.currentSpeed = currentVel;
    if (this.currentSpeed > 0) {
        this.currentSpeed--;
    }
    return this.currentSpeed;
}

function driftY(currentVel) {
    this.currentSpeed = currentVel;
    if (this.currentSpeed > 0) {
        this.currentSpeed--;
    }
    return this.currentSpeed;

}