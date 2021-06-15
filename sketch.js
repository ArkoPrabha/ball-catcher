var paddle,paddleImg,base
var ball,ballImg,ballGrp,ballImg2,ballImg3,ballImg4,ballImg5,ballImg6,ballImg7,ballImg8,ball2,ball3,ball4,ball5,ball6,ball7,ball8
var ballGrp2,ballGrp3,ballGrp4,ballGrp5,ballGrp6,ballGrp7,ballGrp8
var collectSound,dieSound
var gameoverImg,gameOver
var restartImg,restart
var score=0
var lives=10
var gameState=1
function preload(){
paddleImg=loadImage("bucket.png")
ballImg=loadImage("ball1.png")
ballImg2=loadImage("ball2.png")
ballImg3=loadImage("ball3.png")
ballImg4=loadImage("ball4.png")
ballImg5=loadImage("ball5.png")
ballImg6=loadImage("ball6.png")
ballImg7=loadImage("ball7.png")
ballImg8=loadImage("ball8.png")
gameoverImg=loadImage("gameover.png")
restartImg=loadImage("restart.png")
collectSound=loadSound("collect.mp3")
dieSound=loadSound("over.mp3")
}
function setup() {
  createCanvas(1400,600);
  paddle=createSprite(700, 510)
  paddle.addImage("paddle",paddleImg)
  paddle.scale=0.5

  base=createSprite(690,570,1500,10)

  gameOver=createSprite(670,150)
  gameOver.addImage("gameover",gameoverImg)
  gameOver.visible=false
  gameOver.scale=0.2

  restart=createSprite(670,250)
  restart.addImage("restart",restartImg)
  restart.visible=false
  restart.scale=0.2

  ballGrp=new Group()
  ballGrp2=new Group()
  ballGrp3=new Group()
  //ballGrp4=new Group()
  ballGrp5=new Group()
  ballGrp6=new Group()
  ballGrp7=new Group()
  ballGrp8=new Group()
}

function draw() {
  background(205);  
  drawSprites();

  
  //console.log(mouseY)
  //console.log(gameState)
  /*if(gameState===2){
    textSize(30)
    fill("black")
    text("PRESS SPACE TO PLAY",640,280)
    
    if(keyDown("space")){
      gameState=1
    }
  }*/
  if(gameState===1){
    if(ballGrp.isTouching(paddle)){
      score=score+1
      ballGrp.destroyEach()
      collectSound.play()
    }
    if(ballGrp2.isTouching(paddle)){
      score=score+1
      ballGrp2.destroyEach()
      collectSound.play()
    }
    if(ballGrp3.isTouching(paddle)){
      score=score+1
      ballGrp3.destroyEach()
      collectSound.play()
    }
    if(ballGrp5.isTouching(paddle)){
      score=score+1
      ballGrp5.destroyEach()
      collectSound.play()
    }
    if(ballGrp6.isTouching(paddle)){
      score=score+1
      ballGrp6.destroyEach()
      collectSound.play()
    }
    if(ballGrp7.isTouching(paddle)){
      score=score+1
      ballGrp7.destroyEach()
      collectSound.play()
    }
    if(ballGrp8.isTouching(paddle)){
      score=score+1
      ballGrp8.destroyEach()
      collectSound.play()
    }
    
    if(keyDown("left")){
      paddle.x=paddle.x-6
    }
    if(keyDown("right")){
      paddle.x=paddle.x+6
    }
    if(frameCount%200===0){
      spawnBall()
    }
    if(frameCount%230===0){
      spawnBall2()
    }
    if(frameCount%270===0){
      spawnBall3()
    }
    /*if(frameCount%70===0){
      spawnBall4()
    }*/
    if(frameCount%320===0){
      spawnBall5()
    }
    if(frameCount%500===0){
      spawnBall6()
    }
    if(frameCount%470===0){
      spawnBall7()
    }
    if(frameCount%290===0){
      spawnBall8()
    }
  
    if(ballGrp.isTouching(base)){
      lives=lives-1
      ballGrp.destroyEach()
      dieSound.play()
    }
    if(ballGrp2.isTouching(base)){
      lives=lives-1
      ballGrp2.destroyEach()
      dieSound.play()
    }
    if(ballGrp3.isTouching(base)){
      lives=lives-1
      ballGrp3.destroyEach()
      dieSound.play()
    }
    if(ballGrp5.isTouching(base)){
      lives=lives-1
      ballGrp5.destroyEach()
      dieSound.play()
    }
    if(ballGrp6.isTouching(base)){
      lives=lives-1
      ballGrp6.destroyEach()
      dieSound.play()
    }
    if(ballGrp7.isTouching(base)){
      lives=lives-1
      ballGrp7.destroyEach()
      dieSound.play()
    }
    if(ballGrp8.isTouching(base)){
      lives=lives-1
      ballGrp8.destroyEach()
      dieSound.play()
    }
    if(lives===0){
      gameState=0
    }
    
  
    
    fill("black")
    text("SCORE "+score,50,30)
    text("LIVES:"+lives,1300,30)
  }
  if(gameState===0){
    gameOver.visible=true
    restart.visible=true
    ballGrp.setVelocityYEach(0)
    ballGrp2.setVelocityYEach(0)
    ballGrp3.setVelocityYEach(0)
    ballGrp5.setVelocityYEach(0)
    ballGrp6.setVelocityYEach(0)
    ballGrp7.setVelocityYEach(0)
    ballGrp8.setVelocityYEach(0)

    if(mousePressedOver(restart)){
      reset()
    }
  }
  
}

