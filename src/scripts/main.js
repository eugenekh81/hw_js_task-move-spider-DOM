"use strict";

const spider = document.querySelector(".spider");
const wall = document.querySelector(".wall");

document.addEventListener("click", (e) => {
  spider.style.left =
    e.clientX -
    wall.offsetLeft -
    wall.clientLeft -
    spider.offsetWidth / 2 +
    "px";

  spider.style.top =
    e.clientY -
    wall.offsetTop -
    wall.clientTop -
    spider.offsetHeight / 2 +
    "px";

  if (
    e.clientX > wall.getBoundingClientRect().right ||
    e.clientX < wall.getBoundingClientRect().left ||
    e.clientY > wall.getBoundingClientRect().bottom ||
    e.clientY < wall.getBoundingClientRect().top
  ) {
    spider.style.left = 0;
    spider.style.top = 0;
  }
});
