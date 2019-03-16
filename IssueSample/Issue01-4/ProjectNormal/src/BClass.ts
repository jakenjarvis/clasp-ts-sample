Logger.log('loading BClass.ts');

// tslint:disable-next-line:no-namespace
namespace nameAB {
  export class BClass extends nameAB.AClass {
    constructor() {
      super();
      Logger.log('BClass constructor');
    }

    public test(): void {
      Logger.log('test(): class B');
    }
  }
}
