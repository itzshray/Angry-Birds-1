class Ground{
    constructor(x,y,w,h){
        var g_options={
            isStatic: true
          }
          this.w=w
          this.h=h
          this.body=Bodies.rectangle(x,y,w,h,g_options)
          World.add(world,this.body);
    }
    display(){
        var pos= this.body.position
        rectMode(CENTER);
    fill("green");
    rect(pos.x,pos.y,this.w,this.h);
    }
}