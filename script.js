"use strict";
document.querySelector("form").addEventListener("submit", displayDogName);

function displayDogName(event) {
  event.preventDefault();
  let dogName = document.querySelector("#dog-name").value;
  document.body.append(dogName);
}