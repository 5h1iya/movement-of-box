var box
function setup() {
  createCanvas(400,400);
  box=createSprite(200,100,30,30)
}

function draw() 
{
  background(30);
  if(keyIsDown(UP_ARROW)){
    box.position.y -= 5

  }
  if(keyIsDown(DOWN_ARROW)){
    box.position.y += 5

  }
drawSprites();
}




