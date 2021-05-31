class Ball {
    constructor(x,y,width) {
      var options =
       {
          restitution:1.0,
          mass:0.1,
          //frictionAir:0,
       
          //frictionStatic:1

      }
      this.body = Bodies.circle(x,y,width,options);
      this.width = width;
      
      World.add(myWorld, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
    ellipseMode(RADIUS)
      ellipse(pos.x, pos.y, this.width*2, this.width*2);
    }
  };