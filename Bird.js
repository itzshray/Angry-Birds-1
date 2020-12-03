class Bird{
    constructor(x,y){
        var g_options={
            restitution: 1,
            density:1.7,
            friction:0.5
          }
          this.w=50
          this.h=50
          this.body=Bodies.rectangle(x,y,50,50,g_options)
          World.add(world,this.body);
    }
    display(){
        var pos= this.body.position
        var angle=this.body.angle
        pos.x = mouseX
        pos.y = mouseY
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
    fill("purple");
    stroke("white")
    strokeWeight(4)
    rect(0,0,this.w,this.h);
    pop();
    }
}