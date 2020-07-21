var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2;

var track, car1_img, car2_img;

function preload(){
  track = loadImage("../images/track.jpg");
  background_img = loadImage("../images/Bg.png");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car1.png");
  ground = loadImage("../images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth + 30, displayHeight +70);
  background(background_img);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
