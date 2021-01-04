var helicopterIMG, helicopterSprite, packageSprite,packageIMG;

var packageBody,ground, reddrop1, reddrop2, reddrop3;

var drop1, drop2, drop3;

const Engine = Matter.Engine;

const World = Matter.World;

const Bodies = Matter.Bodies;

const Body = Matter.Body;

function preload(){

	helicopterIMG=loadImage("helicopter.png");

	packageIMG=loadImage("package.png");

}

function setup() {

	createCanvas(800, 700);

	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	packageSprite.x = helicopterSprite.x;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	drop1 = createSprite(400,655,200,20);
	drop1.shapeColor = color(255,0,0);

	drop2 = createSprite(drop1-110,615,20,100);
	drop2.shapeColor = color(255,0,0);

	drop3 = createSprite(drop1+110,615,20,100);
	drop3.shapeColor = color(255,0,0);

	engine = Engine.create();

	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution : 0.7, isStatic : true});
	World.add(world, packageBody);

	reddrop1 = Bodies.rectangle(width/2,655,200,20, {isStatic : true});
	World.add(world,reddrop1);

	reddrop2 = Bodies.rectangle(290,615,20,100, {isStatic : true});
	World.add(world,reddrop2);

	reddrop3 = Bodies.rectangle(510,615,20,100, {isStatic : true});
	World.add(world,reddrop3);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	
	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);

  background(0);

  if(keyCode === RIGHT_ARROW){
	helicopterSprite.x = helicopterSprite.x + 1;
	packageSprite.x = packageSprite.x + 1;
  }

	if(keyCode === LEFT_ARROW){
	helicopterSprite.x = helicopterSprite.x -1;
	packageSprite.x = packageSprite.x -1;
  }

  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;

  drop1.x = reddrop1.position.x;
  drop1.y = reddrop1.position.y;

  drop2.x = reddrop2.position.x;
  drop2.y = reddrop2.position.y;

  drop3.x = reddrop3.position.x;
  drop3.y = reddrop3.position.y;

  keyPressed();

  drawSprites();

}

function keyPressed() {

 if (keyCode === DOWN_ARROW) {

	Matter.Body.setStatic(packageBody, isStatic = false);    
  }

}