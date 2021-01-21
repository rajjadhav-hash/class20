var fixedRect;
var movingRect;

function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(400, 200, 50, 50);
 fixedRect.shapeColor="green"
 movingRect= createSprite(400, 200, 50, 50);
 movingRect.shapeColor="green"




}

function draw() {
  background(255,255,255);
  movingRect.x=mouseX;
  movingRect.y=mouseY;
   var centerX=fixedRect.width/2+movingRect.width/2;
   var centerY=fixedRect.height/2+movingRect.height/2;
   if(movingRect.x-fixedRect.x<centerX && 
    fixedRect.x-movingRect.x<centerX && 
    movingRect.y-fixedRect.y<centerY && 
    fixedRect.y-movingRect.y<centerY){
     fixedRect.shapeColor="red";
     movingRect.shapeColor="red";
   } 
   else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
   }
  drawSprites();
}