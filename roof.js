class Roof {
constructor(x,y){
var options={
    density:1,
    friction:1,
    isStatic:true,
}
this.body=Bodies.rectangle(x,y,800,50,options);
this.width=800;
this.height=50;
World.add(world,this.body);

}
display(){
    var pos=this.body.position;
    var angle=this.body.angle;
push();
rectMode(CENTER);
fill("yellow");
rotate(angle);
translate(pos.x,pos.y)
stroke("green")
strokeWeight(1);
rect(0,0,this.width,this.height);
pop();



}






}