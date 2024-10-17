

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
  el.addEventListener("click", (e) => {
    e.preventDefault()
    contactModal.classList.remove("hide");
    contactModal.classList.add("show");
    contactModal.style.display = "block";
  })
);

const modalFormBtn = document.getElementById("modalFormBtn");
const modalFormCancelBtn = document.getElementById("modalFormBtn-cancel")
modalFormBtn.addEventListener("click", (e) => {
  e.preventDefault();
  closeContactModal();
});
contactCancelBtn.addEventListener("click", e =>{
  e.preventDefault();
  closeContactModal();
})
modalFormCancelBtn.addEventListener("click", e =>{
  e.preventDefault();
  closeContactModal();
})


window.addEventListener("click", (event) => {
  if (event.target == contactModal) {
    closeCasesModal();
    closeContactModal();
  }
});
