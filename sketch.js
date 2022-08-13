
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg, bgImg;
var tree, treeImg;
var gun, gunImg;

function preload() {

  bgImg = loadImage("background.jpg");
  treeImg = loadImage("tree.png");
  gunImg = loadImage("ak42.png");


  
}



function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  
  tree = new Trees(300,450,windowWidth/3,windowHeight-100);
  gun = new BananaGun(300,450,windowWidth/7, windowHeight/3);
  



}


function draw() {
  
  image(bgImg,0,0,windowWidth,windowHeight);


  

  tree.display()
  gun.display()
  Engine.update(engine);
  
}

