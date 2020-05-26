const hamburgerBtn = document.querySelector("#hamburger-btn");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");

hamburgerBtn.addEventListener("click", function () {
  console.log("Hello Himou !!");

  if (header.classList.contains("open")) {
    header.classList.remove("open"); // Open Hamburger Menu
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");
  } else {
    header.classList.add("open"); // Close Hamburger Menu
    overlay.classList.add("fade-in");
    overlay.classList.remove("fade-out");
  }
});
