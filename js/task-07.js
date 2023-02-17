const fontControlInput = document.querySelector("#font-size-control");
const boxSpanText = document.querySelector('#text');

const dinamicSize = () => {
    boxSpanText.style.fontSize = `${fontControlInput.value}px`;
  };
  
fontControlInput.addEventListener("input", dinamicSize);