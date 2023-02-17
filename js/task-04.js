const boxCounter = {
    sub: document.querySelector("[data-action='increment']"),
    add: document.querySelector("[data-action='decrement']"),
    span: document.querySelector("#value"),
  };
let counterValue = 0;
const increment = () => {
  counterValue += 1;

  boxCounter.span.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  boxCounter.span.textContent = counterValue;
};

boxCounter.sub.addEventListener("click", increment);
boxCounter.add.addEventListener("click", decrement);