import { createSliderPosts } from "./components/create-html.js";
import { setSlider } from "./components/slider.js";
import { errorMessage } from "./components/message.js";
import { storage } from "./components/storage.js";
import { valEmail } from "./components/validation.js";
import { messageSent } from "./components/message.js";

const email = document.querySelector("#subscribe");
const form = document.querySelector("form");
const sliderContainer = document.querySelector(".slider");

const index = async () => {
  // Setting up slides for the slider
  try {
    await storage();
    sliderContainer.innerHTML = createSliderPosts(
      JSON.parse(localStorage.getItem("posts")).slice(0, 6)
    );
    setSlider();
  } catch (error) {
    sliderContainer.innerHTML = errorMessage(error);
    console.log(error);
  }
};

index();
valEmail(email);

form.onsubmit = (e) => {
  e.preventDefault();
  form.reset();
  messageSent("Thanks for subscribing!");
  valEmail(email);
};
