//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var angle=0;
var myEngine,myWorld;
var ball;
var ground;

function setup() {
    createCanvas(400,400);

    myEngine = Engine.create();
    myWorld = myEngine.world;

var ball_options={
  restitution:1.5,
  frictionAir:0.01,
  
}
ball = Bodies.circle(100,10,20,ball_options)
World.add(myWorld,ball)

ground = Bodies.rectangle(200,370,100,20,{isStatic: true})
World.add(myWorld,ground)

}
 
function draw() 
{
  background("red");
Engine.update(myEngine)
angle= angle + 0.07
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20);
  Body.rotate(ground,angle)
push()
translate(ground.position.x,ground.position.y);
rotate(angle)
  rectMode(CENTER)
  rect(0,0,100,20)

  pop()

}

