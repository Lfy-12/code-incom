class Person{
  static sayname(){
    console.log('lfy');
  }
}

class Girl extends Person{
  static saynamehhh(){
    super.sayname();
  }
}

Girl.saynamehhh();