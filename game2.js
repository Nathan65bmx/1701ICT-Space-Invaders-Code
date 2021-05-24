function drawMainGame2Screen(){
    drawSprite(playerBarrier);
    background('black');  
    //! Slider Value Effect on Game
    slider.hide();
    let val = slider.value();
    if(val == 1){
        velocityHitX = 2;
        velocityHitY = 0.6;
        shootTimer = 27;
    }else if(val == 2){
        velocityHitX = 3;
        velocityHitY = 0.9;
        shootTimer = 17;
    }else if(val == 3){
        velocityHitX = 4;
        velocityHitY = 1.2;
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
    for (let i = 0; i < enemy4.length; i++){
        enemy4[i].setVelocity(velocityX, velocityY)
        if (enemy4[i].position.x > width-30) {
            velocityX = -velocityHitX;
            velocityY = 0.3;
        }else if (enemy4[i].position.x < 20) {
            velocityX = velocityHitX;
            velocityY = velocityHitY;
        }
    }
    for (let i = 0; i < enemy5.length; i++){
        enemy5[i].setVelocity(velocityX, velocityY)
        if (enemy5[i].position.x > width-30) {
            velocityX = -velocityHitX;
            velocityY = velocityHitY;
        }else if (enemy5[i].position.x < 20) {
            velocityX = velocityHitX;
            velocityY = velocityHitY;
        }
    }
    for (let i = 0; i < enemy6.length; i++){
        enemy6[i].setVelocity(velocityX, velocityY)
        if (enemy6[i].position.x > width-30) {
            velocityX = -velocityHitX;
            velocityY = velocityHitY;
        }else if (enemy6[i].position.x < 20) {
            velocityX = velocityHitX;
            velocityY = velocityHitY;
        }
    }  
    //! Collision   
    bullets.overlap(enemy4, hit1);
    bullets.overlap(enemy5, hit2);
    bullets.overlap(enemy6, hit3);
    if(enemy4.overlap(player)||enemy5.overlap(player)||enemy6.overlap(player) 
        || enemy4.overlap(playerBarrier)||enemy5.overlap(playerBarrier)||enemy6.overlap(playerBarrier)){
        gameOver();
    }
    player.collide(wallLeft);
    player.collide(wallRight);
    //! Level 1 Sprites
    drawSprite(player);
    drawSprites(enemy4);
    drawSprites(enemy5);
    drawSprites(enemy6);
    drawSprites(bullets);
    //! Top Screen Text;
    textSize(35);
    fill('red');
    textFont(font);
    text('SCORE: ' + score, 10, 40); 
    text('HIGHSCORE: ' + highScore, W-460, 40); 
    fill('blue');
    text('LEVEL: ' + level, W/2-170, 40); 
    if(dead == 60){
        gameOver();
    }
}