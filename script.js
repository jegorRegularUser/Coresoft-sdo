

//contact modal window
const contactModal = document.querySelector(".contact .modal");
const contactBtn_pre = document.getElementById("contact-btn-pre");
const contactBtn_sol = document.getElementById("contact-btn-sol");
const contactCancelBtn = document.getElementById("contact-cancel-btn")
const closeContactModal = () => {
  contactModal.classList.add("hide");

  contactModal.classList.remove("show");
  setTimeout(() => {
    contactModal.style.display = "none";
  }, 500);
};

[contactBtn_pre, contactBtn_sol].forEach((el) =>
  el.addEventListener("click", () => {
    contactModal.classList.remove("hide");
    contactModal.classList.add("show");
    contactModal.style.display = "block";
  })
);

const modalFormBtn = document.getElementById("modalFormBtn");

modalFormBtn.addEventListener("click", (e) => {
  e.preventDefault();
  closeContactModal();
});
contactCancelBtn.addEventListener("click", e =>{
  closeContactModal();
})
const formBtn = document.getElementById("formBtn");
formBtn.addEventListener("click", (e) => {
  e.preventDefault();
});

window.addEventListener("click", (event) => {
  if (
    (!nav.contains(event.target) || event.target.localName === "a") &&
    isDropDownOpen
  ) {
    dropDownHandler();
  }
  if (event.target == contactModal || event.target == casesModal) {
    closeCasesModal();
    closeContactModal();
  }
});
