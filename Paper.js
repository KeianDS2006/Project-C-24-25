class Paper{
    constructor(x,y,radius){
    var options={isStatic:false, "restitution":0.3, "friction":0.5, "density":1.2};
    this.body=Matter.Bodies.circle(x,y,radius,options);
    World.add(world,this.body);
    this.image=loadImage("paper.png");
    this.radius=radius;
    }
    display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
    }
}