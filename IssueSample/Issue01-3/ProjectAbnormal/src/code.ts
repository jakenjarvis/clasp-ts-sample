function myFunction() {
  Logger.log('------ myFunction start ------');

  const classB = new nameB.BClass();
  const classA = new nameA.AClass();

  classB.test();
  classA.test();

  Logger.log('------ myFunction end ------');
}
