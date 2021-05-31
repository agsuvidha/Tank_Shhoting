class Turret
{
    constructor(x, y, width, height)
     {
  var turret_options={
      isStatic:true,
  }
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, width, height, turret_options);

      this.turret_image = loadImage("Turret.png");
      World.add(myWorld, this.body);
    }
    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER);
        image(this.turret_image,0,0,this.width,this.height)
        pop();
    }
    rotateUp(){
        Matter.Body.setAngle(this.body, this.body.angle + PI/5);
        Matter.Body.translate(this.body, {x: 0.25, y: -0.35});
    }

    rotateDown(){
        Matter.Body.setAngle(this.body, this.body.angle - PI/5);
        Matter.Body.translate(this.body, {x: -0.25, y: 0.35});
    }
}