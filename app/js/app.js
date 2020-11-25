document.addEventListener("DOMContentLoaded", function () {
  const switchInput = document.querySelector(".switch input");
  const switchers = document.querySelectorAll(".switcher");
  switchInput.addEventListener("change", (e) => {
    e.preventDefault();
    Array.from(switchers).forEach((element) => {
      element.classList.remove("active");
    });
    let isCheckedNumber = +switchInput.checked;
    switchers[isCheckedNumber].classList.add("active");
    document.body.classList.add(["dark", "light"][isCheckedNumber]);
    document.body.classList.remove(["light", "dark"][isCheckedNumber]);
  });

  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav .menu");
  burger.addEventListener("click", (e) => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
    if (!nav.classList.contains("active")) nav.classList.add("notactive");
    else nav.classList.remove("notactive");
  });
  window.addEventListener("resize", (e) => {
    nav.classList.remove("notactive");
  });

  // Array.from(document.getElementsByTagName("li")).forEach((element, index) => {
  //   element.innerHTML = index;
  // });
});
