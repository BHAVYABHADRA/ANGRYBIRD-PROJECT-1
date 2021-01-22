var car,wall ;

var speed,weight ;

speed = random(55,90)

weight= random(400,1500)

car = createSprite(50,200,50,50)

wall = createSprite(1500,200,60,height/2)

carvelocityX = speed;

if(wall.x-car.x < (wall.width+car.width)/2)

{
  car.velocityx =0 ;

  var deformation=0.5*weight*speed*speed/22500

  if (deformation>180)

  {car.shapecolor=color(255,0,0)}

if (deformation<180 && deformation>100)

{car.shapecolor=color(230,230,0)}

if (deformation<100)

{car.shapecolor=color(0,255,0)}
}
























