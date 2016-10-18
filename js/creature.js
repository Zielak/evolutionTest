
// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

class Creature{

  constructor(){
    
    this.clock = {
      max: 1,
      current: 0
    }

    
    
  }

}



class Muscle {

  constructor(x, y, width, height, options = {}){

    this.body = Bodies.rectangle(x, y, width, height, options);

    

  }




}

