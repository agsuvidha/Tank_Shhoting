class Bullet {
    constructor(x,y,width,height,angle,force) {
     
      this.body = Bodies.rectangle(x,y,width,height);
      this.width = width;
      this.height=height;
      this.image=loadImage("Shell.png")
      Matter.Body.setAngle(this.body, PI/360 * angle);
      Matter.Body.setVelocity(this.body,{x: force * -3, y: force * -1});
      //console.log(force);
      World.add(myWorld, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y)
      rotate(angle)
      
      imageMode(CENTER);
      image(this.image,0, 0, this.width, this.height);
      pop()
    }
  };