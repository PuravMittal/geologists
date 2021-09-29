//stands for iron class
class Iron {
    constructor(x, y) {
      var options = {
        restitution : 0.8,
        friction : 3, 
        density : 30
      }
      this.rubberBody = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 100;
      this.height = 50;
      World.add(world, this.rubberBody);
    }
    display(){
      var pos = this.rubberBody.position;
      var angle = this.rubberBody.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
     
      fill("red")
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  
