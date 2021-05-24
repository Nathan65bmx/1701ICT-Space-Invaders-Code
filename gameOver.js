function gameOver(){
    velocityX = 0;
    velocityY = 0;
    player.remove();
    bullet.remove();
    shotSound.pause();
    //! Text
    textSize(65);
    fill('red');
    textFont(fontDead);
    text('g a m e  o v e r', 150, 170); 
    //! Buttons
    mainMenuButton();
    scoreButton2();
}

function mainMenuButton(){
    noStroke();
	fill (0, 0, 200);
	ellipse (W/2, H/2-175, 250, 170);
	if ((mouseX > 420) && (mouseX < 680) && (mouseY > 220) && (mouseY < 390) && (mouseClicked)){
		fill (0, 75, 200);
		ellipse (W/2, H/2-175, 250, 170);
        fill(255);
        textFont(font);
	    textSize(50);
        text("MENU", W/2-90, H/2-160);
	}else {
		fill (0, 75, 200);
	    ellipse (W/2, H/2-200, 250, 170);
        fill(255);
        textFont(font);
	    textSize(50);
	    text("MENU", W/2-90, H/2-185);
    }
}

function scoreButton2(){
    noStroke();
	fill (0, 0, 200);
	ellipse (W/2,H/2+25, 250, 170);
	if ((mouseX > 420) && (mouseX < 680) && (mouseY > 420) && (mouseY < 590) && (mouseClicked)){
		fill (0, 75, 200);
		ellipse (W/2, H/2+25, 250, 170);
        fill(255);
        textFont(font);
	    textSize(50);
        text("SCORE", W/2-110, H/2+30);
	}else {
		fill (0, 75, 200);
	    ellipse (W/2, H/2, 250, 170);
        fill(255);
        textFont(font);
	    textSize(50);
	    text("SCORE", W/2-110, H/2+15);
    }    
}