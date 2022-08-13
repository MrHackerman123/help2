class BananaGun {
    constructor(x,y,width,height,angle) {
       this.image = loadImage("ak42.png");
       this.x = x;
       this.y = y;
       this.width = width;
       this. height = height;
       this.angle = angle;
       this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, this.angle);
       World.add(world, this.body);
       Matter.Body.setAngle(this.body, -PI/2)

       
    }
    display(){

       // var pos = this.body.position;
        //var angle = this.body.angle;

        if (keyIsDown(RIGHT_ARROW)) {
            this.angle +=  0.02;
        }
        if (keyIsDown(LEFT_ARROW)) {
            this.angle -= 0.02;
        }


        push()
        translate(this.x, this.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width, this.height, this.angle);
        pop();
    }
   
       

    



}