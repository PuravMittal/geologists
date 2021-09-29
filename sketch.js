//creates constant
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//creates Engines
var engine, world;

//creates variable
var hammer,rubber1,stone1,iron;
var plane;
var obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6;

function setup(){

    //creates canvas
    var canvas = createCanvas(1200,600);

    //creates own engine
    engine = Engine.create();
    world = engine.world;

    //creates the following variables

    hammer = new Hammer(10,100);

    rubber1 = new Rubber(890,560,70);

    stone1 = new Stone(750,560);

    iron = new Iron (200,560);
   
    plane = new Plane(600,height,1200,20);

    obstacle1 = new Obstacle(350,560,21);
    obstacle2 = new Obstacle(500,560,21);
    obstacle3 = new Obstacle(440,560,21);
    obstacle4 = new Obstacle(373,560,21);
    obstacle5 = new Obstacle(393,560,21);
    obstacle6 = new Obstacle(416,560,21);
}

function draw(){

    //sets the background
    background("lightBlue");

    //updates engine
    Engine.update(engine);

    //displays the following variables
    
    plane.display();
    hammer.display();

    rubber1.display();
    
    stone1.display();

   
    obstacle1.display();
    obstacle2.display();
    obstacle3.display();
    obstacle4.display();
    obstacle5.display();
    obstacle6.display();

    iron.display(); 
    
    
}