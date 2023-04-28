import { Counter } from "./Counter.ts";
import { IsEvenText } from "./isEvenText.ts";

const counter = new Counter(
  document.querySelector<HTMLButtonElement>("#counter")!
);
const isEvenText = new IsEvenText(
  document.querySelector<HTMLElement>("#isEven")!
);

// EventEmitter
counter.addEventListener("count", ({ number }: { number: number }) => {
  isEvenText.setIsEvenText(number);
});
