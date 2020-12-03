const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world
var box1,box2,box3,box4,box5, ground

function setup(){
createCanvas(1000,500);
engine=Engine.create();
world=engine.world;
ground=new Ground(width/2,470,1000,20);
box1=new Box(600,450,70,70);
box2=new Box(800,450,70,70);
box3=new Box(600,390,70,70);
box4=new Box(800,390,70,70);
box5=new Box(700,320,70,70);
pig1=new Pig(700,450);
pig2=new Pig(700,390)
log1=new Log(700,420,300,PI/2);
log2=new Log(700,350,300,PI/2);
log3=new Log(650,320,150,PI/7);
log4=new Log(750,320,150,-PI/7);
bird=new Bird(200,200)


}

function draw(){
background("aqua");
Engine.update(engine);
ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
pig1.display();
pig2.display();
log1.display();
log2.display();
log3.display();
log4.display();
bird.display();


}


