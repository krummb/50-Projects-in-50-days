const buttons = document.querySelectorAll(".faq-toggle");
buttons.forEach((element) =>
  element.addEventListener("click", function () {
    element.parentNode.classList.toggle("active");
  })
);
