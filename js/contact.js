import { postData } from "./components/post-data.js";
import { disableBtn } from "./components/button.js";
import { messageSent } from "./components/message.js";
import {
  valEmail,
  valName,
  valSubject,
  valMessage,
} from "./components/validation.js";

const form = document.querySelector("form");
const btn = document.querySelector(".btn");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const url =
  "https://oae.one/brain/wp-json/contact-form-7/v1/contact-forms/5/feedback";

const validate = () => {
  valName(name, 5);
  valEmail(email);
  valMessage(message, 25);
  valSubject(subject, 15);
};

validate();

form.onsubmit = async (e) => {
  e.preventDefault();
  disableBtn(btn);

  try {
    const options = {
      method: "POST",
      body: new FormData(form),
    };
    await postData(url, options);
    disableBtn(btn, false);
    form.reset();
    messageSent();
    validate();
  } catch (error) {
    console.log(error);
    messageSent(`An error occured. Please try again later.`);
  }
};
