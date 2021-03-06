class Box{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0

        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("box.jpg");
        World.add(world, this.body);
      this.visibility=255;
      }
      display(){
        var angle = this.body.angle;
        push();
        if(this.body.speed<3){
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          imageMode(CENTER);
          image (this.image, 0, 0, this.width, this.height);


        }
       else{
       World.remove(world,this.body)
       imageMode(CENTER);
       this.visibility=this.visibility-5;
       tint(255,this.visibility)
       image (this.image, 0, 0, this.width, this.height);



       }
        pop();
      }
}