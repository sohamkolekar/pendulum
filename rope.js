class Rope {
 constructor(body1,body2,offsetX,offsetY)
{
    this.offsetX=offsetX;
    this.offsetY=offsetY;
var options={
    bodyA:body1,
    bodyB:body2,
    pointB:{x:this.offsetX,y:this.offsetY},
    length:400,
    stiffness:0.5,
    angularStiffness:0.5
}

this.rope=Constraint.create(options);
World.add(world,this.rope);

}
fall(){
this.rope.bodyA=null;
}
display(){
push();
if(this.rope.bodyA){
var point1=this.rope.bodyA.position;
var point2=this.rope.bodyB.position;

var anchor1X=point1.x;
var anchor1Y=point1.y;

var anchor2X=point2.x+this.offsetX;
var anchor2Y=point2.y+this.offsetY;
line(anchor1X,anchor1Y,anchor2X,anchor2Y);
}
pop();

}



}