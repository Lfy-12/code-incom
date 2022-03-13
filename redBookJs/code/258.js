class Vehicle{
  identifyPrototype(id){
    console.log(id,this);
  }
  static identifyClass(id){
    console.log(id,this);
  }
}

class Bus extends Vehicle{}

let v = new Vehicle();
let b = new Bus();

b.identifyPrototype('bus');
v.identifyPrototype('vehicle');

Bus.identifyClass('bus');
Vehicle.identifyClass('vehicle');