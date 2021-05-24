// Enemy Movement
let velocityX = 2;
let velocityY = 0;
let velocityHitX, velocityHitY;
// Score
let score = 0;
let level = 1;
let highScore = 65000; 
let dead = 0;
//Shoot Delay
let shootTimer; 

function shoot(){
    bullet = createSprite(player.position.x, player.position.y);
    bullet.addImage(bulletImg);
    bullet.setSpeed(10+player.getSpeed(), 270);
    bullets.add(bullet);
}

function drawMainGameScreen(){
    drawSprite(playerBarrier);
    background('black');  
    //! Slider Value Effect on Game
    slider.hide();
    let val = slider.value();
    if(val == 1){
        velocityHitX = 1;
        velocityHitY = 0.3;
        shootTimer = 27;
    }else if(val == 2){
        velocityHitX = 2;
        velocityHitY = 0.6;
        shootTimer = 17;
    }else if(val == 3){
        velocityHitX = 3;
        velocityHitY = 0.9;
        shootTimer = 10;
    }
    //! Background Video
    image(mainGameVideo, 0, 0, W, H);
    if (currentState == MAIN_GAME){
        mainGameVideo.play();
    }
    //! Shoot Delay
    if(shootTime < shootTimer){
        shootTime++;
        if(shootTime == shootTimer){
            shootTime = shootTimer;
        }
    }
    //! Enemey's Creation
    for (let i = 0; i < enemy1.length; i++){
        enemy1[i].setVelocity(velocityX, velocityY)
        if (enemy1[i].position.x > width-30) {
            velocityX = -velocityHitX;
            velocityY = 0.3;
        }else if (enemy1[i].position.x < 20) {
            velocityX = velocityHitX;
            velocityY = velocityHitY;
        }
    }
    for (let i = 0; i < enemy2.length; i++){
        enemy2[i].setVelocity(velocityX, velocityY)
        if (enemy2[i].position.x > width-30) {
            velocityX = -velocityHitX;
            velocityY = velocityHitY;
        }else if (enemy2[i].position.x < 20) {
            velocityX = velocityHitX;
            velocityY = velocityHitY;
        }
    }
    for (let i = 0; i < enemy3.length; i++){
        enemy3[i].setVelocity(velocityX, velocityY)
        if (enemy3[i].position.x > width-30) {
            velocityX = -velocityHitX;
            velocityY = velocityHitY;
        }else if (enemy3[i].position.x < 20) {
            velocityX = velocityHitX;
            velocityY = velocityHitY;
        }
    }
    //! Collision   
    bullets.overlap(enemy1, hit1);
    bullets.overlap(enemy2, hit2);
    bullets.overlap(enemy3, hit3);
    if(enemy1.overlap(player)||enemy2.overlap(player)||enemy3.overlap(player) 
        || enemy1.overlap(playerBarrier)||enemy2.overlap(playerBarrier)||enemy3.overlap(playerBarrier)){
        gameOver();
    }
    player.collide(wallLeft);
    player.collide(wallRight);
    //! Level 1 Sprites
    drawSprite(player);
    drawSprites(enemy1);
    drawSprites(enemy2);
    drawSprites(enemy3);
    drawSprites(bullets);
    //! Top Screen Text;
    textSize(35);
    fill('red');
    textFont(font);
    text('SCORE: ' + score, 10, 40); 
    text('HIGHSCORE: ' + highScore, W-460, 40); 
    fill('blue');
    text('LEVEL: ' + level, W/2-170, 40); 
    if(dead == 30){
        currentState == MAIN_GAME2
        level++;
        nextLevel();
    }
}

function hit1(bullets, enemy1){
    enemy1.remove();
    bullets.remove();
    hitSound.play();
    score+= 100;
    dead ++;
}

function hit2(bullets, enemy2){
    enemy2.remove();
    bullets.remove();
    hitSound.play();
    score+= 200;
    dead ++;
}

function hit3(bullets, enemy3){
    enemy3.remove();
    bullets.remove();
    hitSound.play();
    score+= 300;
    dead ++;
}

function nextLevel(){
    velocityX = 1.5;
    velocityY = 0;
}

