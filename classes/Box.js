class Block {
    
  constructor(x,y){
  
      var options = {
          restitution: 0.1,
          density: 20,
          frict: 1
      }

      this.body = Bodies.rectangle(x,y,80,80,options);
      World.add(world, this.body);

  }

  display(){

      var pos = this.body.position;
      
      rectMode(CENTER);
      stroke("#393e46");
      strokeWeight(5);
      fill("#eeeeee");
      
      rect(pos.x,pos.y,80,80);

  }

};