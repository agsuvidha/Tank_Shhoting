const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld;
var bg;
var ground;
var tank;
var turret;
var rotatedDegrees;
 var ball1,ball2,ball3,ball4,ball5;
 var bullet,bullets;
var balls=[];
var count=5;
var posx=0;
var posy=0;
var counter=0;
var chance,chanceImg;
var gameOver,gameOverImg;

function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== undefined) {
      number = number <= upper ? number : upper;
    }
    if (lower !== undefined) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}

function preload(){
bg=loadImage("background.png")
chanceImg=loadImage("chance.png")
gameOverImg=loadImage("gameover.png")
}
function setup()
{
    createCanvas(800,400);
    myEngine=Engine.create();
    myWorld=myEngine.world;

    chance=createSprite(600,200,50,50);
    chance.addImage("chance",chanceImg)
    ground=new Ground(600,390,1200,30)
    tank=new Tank(600,340,200,75)
    turret=new Turret(550,320,100,20)
    // ball1=new Ball(50,1500,15)
    // ball2=new Ball(100,-450,10)
    // ball3=new Ball(100,-1000,5)
    // ball4=new Ball(50,50,20)
    // ball5=new Ball(150,-80,10)
     rotatedDegrees=0;
    bullets=[];

for(var c=0;c<5;c++)
{
  balls.push(new Ball(random(50,300),random(-1000,10),15));
}

}
function draw()
{
    background(bg);
    Engine.update(myEngine);
    tank.display();
    ground.display();
    turret.display();
  
    //remove the ball when it is close
    for(var a=0;a<balls.length;a++)
    {
      if(balls[a].body.position.x<-50)
      {
        Matter.World.remove(myWorld,balls[a]);
        Matter.Body.setPosition(balls[a].body,{x:0,y:-1000});
        count--;
      }
      else
      {
        balls[a].display();
      }
    }

    //move the ball closer
    
    for(var a=0;a<balls.length;a++)
    {
    //  posx+=5;
    //  posy-=5;
      if(balls[a].body.position.y>300)
      {
    //    console.log("increase "+balls[a]+" "+balls[a].body.position.x);
        Matter.Body.setVelocity(balls[a].body,{x:2,y:-8});
      }
      
    }
  


  
    if(keyDown(UP_ARROW) && rotatedDegrees<70)
    {
    
        turret.rotateUp();
        rotatedDegrees++;
    }  
    if(keyDown(DOWN_ARROW)&& rotatedDegrees >-25)
    {
//        console.log(rotatedDegrees);
        turret.rotateDown();
        rotatedDegrees--;
    }
    
    if(count===0)
    {
      result="win";
    }
    //To show Bullets on the screen
    for(var x = 0; x < bullets.length; x++)
    {
      if(bullets[x].body.position.y > 365)
      {
          Matter.World.remove(myWorld, bullets[x].body);
      }
      else
      {
          bullets[x].display();
      }
    }
  

    //To show random balls on the screen
    for(var i=0;i<5;i++)
    {
      balls[i].display();
     
    }


    
      //
//    text(mouseX+" "+mouseY,mouseX,mouseY);

}


function keyPressed()
{
    if(keyCode === 32 && counter<=200)
      {
        var speed = baseClamp(rotatedDegrees/5, 4, 10);
        //console.log(rotatedDegrees);
        bullet = new Bullet(0, 0, 30, 10, rotatedDegrees, speed);
        Matter.Body.setPosition(bullet.body, {x: turret.body.position.x - 50, y: turret.body.position.y - rotatedDegrees/3});
        counter++;
        bullets.push(bullet);
        
      }
      // else
      // {
      //     console.log("You have exceeded the limit")
      
      //   text("YOU HAVE EXCEEDED LIMIT",300,100);
      //   gameOver=createSprite(300,150,30,30);
      //   gameOver.addImage("gameover",gameOverImg)
      //   }
   
  
}
