var snowimg, snowmanimg, snowman
var snowflake, snowflakeimg
var snowflake1, snowflakeimg1, snowflake2



function preload(){
  snowimg = loadImage("snow1.jpg")
  snowmanimg = loadImage("snowman.png")
  snowflakeimg = loadImage("snow4.webp")
  snowflakeimg1 = loadImage("snow5.webp")
  }

  
function setup() {
  createCanvas(1350,500);
  //createSprite(400, 200, 50, 50);
  snowman = createSprite(750,440,10,10)
  snowman.addImage(snowmanimg)
  snowman.scale = 0.2
  snowflake = createSprite(750,80,40,40)
  snowflake.addImage(snowflakeimg)
  snowflake.scale = 0.3

  snowflake1 = createSprite(300,180,40,40)
  snowflake1.addImage(snowflakeimg1)
  snowflake1.scale = 0.3

  snowflake2 = createSprite(1200,300,40,40)
  snowflake2.addImage(snowflakeimg1)
  snowflake2.scale = 0.3


  
}


function draw() {
  background(snowimg);  
  drawSprites();

  if(keyDown("RIGHT_ARROW")){
    snowman.x = snowman.x + 10
  }


  if(keyDown("LEFT_ARROW")){
    snowman.x = snowman.x - 10

    
  }

  snowflake1.velocityY = 3
  if(snowflake1.y > 500){
    snowflake1.y = 180
 
  }

  snowflake.velocityY = 3
  if(snowflake.y > 500){
    snowflake.y = 80
    
  }

  snowflake2.velocityY = 3
  if(snowflake2.y > 500){
    snowflake2.y = 300
   
  }
}
