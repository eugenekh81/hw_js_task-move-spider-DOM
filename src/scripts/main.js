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
});
