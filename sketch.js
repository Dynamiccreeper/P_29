const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var backgroundImg,platform;
var box, slingShot;
var ground;


function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    
    engine = Engine.create();
    world = engine.world;


 ground=new Ground (600,390,1200,5)
    //platform = new Ground(150, 305, 300, 170);

    b1 = new Box(700,320,70,70);
    b2 = new Box(900,320,70,70);
    b3 = new Box(900, 280,70,70);
    b4 = new Box(1000,320,70,70);
    b5 = new Box(1000,280,70,70);
    b6 = new Box(800,320,70,70);
    b7 = new Box(800, 280,70,70);
    b8 =  new Box(1100,320,70,70);
    b9 = new Box(1100,280,70,70);
    b10 = new Box(760,100,70,70);


    box = new Hex(200,320);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(box.body,{x:200, y:320});
}

function draw(){
    background("blue");
    Engine.update(engine);
    strokeWeight(4);
    //ground.display();
   // platform.display();
    box.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
   b2.display();
    b1.display();

   
ground.display();

    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(box.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){

    if(keyCode === 32){

        slingshot.attach(box.body);

    }
}
