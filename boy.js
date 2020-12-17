class Boy {
    constructor(x,y) {
      var options = {
        isStatic:true
        
   
      }
      this.body = Bodies.circle(x, y, 5, options);
      this.width = 150;
      this.height = 150;

      
   this.image =  loadImage("images/boy.png")

      World.add(world, this.body);
    }
    display(){

      image(this.image,100,600)


      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill(125);
      image(this.image, 0, 0, this.width, this.height);

      pop();
    }
  };
