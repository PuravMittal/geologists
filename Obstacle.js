//stands for obstacle class
class Obstacle{
	constructor(x,y,r){
		var options = {
			restitution : 0.5,
			friction : 5, 
			density : 0.2
        }
	
		this.x=x;
		this.y=y;
		this.r=r;
		this.obstacleBody=Bodies.circle(this.x, this.y, (this.r-20)/2, options);
		World.add(world, this.obstacleBody);

	}
	display()
	{
			var obstaclepos=this.obstacleBody.position;		
			push();
			translate(obstaclepos.x, obstaclepos.y);
			rectMode(CENTER);
			strokeWeight(4);
			stroke(0);
			fill("red");
			ellipse(0,0,this.r);
			pop();
	}

}