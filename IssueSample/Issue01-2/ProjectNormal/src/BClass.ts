Logger.log('loading BClass.ts');

class BClass extends AClass {
  constructor() {
    super();
    Logger.log('BClass constructor');
  }

  public test(): void {
    Logger.log('test(): class B');
  }
}
