class Tree {
    constructor(x,y) {
      var options = {
        isStatic:true,
        restitution:1.1,
        friction:0.04,
        density:0.2
        
   
      }
      this.body = Bodies.circle(x, y, 1, options);
      this.width = 400;
      this.height = 400;

      this.image =  loadImage("images/tree.png")
      
      
      World.add(world, this.body);
    }
    display(){

      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill(125);
      image(this.image, 0, 200, this.width, this.height);
      pop();
    }
  };
