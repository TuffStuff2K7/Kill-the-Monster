const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

b1 = [], b2 = [], b3 = [];

function preload() {
  bg = loadImage("images/gamingbackground2.png");
}

function setup() {
	
  createCanvas(1600, 800);

  engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

  ground = new Ground(width/2, height - 20 , width + 20, 45);

  hero = new Hero(370,300,250);

  rope = new Rope(hero.body,{x:400,y:100})
    
  for(i = 0; i < 9; i++){
		b1[i] = new Block(800, 300 - i*100);
	}
  for(i = 0; i < 7; i++){
		b2[i] = new Block(900, 300 - i*100);
	}
  for(i = 0; i < 8; i++){
		b3[i] = new Block(1050, 300 - i*100);
	}

  monster = new Monster(1300,700,300);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();

  for(i = 0; i < 9; i++){
		b1[i].display();
	}
  for(i = 0; i < 7; i++){
		b2[i].display();
	}
  for(i = 0; i < 8; i++){
		b3[i].display();
	}

  hero.display();
  monster.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}


