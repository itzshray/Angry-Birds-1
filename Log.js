class Log{
    constructor(x,y,h,angle){
        var g_options={
            restitution: 0.5,
            density:1,
            friction:0.1,
          }
          this.w=25
          this.h=h
          this.body=Bodies.rectangle(x,y,this.w,h,g_options)
          Matter.Body.setAngle(this.body,angle)
          World.add(world,this.body);
    }
    display(){
        var pos= this.body.position
        var angle=this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
    fill(68, 27, 11);
    stroke("yellow");
    strokeWeight(4)
    rect(0,0,this.w,this.h);
    pop();
    }
}