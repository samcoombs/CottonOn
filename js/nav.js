"use strict";

const burger = document.querySelector(".burger");
const navList = document.querySelector(".navigation__list--right");
const navLink = document.querySelector(".navigation__list--link");
const body = document.querySelector("body");

let burgerOpen = false;

const menuToggle = () => {
  if (!burgerOpen) {
    navList.classList.add("open");
    navLink.classList.add("open");
    burger.classList.add("open");
    body.style.overflowY = "hidden";
    burgerOpen = true;
  } else {
    navList.classList.remove("open");
    navLink.classList.remove("open");
    burger.classList.remove("open");
    body.style.overflowY = "visible";
    burgerOpen = false;
  }
};

burger.addEventListener("click", menuToggle);
