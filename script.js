const buttons = document.querySelector(".buttons");
const count = document.querySelector(".count");

buttons.addEventListener("click", (e) => {
  const subtract = e.target.classList.contains("subtract");
  const reset = e.target.classList.contains("reset");
  const add = e.target.classList.contains("add");

  if (add) {
    count.innerHTML++;
    setColor();
  }
  if (reset) {
    count.innerHTML = 0;
    setColor();
  }
  if (subtract) {
    count.innerHTML--;
    setColor();
  }

  function setColor() {
    if (count.innerHTML > 0) {
      count.style.color = "yellow";
    } else if (count.innerHTML < 0) {
      count.style.color = "orangered";
    } else {
      count.style.color = "white";
    }
  }
});
