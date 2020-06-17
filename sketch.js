
var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(223,321);
  thickness=random(30,52);
  
  bullet=createSprite(10, 200, 20, 40);

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);


}

function draw() {
  background(255,255,255);
   
  bullet.velocityX=speed;

  if(wall.x-bullet.x<bullet.width/2+wall.width/2){
    
   var damage=0.5*weight*speed*speed/thickness*thickness*thickness;
   bullet.velocityX=0;
   console.log(damage);

 if(damage>10){
   wall.shapeColor=color(255,0,0);
 }

 if(damage>10){
  wall.shapeColor=color(255,0,0);
}
  }
  drawSprites();
}