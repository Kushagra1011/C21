var car, wall;

function setup() {
  createCanvas(1200,800);
  /*fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;*/

  car = createSprite(200,400,40,40); 
  car.shapeColor = "yellow";
  car.velocityX=5; 

  wall = createSprite(1000,400,20,100);
  wall.shapeColor="blue"; 

}

function draw() {
  background(0,0,0);  
  /*movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;*/

  /*if(isTouching(car,wall)){
    car.shapeColor = "blue";
    wall.shapeColor="yellow";
    car.velocityX=0; 
  }
  else{
    car.shapeColor = "yellow";
    wall.shapeColor="blue";
  }*/
  bounceOff(car,wall);
  drawSprites();
}

/*function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
      return true; 
}
else {
  return false; 
}
}

function bounceOff(object1,object2){
  if( object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2){
      object1.velocityX = (-1)*object1.velocityX; 
      object2.velocityX = (-1)*object2.velocityX;
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
    object1.velocityY = (-1)*object1.velocityY; 
    object2.velocityY = (-1)*object2.velocityY;
  }

}*/