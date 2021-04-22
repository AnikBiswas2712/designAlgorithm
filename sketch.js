var Fixedrect,Movingrect;

function setup() {
  createCanvas(800,400);
  Fixedrect=createSprite(400, 200, 50, 50);
  Fixedrect.shapeColor="green";
  Movingrect=createSprite(500,250,30,30);
  Movingrect.shapeColor="green";
}

function draw() {
  background(255,255,255); 
  Movingrect.x=World.mouseX;
  Movingrect.y=World.mouseY;
  if(Movingrect.x-Fixedrect.x<Fixedrect.width/2+Movingrect.width/2 &&
    Fixedrect.x-Movingrect.x<Fixedrect.width/2+Movingrect.width/2 &&
    Movingrect.y-Fixedrect.y<Fixedrect.height/2+Movingrect.height/2 &&
    Fixedrect.y-Movingrect.y<Fixedrect.height/2+Movingrect.height/2){
    Fixedrect.shapeColor="red";
    Movingrect.shapeColor="red";
  }else {
    Fixedrect.shapeColor="green";
    Movingrect.shapeColor="green";
  }

  drawSprites();
}