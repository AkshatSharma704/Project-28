class Tree{
    constructor(x,y){
       this.x = x;
       this.y = y;
       this.image = loadImage("Images/tree.png");
       this.body = Bodies.rectangle(this.x, this.y, {isStatic: false});
       World.add(world, this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y + 10);
        rotate(this.body.angle);
        fill(255,0,255);
        imageMode(CENTER);
        image(this.image, 0, 0, 480, 360);
    }
}