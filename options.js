function drawOptionsScren(){
    background('black');
    //! Options Text
    textFont(font);
    textSize(100);
    fill('white');
    textAlign(CENTER);
    text ("OPTIONS :", W/2, H/2-300);
    //! Buttons
    mainMenuButton2();
    playButton2();
    //! GUI Slider
    let val = slider.value();
    slider.show();
    slider.position(W/2-50, H/2+250);
    //! Difficulty text
    textSize(50);
    fill(3, 173, 252);
    text("DIFFICULTY: " + val, W/2, H/2+200);
}

function mainMenuButton2(){
    noStroke();
	fill (0, 0, 200);
	ellipse (W/2 ,H/2-175, 250, 170);
	if ((mouseX > 420) && (mouseX < 680) && (mouseY > 220) && (mouseY < 390) && (mouseClicked)){
		fill (0, 75, 200);
		ellipse (W/2, H/2-175, 250, 170);
        fill(255);
        textFont(font);
	    textSize(50);
        text("MENU", W/2, H/2-160);
	}else {
		fill (0, 75, 200);
	    ellipse (W/2, H/2-200, 250, 170);
        fill(255);
        textFont(font);
	    textSize(50);
	    text("MENU", W/2, H/2-185);
    }
}

function playButton2(){
    noStroke();
	fill (0,0,200);
	ellipse (W/2, H/2+25, 250, 170);
	if ((mouseX > 420) && (mouseX < 680) && (mouseY > 420) && (mouseY < 590) && (mouseClicked)){
		fill (0, 75, 200);
		ellipse (W/2, H/2+25, 250, 170);
        fill(255);
        textFont(font);
	    textSize(50);
        text("PLAY", W/2, H/2+30);
	}else {
		fill (0, 75, 200);
	    ellipse (W/2, H/2, 250, 170);
        fill(255);
        textFont(font);
	    textSize(50);
	    text("PLAY", W/2, H/2+15);
    }
}
