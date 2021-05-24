let namesData;

function drawScoreScreen(){
    slider.hide();
    background('black')
    //! Top Scores
    textFont(font);
    textSize(100);
    fill('white');
    textAlign(CENTER);
    text ("TOP SCORES", W/2, H/2-300);
    //! JSON File Input
    let leaderboard = namesData.leaderboard;
    for(let i = 0; i < leaderboard.length; i++){
        let name = leaderboard[i].name;
        let scores = leaderboard[i].score;
        let pos = leaderboard[i].position;
        textSize(50);
        textAlign(RIGHT);
        fill(3, 173, 252);
        text(name +"   " + scores, pos.x, pos.y);
    }
    //! Back Button
    backButton();
    //! Players score
    textFont(fontDead);
    textSize(30);
    fill('red');
    text ("your score : "+ score, W/2+30, H/2+300);
}

function backButton(){
    noStroke();
    fill (0, 0, 200);
    textAlign(CENTER);
	ellipse (150, 825, 250, 170);
	if ((mouseX > 25) && (mouseX < 275) && (mouseY > 725) && (mouseY < 900) && (mouseClicked)){
		fill (0, 75, 200);
		ellipse (150, 825, 250, 170);
        fill(255);
        textFont(font);
	    textSize(50);
        text("BACK", 150, 835);
	}else {
		fill (0, 75, 200);
	    ellipse (150, 800, 250, 170);
        fill(255);
        textFont(font);
	    textSize(50);
	    text("BACK", 150, 810);
    }
}
