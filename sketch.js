var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var roof
var rope1,rope2,rope3,rope4,rope5
var bob1,bob2,bob3,bob4,bob5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1200,800);


	engine = Engine.create();
	world = engine.world;

	bob1=new Bob(380,650);
	bob2=new Bob(440,650);
	bob3=new Bob(500,650);
	bob4=new Bob(560,650);
	bob5=new Bob(620,650);

	roof=new Roof(500,100);

	
	rope1=new Rope(bob1.body,roof.body,-240,0);
	rope2=new Rope(bob2.body,roof.body,-120,0);
	rope3=new Rope(bob3.body,roof.body,0,0);
	rope4=new Rope(bob4.body,roof.body,120,0);
	rope5=new Rope(bob5.body,roof.body,240,0);
	console.log(rope1)
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	
	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,0,100);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===LEFT_ARROW){
	 Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-10,y:0})
	 //rope1.fall();
	}
}



