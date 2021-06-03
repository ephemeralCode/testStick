const main = document.querySelector(".main");
const text4 = document.querySelector(".text4");
const text1 = document.querySelector(".text1");

window.addEventListener("scroll", () => {
  const contBottom = main.getBoundingClientRect().bottom;

  if (contBottom <= window.innerHeight) {
    text4.classList.remove("hide");
    text4.classList.add("active");
    
    text1.classList.remove("hide");
    text1.classList.add("active");
  } else if (contBottom - 100 >= window.innerHeight) {
    text4.classList.remove("active");
    text4.classList.add("hide");
    
    text1.classList.remove("active");
    text1.classList.add("hide");
  }
});
