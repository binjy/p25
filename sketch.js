
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var ground,paperBall,dustbin,normalGround,dustbin2,dustbin3,line,line2,line3
var groundObject

function preload(){
  
  

}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;


	


	//Create the Bodies Here.
   ground = new Ground(800,690,1600,10)
   
  line = createSprite(1000,665,10,50)
  line.shapeColor = "white"
  line2 = createSprite(1105,665,10,50)
  line2.shapeColor = "white"
  line3 = createSprite(1050,685,100,10)
  line3.shapeColor = "white"

 paperBall = new Paper(200,200,60,60)

   dustbin = new DustBin(1010,660,30,50)
  dustbin2 = new DustBin(1150,660,30,50)
   dustbin3 = new DustBin(1070,680,130,10)
  // fill("red")
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

 ground.display()
 // papaerBall.display()
 dustbin.display()
 dustbin2.display()
dustbin3.display()
 //paperObject.display()
paperBall.display()




//groundObject.display()
  drawSprites();
 
}



function keyPressed() {
  
if (keyCode ===UP_ARROW) {
  Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:250,y:-210})
}


}