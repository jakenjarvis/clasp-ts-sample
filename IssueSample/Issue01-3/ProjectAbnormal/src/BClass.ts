Logger.log('loading BClass.ts');

// tslint:disable-next-line:no-namespace
namespace nameB {
  export class BClass {
    constructor() {
      Logger.log('BClass constructor');
    }

    public test(): void {
      Logger.log('test(): class B');
    }
  }
}
