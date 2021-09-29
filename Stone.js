class Stone {
  //constructs the body
    constructor(x, y) { 
      //stands for properties of body
      var options = {
        restitution : 0.8,
        friction : 0.9, 
        density : 12
      }
      //creates physics body
      this.stoneBody = Bodies.rectangle(x, y, 50, 50, options);
      //specifies width and height
      this.width = 100;
      this.height = 100;
      //adds the body to the physics world
      World.add(world, this.stoneBody);
    }
    display(){
      //gives position to the body
      var pos = this.stoneBody.position;
      //gives angle to the body
       var angle = this.stoneBody.angle;
  
      push();
      //translates the origin
      translate(pos.x, pos.y);
      //rotates to the following angle
      rotate(angle);
      //give a wider stroke
      strokeWeight(4);
      //fill color in variable
      fill(0);
      //makes the rect at centre
      rectMode(CENTER);
      //makes the rect
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  