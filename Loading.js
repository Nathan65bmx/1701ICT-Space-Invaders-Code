let timer = -5;
let loadingBar = 250;

function drawLoadingScreen (){
    textSize(60);
    slider.hide();
    fill('red');
    timer += 0.3
    if (timer >= 100){
    timer=100
    }
    textFont(font);
    text (int(timer) + "%", W/2+100, H/2+50);
    text ("Loading", W/2-300, H/2+50)
    strokeWeight(20);
    stroke("red");  
    line(260, H/2, loadingBar, H/2);
    loadingBar+= 1.68;
    if (loadingBar >= W/2+300){
    loadingBar=W/2+300
    }
}