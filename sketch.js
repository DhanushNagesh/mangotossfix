
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
const Constraint = Matter.Constraint;


var boyBody
var treeBody
var mango1, mango2,mango3,mango4,mango5,mango6,mango7
var sling
var stoneBody
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	

	boyBody = new Boy(100,630)



	treeBody = new Tree(600,300);

	mango1 = new Mango(600,400,40)
	mango2 = new Mango(450,500,40)
	mango3 = new Mango(550,350,40)
	mango4 = new Mango(750,400,40)
	mango5 = new Mango(600,470,40)
	mango6 = new Mango(770,500,40)
	mango7 = new Mango(680,350,40)
	stoneBody = new Stone(50,610,40)

	sling = new slingShot(stoneBody.body,{x:50,y:610})
	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });
  
	  Engine.run(engine);
	  Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
	stoneBody.display();
	boyBody.display();
	treeBody.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();

	detectCollision(stoneBody,mango1);
	detectCollision(stoneBody,mango2);
	detectCollision(stoneBody,mango3);
	detectCollision(stoneBody,mango4);
	detectCollision(stoneBody,mango5);
	detectCollision(stoneBody,mango6);
	detectCollision(stoneBody,mango7);

	//console.log(stoneBody.Body.r,mango1.Body.r)
  drawSprites();
 
}

function mouseDragged(){
  
    Matter.Body.setPosition(stoneBody.body, {x: mouseX , y: mouseY});
	}
	
function mouseReleased(){
    sling.fly();
   
}

function keyPressed(){
    if(keyCode === 32){
        sling.attach(bird.body);
      
	}
	

	

}


function detectCollision(lstone,lmango){
//	console.log("detect collision")
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	console.log(distance,lmango.r,lstone.r)
	if(distance<=lmango.r+lstone.r){
console.log("if")
		Matter.Body.setStatic(lmango.body,false)
	}


}