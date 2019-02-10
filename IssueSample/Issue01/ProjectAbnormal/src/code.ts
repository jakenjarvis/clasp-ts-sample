import { AClass } from './AClass';
import { BClass } from './BClass';

function myFunction() {
  Logger.log('------ myFunction start ------');

  const classB = new BClass();
  const classA = new AClass();

  classB.test();
  classA.test();

  Logger.log('------ myFunction end ------');
}
