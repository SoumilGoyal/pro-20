var fixedRect,movingRect;
var gameObj1;

function setup() {
  createCanvas(1200,800);
 fixedRect = createSprite(200, 200, 50, 80);
 fixedRect.shapeColor = "green";
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "blue";
  gameObj1 = createSprite(400, 200, 80, 30);
  gameObj1.shapeColor = "blue";
}

function draw() {
  background(255,255,255);
  movingRect.x = World.mouseX
  movingRect.y = World.mouseY;

 isTouching(movingRect,fixedRect);

  drawSprites();
}
function isTouching(obj1,obj2){
  if(obj1.x-obj2.x < obj2.width/2 + obj1.width/2 && 
    obj2.x - obj1.x < obj2.width/2 + obj1.width/2 && 
    obj1.y-obj2.y < obj2.height/2 + obj1.height/2 && 
    obj2.y - obj1.y < obj2.height/2 + obj1.height/2){
    obj2.shapeColor = "red";
    obj1.shapeColor = "red";
  }
  else{
    obj2.shapeColor = "green";
    obj1.shapeColor = "green";
  }
}