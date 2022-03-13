class Vehicle{}

class Bus extends Vehicle{
  constructor(){
    super();
    console.log(this);
  }
}

new Bus();