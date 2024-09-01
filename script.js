`use strict`;

// creating 4 constants and using them
// selecting element using selector and storing them in a variable`
const btnsOpenModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

// creating method for less usability
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
  //   using dry principle
  //  function () {
  //     modal.classList.remove("hidden");
  //     overlay.classList.remove("hidden");
  //   });
  btnCloseModal.addEventListener("click", closeModal);
  //   using dry principle
  //   function () {
  //     modal.classList.add("hidden");
  //     overlay.classList.add("hidden");
  //   });

  document.addEventListener("keydown", function (e) {
    // console.log(e.key);
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      //   modal.classList.add("hidden");
      //   overlay.classList.add("hidden");
      //   using dry principle we called a function
      closeModal();
    }
  });
}
