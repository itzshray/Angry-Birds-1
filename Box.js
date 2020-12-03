class Box{
    constructor(x,y,w,h){
        var g_options={
            restitution: 1,
            density:1.7,
            friction:0.5
          }
          this.w=w
          this.h=h
          this.body=Bodies.rectangle(x,y,w,h,g_options)
          World.add(world,this.body);
    }
    display(){
        var pos= this.body.position
        var angle=this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
    fill(255);
    stroke("red")
    strokeWeight(4)
    rect(0,0,this.w,this.h);
    pop();
    }
}