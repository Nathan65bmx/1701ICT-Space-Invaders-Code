function mouseClicked(){
    //! Main Menu Buttons
    if(currentState == MAIN_MENU && (mouseX > 400) && (mouseX < 700) && (mouseY > 300) && (mouseY < 500) && (mouseClicked)){ 
    currentState = OPTIONS;
    } else if(currentState == MAIN_MENU && (mouseX > 400) && (mouseX < 700) && (mouseY > 550) && (mouseY < 750) && (mouseClicked)){ 
    currentState = SCORE;
    //! option buttons 
    }else if(currentState == OPTIONS && (mouseX > 420) && (mouseX < 680) && (mouseY > 220) && (mouseY < 390) && (mouseClicked)){ 
    currentState = MAIN_MENU;
    }else if(currentState == OPTIONS && (mouseX > 420) && (mouseX < 680) && (mouseY > 420) && (mouseY < 590) && (mouseClicked)){ 
    currentState = MAIN_GAME;
    //! Game Over Buttons
    }else if(currentState == MAIN_GAME && (mouseX > 420) && (mouseX < 680) && (mouseY > 220) && (mouseY < 390) && (mouseClicked)){ 
    currentState = MAIN_MENU;
    }else if(currentState == MAIN_GAME && (mouseX > 420) && (mouseX < 680) && (mouseY > 420) && (mouseY < 590) && (mouseClicked)){ 
    currentState = SCORE;
    }else if(currentState == MAIN_GAME2 && (mouseX > 420) && (mouseX < 680) && (mouseY > 220) && (mouseY < 390) && (mouseClicked)){ 
    currentState = MAIN_MENU;
    }else if(currentState == MAIN_GAME2 && (mouseX > 420) && (mouseX < 680) && (mouseY > 420) && (mouseY < 590) && (mouseClicked)){ 
    currentState = SCORE;
    //! Leaderboard Buttons
    }else if(currentState == SCORE && (mouseX > 25) && (mouseX < 275) && (mouseY > 725) && (mouseY < 900) && (mouseClicked)){ 
    currentState = MAIN_MENU;
    }
}

function keyPressed(){
    //! Options Screen
    if(keyCode == 27 && currentState == MAIN_GAME){
    currentState = OPTIONS;
    }
    if(keyCode == 27 && currentState == MAIN_GAME2){
    currentState = OPTIONS;
    }
    //! Ship Movement
    if(keyCode == RIGHT_ARROW){
    player.setSpeed(5, 0);
    }else if(keyCode == LEFT_ARROW){
    player.setSpeed(5, 180);
    }else if(keyCode == DOWN_ARROW){
    player.setSpeed(0, 0);
    }
    //! Shooting
    if(shootTime == shootTimer && keyCode == UP_ARROW){
    shoot();
    shotSound.play();
    shootTime = 0;
    }else if (shootTime < shootTimer-1){
    }
}