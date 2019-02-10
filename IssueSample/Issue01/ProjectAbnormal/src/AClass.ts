import { BClass } from './BClass';

Logger.log('loading AClass.ts');

export class AClass extends BClass {
  constructor() {
    super();
    Logger.log('AClass constructor');
  }

  public test(): void {
    Logger.log('test(): class A');
  }
}
