export type Listener = (...args: any[]) => void;

export class EventEmitter {
  listeners = new Map<string, Set<Listener>>();

  addEventListener(type: string, listener: Listener): void {
    if (!this.listeners.has(type)) {
      this.listeners.set(type, new Set());
    }
    const listenerSet = this.listeners.get(type);
    listenerSet?.add(listener);
  }

  emit(type: string, ...args: any[]): void {
    const listenerSet = this.listeners.get(type);
    if (!listenerSet) {
      return;
    }
    listenerSet.forEach((listener) => {
      listener.call(this, ...args);
    });
  }

  removeEventListener(type: string, listener: Listener): void {
    const listenerSet = this.listeners.get(type);
    if (!listenerSet) {
      return;
    }
    listenerSet.forEach((ownListener) => {
      if (ownListener === listener) {
        listenerSet.delete(listener);
      }
    });
  }
}
