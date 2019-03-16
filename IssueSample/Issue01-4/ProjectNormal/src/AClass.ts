Logger.log('loading AClass.ts');

// tslint:disable-next-line:no-namespace
namespace nameAB {
  export class AClass {
    constructor() {
      Logger.log('AClass constructor');
    }

    public test(): void {
      Logger.log('test(): class A');
    }
  }
}
