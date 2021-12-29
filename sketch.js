
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var ball
var rightSide,leftSide
var ground
function preload()
{
	
}

function setup() {
	createCanvas(1250, 700);
	rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground=new Ground(width/2,670,width,20)
	leftSide=new Ground(900,600,20,120)
	rightSide=new Ground(1100,600,20,120)

	


 var ball_options={
	 isStatic:false,
	 restitution:0.3,
	 friction:0,
	 density:1.2


 }
ball=Bodies.circle(100,10,20,ball_options)
World.add(world,ball)


Engine.run(engine);
}


function draw() {
	background("purple")

	rectMode(CENTER);
	ellipseMode(RADIUS)
	fill("yellow")
	ellipse(ball.position.x,ball.position.y,20)


	rightSide.display()
	leftSide.display()
	ground.display()

	//background(0);
	Engine.update(engine)
	
	
 
}


function keyPressed(){
	if(keyCode===UP_ARROW){
   Matter.Body.applyForce(ball,ball.position,{x:80,y:-80})

	}


}
