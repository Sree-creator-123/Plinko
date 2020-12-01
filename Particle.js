class Particle{
    constructor(x, y, r){

        var options = {
            restitution: 0.5,
            friction: 0
        }

        this.body = Bodies.circle(x, y, r, options);
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        this.r = r;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        push();
        fill(this.color);
        ellipse(pos.x, pos.y, this.r, this.r);
        pop();
    }
}