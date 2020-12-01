const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400, 790, 800, 20);

  for(var k = 0; k <= width; k = k + 80){
    divisions.push(new Division(k, height - divisionHeight / 2, 10, divisionHeight));
  }

  for(var a = 40; a <= width; a = a + 50){
    plinkos.push(new Plinko(a, 100, 15))
  }

  for(var b = 15; b <= width-10; b = b + 50){
    plinkos.push(new Plinko(b, 200, 15))
  }

  for(var c = 40; c <= width - 10; c = c + 50){
    plinkos.push(new Plinko(c, 300, 15))
  }

}

function draw() {
  background(0);
  Engine.update(engine);

  for(var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }

  ground.display();

  for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
  }

  if(frameCount % 30 === 0){
    particle = new Particle(random(130, 400), 0, 10, random(0, 360));
    console.log(particle.body.position);
    particles.push(particle);
  }

  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }
}