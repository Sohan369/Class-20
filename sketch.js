var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
movingRect=createSprite(400,200,70,100);
fixedRect=createSprite(300,200,70,100);
movingRect.debug=true;
fixedRect.debug=true;
}

function draw() {
  background(1,1,1); 
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  console.log(movingRect.x-fixedRect.x);
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
    && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    && movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
    && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    fixedRect.shapeColor="red";
    fixedRect.width=fixedRect.width+5;

  }
  else{
    fixedRect.shapeColor="blue";
    fixedRect.width=70;
  }
  drawSprites();
}