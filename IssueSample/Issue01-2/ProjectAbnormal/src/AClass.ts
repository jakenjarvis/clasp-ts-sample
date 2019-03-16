Logger.log('loading AClass.ts');

class AClass extends BClass {
  constructor() {
    super();
    Logger.log('AClass constructor');
  }

  public test(): void {
    Logger.log('test(): class A');
  }
}
