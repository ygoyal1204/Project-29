class Block{
    constructor(x, y){
        var options ={
            restitution: 0.1,
            friction: 1.5,
            density: 1.2
        }
        this.body = Bodies.rectangle(x, y, 30, 40, options);
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 40;
        World.add(world, this.body)
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, 30, 40);
        pop();
    }
};