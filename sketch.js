var database;
var gameState = 0;
var playerCount = 0;
var player;
var game;
var form;
var car1, car2, car3, car4, cars;
var allPlayers;
var car1I, car2I, car3I, car4I, trackI, groundI;

function preload(){
  trackI = loadImage("images/track.jpg");
  car1I = loadImage("images/car1.png");
  car2I = loadImage("images/car2.png");
  car3I = loadImage("images/car3.png");
  car4I = loadImage("images/car4.png");

}

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth,displayHeight);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");

  console.log(gameState);

  if(playerCount == 4){
    game.update(1);
  }

  if(gameState == 1){
    game.play();
  }
}
