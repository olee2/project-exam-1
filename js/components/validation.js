// Assignment asked to handle form validation with JS
// Using inbuilt html functionality with setCustomValidity() in order to display messages

const valName = (name, num) => {
  name.setCustomValidity(`More than ${num} characters`);
  name.onchange = () => {
    console.log(name.value);
    if (name.value.length > num) {
      name.setCustomValidity("");
    } else {
      name.setCustomValidity(`More than ${num} characters`);
    }
  };
};

const valSubject = (subject, num) => {
  subject.setCustomValidity(`More than ${num} characters`);
  subject.onchange = () => {
    if (subject.value.length > num) {
      subject.setCustomValidity("");
    } else {
      subject.setCustomValidity(`More than ${num} characters`);
    }
  };
};

const valMessage = (message, num) => {
  message.setCustomValidity(`More than ${num} characters`);
  message.onchange = () => {
    if (message.value.length > num) {
      message.setCustomValidity("");
    } else {
      message.setCustomValidity(`More than ${num} characters`);
    }
  };
};

const valEmail = (email) => {
  email.setCustomValidity("Enter a valid email");
  email.onchange = () => {
    if (/\S+@\S+\.\S+/.test(email.value)) {
      email.setCustomValidity("");
    } else {
      email.setCustomValidity("Enter a valid email");
    }
  };
};

export { valName, valSubject, valEmail, valMessage };
