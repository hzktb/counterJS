let btn = document.querySelectorAll("span");
let number = document.querySelector(".number");
let count = 0;

btn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let style = e.currentTarget.classList;
    if (style.contains("increment")) {
      count++;
      console.log(count);
    }
    if (style.contains("decrement")) {
      count--;
      console.log(count);
    }
    if (style.contains("reset")) {
      count = 0;
      console.log(count);
    }
    number.innerHTML = count;
  });
});
