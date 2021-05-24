// Moon Bouncing
let moonX = 300;
let moonY = 400;
let moonXDir = 4;
let moonYDir = 4;

function drawMainMenuScreen (){
  slider.hide();
  //! Background Video
  if (currentState == MAIN_MENU){
    image(mainMenuVideo, 0, 0, W, H);
    mainMenuVideo.play();
  }
  //! Moon Bouncing
  imageMode(CENTER);
  image(moonImg, moonX, moonY, 400, 420);
  moonX += moonXDir;
  moonY += moonYDir;
  if (moonX >= W-190 || moonX <= 190){
    moonXDir *= -1;
  }  
  if (moonY >= H-190 || moonY <= 190){
    moonYDir *= -1;
  }
  //! Main Menu Text
  textFont(font);
  textSize(80);
  fill('red');
  textAlign(CENTER);
  text ("MAIN MENU", W/2, H/2-300);
  playButton();
  scoreButton();
}

function playButton(){
  noStroke();
	fill (0, 0, 200);
	ellipse (W/2, H/2-75, 300,200);
	if ((mouseX > 400) && (mouseX < 700) && (mouseY > 300) && (mouseY < 500) && (mouseClicked)){
		fill (0, 75, 200);
		ellipse (W/2,H/2-75, 300, 200);
		fill(255);
	  textSize(60);
    text("PLAY", W/2, H/2-65);
	}else {
		fill (0, 75, 200);
	  ellipse (W/2, H/2-100, 300, 200);
		fill(255);
	  textSize(60);
	  text("PLAY", W/2, H/2-90);
  }
}

function scoreButton(){
  noStroke();
	fill (0, 0, 200);
	ellipse (W/2, H/2+175, 300, 200);
	if ((mouseX > 400) && (mouseX < 700) && (mouseY > 550) && (mouseY < 750) && (mouseClicked)){
		fill (0, 75, 200);
		ellipse (W/2, H/2+175, 300, 200);
		fill(255);
	  textSize(60);
    text("SCORE", W/2, H/2+185);
	}
	else {
		fill (0, 75, 200);
	  ellipse (W/2, H/2+150, 300, 200);
		fill(255);
	  textSize(60);
	  text("SCORE", W/2, H/2+150);
  }
}