function spawnBall(){
   ball=createSprite(random(20,1380),0)
  ball.addImage("ball",ballImg)
  ball.velocityY=(3+score/10)
  ball.scale=0.3
  ballGrp.add(ball)
  //console.log(ball.velocityY)
  if(score%10===0){
    ball.velocityY=ball.velocityY+1
  }
}
function spawnBall2(){
   ball2=createSprite(random(20,1380),0)
  ball2.addImage("ball2",ballImg2)
  ball2.velocityY=(3+score/10)
  ball2.scale=0.3
  ballGrp2.add(ball2)
  if(score%10===0){
    ball2.velocityY=ball2.velocityY+1
  }
}
function spawnBall3(){
   ball3=createSprite(random(20,1380),0)
  ball3.addImage("ball3",ballImg3)
  ball3.velocityY=(3+score/10)
  ball3.scale=0.3
  ballGrp3.add(ball3)
  if(score%10===0){
    ball3.velocityY=ball3.velocityY+1
  }
}
/*function spawnBall4(){
  ball4=createSprite(random(20,1380),0)
  ball4.addImage("ball4",ballImg4)
  ball4.velocityY=5
  ball4.scale=0.3
  ballGrp4.add(ball4)
  if(score%10===0){
    ball4.velocityY=ball4.velocityY+1
  }
}*/
function spawnBall5(){
 ball5=createSprite(random(20,1380),0)
  ball5.addImage("ball5",ballImg5)
  ball5.velocityY=(3+score/10)
  ball5.scale=0.3
  ballGrp5.add(ball5)
  if(score%10===0){
    ball5.velocityY=ball5.velocityY+1
  }
}
function spawnBall6(){
   ball6=createSprite(random(20,1380),0)
  ball6.addImage("ball6",ballImg6)
  ball6.velocityY=(3+score/10)
  ball6.scale=0.3
  ballGrp6.add(ball6)
  if(score%10===0){
    ball6.velocityY=ball6.velocityY+1
  }
}
function spawnBall7(){
   ball7=createSprite(random(20,1380),0)
  ball7.addImage("ball7",ballImg7)
  ball7.velocityY=(3+score/10)
  ball7.scale=0.3
  ballGrp7.add(ball7)
  if(score%10===0){
    ball7.velocityY=ball7.velocityY+1
  }
}
function spawnBall8(){
   ball8=createSprite(random(20,1380),0)
  ball8.addImage("ball8",ballImg8)
  ball8.velocityY=(3+score/10)
  ball8.scale=0.3
  ballGrp8.add(ball8)
  if(score%10===0){
    ball8.velocityY=ball8.velocityY+1
  }
}

function reset(){
  ballGrp.destroyEach()
  ballGrp2.destroyEach()
  ballGrp3.destroyEach()
  ballGrp5.destroyEach()
  ballGrp6.destroyEach()
  ballGrp7.destroyEach()
  ballGrp8.destroyEach()
  gameState=1
  score=0
  lives=10
  gameOver.visible=false
  restart.visible=false
}