class Hero {

    constructor(x,y,r) {

        var options = {

            density: 2,
            frictionAir: 0.01

        };

        this.x = x;
        this.y = y;
        this.r = r;

        this.image = loadImage("images/Superhero-01.png");

        this.body = Bodies.circle(this.x, this.y, (this.r)/2, options);

        World.add(world, this.body);

    }

    display(){

        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.r, this.r);

    }

}