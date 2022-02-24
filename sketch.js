const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ball

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  button1=createImg("up.png")
  button1.position(40,40)
  button1.size(50,50)
  button1.mouseClicked(vforce)

  button2=createImg("right.png")
  button2.position(220,40)
  button2.size(50,50)
  button2.mouseClicked(hforce)
  
  ground =new Ground(200,380,400,40);
  right = new Ground(380,200,40,400);
  left = new Ground(20,200,40,400);
  top_wall = new Ground(200,20,400,40);
  var options={
    restitution:0.95
  }
  ball = Bodies.circle(200,100,20,options)
  World.add(world,ball)
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  fill ("yellow")
  ellipse(ball.position.x,ball.position.y,20,20)
}
function hforce(){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})

}
function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.0,y:-0.05})
  
  }
  