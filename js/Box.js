class Box{
    constructor(x,y,w,h){
        var options = {
           restitution : 0.8
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(funWorld,this.body);
        this.width = w;
        this.height = h;
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        fill("white");
        stroke("green");
        strokeWeight(4);
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}