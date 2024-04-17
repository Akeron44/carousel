let carousel = document.querySelector(".carousel");
let arrowButtons = document.querySelectorAll(".carousel-wrapper button");
let bulletButtons = document.querySelectorAll(".dots-container button");
console.log(bulletButtons[0]);
const firstCardWidth = document.querySelector(".card").offsetWidth;
// console.log(firstCardWidth);

// Add event listeners for buttons to scroll left and right;
arrowButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;

    // Changing the bullet points
    if (carousel.scrollLeft === 0) {
      bulletButtons[0].classList.add("active");
      bulletButtons[1].classList.remove("active");
      bulletButtons[2].classList.remove("active");
    } else if (
      Math.ceil(carousel.scrollLeft) ===
      carousel.scrollWidth - carousel.offsetWidth
    ) {
      bulletButtons[0].classList.remove("active");
      bulletButtons[1].classList.remove("active");
      bulletButtons[2].classList.add("active");
    } else {
      bulletButtons[0].classList.remove("active");
      bulletButtons[1].classList.add("active");
      bulletButtons[2].classList.remove("active");
    }
  });
});

