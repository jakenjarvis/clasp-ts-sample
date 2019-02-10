import { AClass } from './AClass';

Logger.log('loading BClass.ts');

export class BClass extends AClass {
  constructor() {
    super();
    Logger.log('BClass constructor');
  }

  public test(): void {
    Logger.log('test(): class B');
  }
}
