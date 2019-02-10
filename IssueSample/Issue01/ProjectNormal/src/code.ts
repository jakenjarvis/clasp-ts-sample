import { AClass } from './AClass';
import { BClass } from './BClass';

function myFunction() {
  Logger.log('------ myFunction start ------');

  const classA = new AClass();
  const classB = new BClass();

  classA.test();
  classB.test();

  Logger.log('------ myFunction end ------');
}
