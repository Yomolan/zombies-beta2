var shooter;
var edges;
var zombie;
var random_zombie = [];

function preload(){
  
  

}

function setup() {

  createCanvas(1800,900);

  
  
  

  for(var i = 0;i < random_zombie.length;i++){
    var zombie = {
      x:random(0,width),
      y:random(-900,900)
    }

    random_zombie.push(zombie);
  }

  shooter = createSprite(400,400,20,20)
  shooter.shapeColor = "black";

}

function draw() {
  background(208,211,207); 
  edges = createEdgeSprites();
  shooter.collide(edges);

  if(keyDown(UP_ARROW)){
    shooter.y = shooter.y -5;
  }

  if(keyDown(DOWN_ARROW)){
    shooter.y = shooter.y +5;
  }

  if(keyDown(RIGHT_ARROW)){
    shooter.x = shooter.x +5;
  }

  if(keyDown(LEFT_ARROW)){
    shooter.x = shooter.x -5;
  }
  

  rect(zombie.position.x,zombie.position.y,30,30)
  drawSprites();

}

