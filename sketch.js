var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 



 if (keyCode === DOWN_ARROW) {
    class packageSprite {
		constructor(x, y, width, height) {
		  var options = {
			  'restitution':0.8,
			  'friction':0.3,
			  'density':1.0
		  }
		  this.body = Bodies.rectangle(x, y, width, height, options);
		  this.width = width;
		  this.height = height;
		  
		  World.add(world, this.body);
		}
		display(){
		  var pos =this.body.position;
		  var angle = this.body.angle;
		  push();
		  translate(pos.x, pos.y);
		  rotate(angle);
		  rectMode(CENTER);
		  fill(255);
		  rect(0, 0, this.width, this.height);
		  pop();
		}
	  };
	  
  }
}



