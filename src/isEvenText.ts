import EventDispatcher from "./EventDispatcher";
import { EVENTS } from "./Events";
import GlobalValue from "./GlobalValue";

export class IsEvenText extends EventDispatcher {
  private element: HTMLElement;

  constructor(element: HTMLElement) {
    super();
    GlobalValue.setMain(this);
    this.element = element;
    this.element.innerText = "count is an even number";

    // カスタムイベント
    // document.addEventListener(EVENTS.CLICK_COUNTER, (e: CustomEventInit) => {
    //   this.setIsEvenText(e.detail);
    // });

    // EventDispatcher
    // this.addEventListener(EVENTS.CLICK_COUNTER, (e) => {
    //   this.setIsEvenText(e.number);
    // });
  }

  public setIsEvenText(number: number): void {
    if (number % 2 === 0) {
      this.element.innerText = "count is an even number";
    } else {
      this.element.innerText = "count is an odd number";
    }
  }
}
