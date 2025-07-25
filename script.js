const slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides.forEach((slide) => slide.classList.remove("ativo"));
  index = (index + 1) % slides.length;
  slides[index].classList.add("ativo");
}, 5000);
