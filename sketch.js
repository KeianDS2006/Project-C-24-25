
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rect1, rect2, rect3;
var ground;
var paper, paperImg;
var dustbin, dustbinImg;

function preload(){
	dustbinImg=loadImage("dustbingreen.png");
	paperImg=loadImage("paper.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	rect1 = new Dustbin(550,550,25,200);
    rect2 = new Dustbin(700,550,25,200);
	rect3 = new Dustbin(625,637.5,150,25);
	ground= new Ground(400,650,800,10);
	dustbin = createSprite(625,540,250,185);
	paper = new Paper(20,645,20);
	dustbin.addImage(dustbinImg);
	dustbin.scale=0.6;
	Engine.run(engine);
  
}


function draw() {
  background("white");
  Engine.update(engine);
  rectMode(CENTER);
  paper.display();
  paper.scale=0.5;
  rect3.display();
  rect1.display();
  rect2.display();
  ground.display();
  drawSprites();
 
} 
function keyPressed(){
	if(keyDown("UP")){
	Matter.Body.applyForce(paper.body, paper.body.position, {x:70, y:-75});
	}
}



