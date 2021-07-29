var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg,leavesImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("orangeLeaf.png")

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = mouseX

  rabbit.depth +=1

  spawnApples();

  spawnLeaves();

 
  drawSprites();
}

function spawnApples(){
  if (frameCount%140===0){
    var apple = createSprite(600,100,10,10);
  apple.x = Math.round(random(30,350));
  apple.velocityY=2

  apple.addImage(appleImg);

  apple.scale = 0.1

  apple.lifetime=160

  }
}

function spawnLeaves(){
  if (frameCount%140===0){
    var leaves = createSprite(600,100,10,10);
  leaves.x = Math.round(random(10,400));
  leaves.velocityY=1

  leaves.addImage(leavesImg);

  leaves.scale = 0.1

  leaves.lifetime=260

  }
}