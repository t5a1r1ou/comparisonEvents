import EventDispatcher from "./EventDispatcher";
import { EventEmitter } from "./EventEmitter";
import { EVENTS } from "./Events";
import GlobalValue from "./GlobalValue";

export class Counter extends EventEmitter {
  private counter: number;
  private element: HTMLButtonElement;

  constructor(element: HTMLButtonElement) {
    super();
    this.element = element;
    this.counter = 0;
    this.setCounter(this.counter);
    this.element.addEventListener("click", () => {
      this.setCounter(this.counter + 1);

      // カスタムイベント
      // const clickCounterEvent = new CustomEvent(EVENTS.CLICK_COUNTER, {
      //   detail: this.counter,
      // });
      // document.dispatchEvent(clickCounterEvent);

      // EventDispatcher
      // GlobalValue.getMain().dispatchEvent(EVENTS.CLICK_COUNTER, {
      //   number: this.counter,
      // });

      // EventEmitter
      this.emitCount(this.counter);
    });
  }

  public setCounter(count: number): void {
    this.counter = count;
    this.element.innerHTML = `count is ${this.counter}`;
  }

  public emitCount(number: number) {
    this.emit("count", { number });
  }
}
