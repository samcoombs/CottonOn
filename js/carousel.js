"use strict";

const carouselImages = document.querySelector(".carousel__images");
const carouselButtons = document.querySelectorAll(".carousel__button");
const numberOfImages = document.querySelectorAll(".carousel__images--img")
  .length;
let imageIndex = 1;
let translateX = 0;

carouselButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.id === "previous") {
      if (imageIndex !== 1) {
        imageIndex--;
        translateX += 30;
      }
    } else {
      if (imageIndex !== numberOfImages - 2) {
        imageIndex++;
        translateX -= 30;
      } else {
        if (imageIndex === numberOfImages - 2) {
          translateX = 0;
          imageIndex = 1;
        }
      }
    }

    carouselImages.style.transform = `translateX(${translateX}vw)`;
  });
});
