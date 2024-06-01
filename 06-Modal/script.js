"use strict";

const btnOpenModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", () => openModal());
}

btnCloseModal.addEventListener("click", () => closeModal());
overlay.addEventListener("click", () => closeModal());

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});
