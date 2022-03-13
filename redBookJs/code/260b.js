class Vehicle{
  constructor(lic){
    this.licensePlate = lic;
  }
}

class Bus extends Vehicle{
  constructor(lic){
    super(lic);
  }
}

console.log(new Bus('1314'));