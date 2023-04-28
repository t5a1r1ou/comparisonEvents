interface Listener {
  type: string;
  callback: (object?: any) => void;
}

class EventDispatcher {
  private _listeners: Listener[];

  constructor() {
    this._listeners = [];
  }

  public addEventListener(
    type: string,
    callback: (object?: any) => void
  ): void {
    if (!type || !callback) return;

    this._listeners.push({
      type: type,
      callback: callback,
    });
  }

  public removeEventListener(
    type: string,
    callback: (object?: any) => void
  ): void {
    if (type === null || callback === null) {
      return;
    }

    let arr: Listener[] = [];
    for (let i = 0, max = this._listeners.length; i < max; i++) {
      let listener = this._listeners[i];
      if (listener.type !== type || listener.callback !== callback) {
        arr.push(listener);
      }
    }
    this._listeners = arr;
  }

  public dispatchEvent(type: string, object?: any): void {
    if (type === null) return;

    for (let i = 0, max = this._listeners.length; i < max; i++) {
      let listener = this._listeners[i];
      if (listener.type === type) {
        if (object != null) {
          listener.callback(object);
        } else {
          listener.callback();
        }
      }
    }
  }
}

export default EventDispatcher;
