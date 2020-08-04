var canvas, backgroundImage;
var enemy;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var enemyGroup;
var form, player, game;
var position;
var cars, car1, car2;

var track, car1_img, car2_img;

function preload(){
  track = loadImage("../images/track.jpg");
  background_img = loadImage("../images/Bg.png");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car1.png");
  ground = loadImage("../images/ground.png");
  enemy_img = loadImage("images/enemy.png");
}

function setup(){
  canvas = createCanvas(displayWidth + 30, displayHeight + 70);
  background(background_img);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  enemyGroup = new Group();
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

  spawnEnemys();
}


function spawnEnemys(){
if (frameCount % 20 === 0) {
  var enemy = createSprite(800,displayHeight,40,10);
  //enemy.y = Math.round(random(0,10));
  enemy.x = Math.round(random(300,800));
  enemy.y = Math.round(random(displayHeight,-displayHeight-200));

  enemy.velocityY = -5;
  enemy.addImage(enemy_img);
  enemy.scale = 0.5;
  
   //assign lifetime to the variable
   //enemy.lifetime = 200;
  
  //add each cloud to the group
  enemyGroup.add(enemy);
}
}
