class Bird{
    constructor(x,y){
        var options = {
           restitution : 0.8
        }
        this.width = 50;
        this.height = 50;

        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(funWorld,this.body);
        
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        pos.x = mouseX;
        pos.y = mouseY;

        push();
        fill("red");
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}