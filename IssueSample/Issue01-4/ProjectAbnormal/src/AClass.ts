Logger.log('loading AClass.ts');

// tslint:disable-next-line:no-namespace
namespace nameAB {
  export class AClass extends nameAB.BClass {
    constructor() {
      super();
      Logger.log('AClass constructor');
    }

    public test(): void {
      Logger.log('test(): class A');
    }
  }
}
