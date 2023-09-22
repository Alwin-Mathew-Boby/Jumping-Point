var backgroundImg
//var Mario,marioAnimations
function preload(){

 backgroundImg=loadImage("../Assets/images.png") 
// marioAnimations=loadAnimation("../Assets/1.png","../Assets/2.png","../Assets/3.png","../Assets/4.png","../Assets/5.png","../Assets/6.png")
}
function setup() {
  createCanvas(windowWidth-19, windowHeight-19);

  
}

function draw() {
  background(backgroundImg);
  form=new Form()
  form.display()

  //var Mario=createSprite(200,200,10,10)
  //Mario.addAnimation("running",marioAnimations)
  
}