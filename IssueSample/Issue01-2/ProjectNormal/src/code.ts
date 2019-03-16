function myFunction() {
  Logger.log('------ myFunction start ------');

  const classA = new AClass();
  const classB = new BClass();

  classA.test();
  classB.test();

  Logger.log('------ myFunction end ------');
}
