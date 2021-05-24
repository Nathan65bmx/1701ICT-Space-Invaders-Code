// Window Specs
const W = 1100;
const H = 1000; 
// Screen Constants 
const LOADING = 0;
const MAIN_MENU = 1;
const MAIN_GAME = 2;
const MAIN_GAME2 = 3;
const SCORE = 4;
const OPTIONS  = 5;
const N = 10;
// Initial Screen State
let currentState = LOADING;
// Different Screen Canvases 
let loadingCanvas, mainMenuCanvas, mainGameCanvas, mainGame2Canvas, leaderboardCanvas;
// Timer
let time = 60;
let shootTime = 0;
// Main Menu Video
let playing = false;
let completition;
// Images
let moonImg, playerImg, enemy1Img, enemy2Img, enemy3Img, bulletImg;
// Sprites
let player, playerBarrier, enemy1, enemy2, enemy3;
let start = 150;
let downY = 50;
let bullets, wallLeft, wallRight;
// Font
let font, fontDead;
// Sounds
let loadingSound, mainMenuSound, hitSound, shotSound;
//Slider
let slider;

function preload(){
  //! Images
  moonImg = loadImage('images/moon.png');
  playerImg = loadImage('images/player001.png');
  bulletImg = loadImage ('images/bullet.png');
  //! Font
  font = loadFont('font/space age.ttf');
  fontDead = loadFont('font/Dream MMA.ttf');
  //! Sounds
  loadingSound = loadSound('sounds/loading.mp3');
  mainMenuSound = loadSound('sounds/main_menu.mp3');
  shotSound = loadSound('sounds/lazer.mp3');
  hitSound = loadSound('sounds/hit.mp3');
  //! JSON
  namesData = loadJSON('json/text.json');
}

function setup() {
  //! Screens
  loadingCanvas = createCanvas(W, H);
  mainMenuCanvas = createCanvas(W, H);
  mainGameCanvas = createCanvas(W, H);
  leaderboardCanvas = createCanvas(W, H);
  //! Video
  mainMenuVideo = createVideo('videos/mainMenu2.mp4');
  mainMenuVideo.hide();
  mainGameVideo = createVideo('videos/mainGame2.mp4');
  mainGameVideo.hide();
  //! Sounds
  loadingSound.play();
  // loadingSound.setVolume(0);
  // mainMenuSound.setVolume(0);
  // shotSound.setVolume(0);
  // hitSound.setVolume(0);
  //! Sprites
  player = createSprite(W/2, 900);
  player.addImage(playerImg);
  playerBarrier = createSprite(0, 900, 11000, 100);
  playerBarrier.shapeColor = (212, 212, 212, 0);
  playerBarrier.immovable = true;
  wallLeft = createSprite(W, H, 3, 300);
  wallLeft.shapeColor = ('black');
  wallLeft.immovable = true; 
  wallRight = createSprite(0, H, 3, 300);
  wallRight.shapeColor = ('black');
  wallRight.immovable = true;
  //! Enemys
  enemy1 = new Group();
  for (let i = 0; i < N; i++){
    let e1 = createSprite (i*80+80, 270);
    e1.addAnimation('moving1','images/enemy1.png', 'images/enemy8.png');
    enemy1.add(e1);
  }
  enemy2 = new Group();
  for (let i = 0; i < N; i++){
    let e2 = createSprite (i*80+80, 210);
    e2.addAnimation('moving2','images/enemy9.png', 'images/enemy16.png');
    enemy2.add(e2);
  }
  enemy3 = new Group();
  for (let i = 0; i < N; i++){
    let e3 = createSprite (i*80+80, 130);
    e3.addAnimation('moving3','images/enemy17.png', 'images/enemy24.png');
    enemy3.add(e3);
  }
  enemy4 = new Group();
  for (let i = 0; i < N; i++){
    let e4 = createSprite (i*80+80, 270);
    e4.addAnimation('moving4','images/enemy1.png', 'images/enemy8.png');
    enemy4.add(e4);
  }
  enemy5 = new Group();
  for (let i = 0; i < N; i++){
    let e5 = createSprite (i*80+80, 210);
    e5.addAnimation('moving5','images/enemy9.png', 'images/enemy16.png');
    enemy5.add(e5);
  }
  enemy6 = new Group();
  for (let i = 0; i < N; i++){
    let e6 = createSprite (i*80+80, 130);
    e6.addAnimation('moving6','images/enemy17.png', 'images/enemy24.png');
    enemy6.add(e6);
  }
  //! Bullet
  bullets = new Group();
  //! Slider
  slider = createSlider(1, 3, 1, 1);
}

function draw() {
  background('black');
  if(currentState == LOADING){
    drawLoadingScreen();
  } else if(currentState == MAIN_MENU){
    drawMainMenuScreen();
  } else if(currentState == MAIN_GAME){
    drawMainGameScreen();
  } else if(currentState == MAIN_GAME2){
    drawMainGame2Screen();
  }  else if(currentState == SCORE){
    drawScoreScreen();
  } else if(currentState == OPTIONS){
    drawOptionsScren();
  }
  if(frameCount == time*8){ //8
    currentState = MAIN_MENU;
    mainMenuSound.play();
    mainMenuSound.loop();
  }
  if(dead == 30){
    currentState = MAIN_GAME2;
  }
}


