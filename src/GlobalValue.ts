class GlobalValues {
  private _main: any | null;

  constructor() {
    this._main = null;
  }

  // Mainクラスのインスタンスの参照
  public setMain(main: any): void {
    this._main = main;
  }

  public getMain(): any | null {
    return this._main || null;
  }
}

export default new GlobalValues();
