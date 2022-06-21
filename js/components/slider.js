// Handling the slider

export const setSlider = () => {
  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".right-arrow");
  const prevBtn = document.querySelector(".left-arrow");

  let counter = 0;

  const slider = () => {
    if (counter === slides.length - 1) {
      counter = 0;
    }
    if (counter < 0) {
      counter = slides.length - 2;
    }
    slides.forEach((slide) => {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });
  };

  slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
  });

  nextBtn.addEventListener("click", () => {
    counter++;
    slider();
  });

  prevBtn.addEventListener("click", () => {
    counter--;
    slider();
  });
};
