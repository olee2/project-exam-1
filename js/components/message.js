// Displaying errors if the API call fails
export const errorMessage = (error) => {
  return `<div class="error">
                <p>An error occured</p>
                <p>Please try again later</p>
            </div>`;
};

// Message modal for confirmation or error when using form
export const messageSent = (message = "Thanks for your message!") => {
  const modal = document.querySelector("dialog");
  const h3 = document.querySelector(".modal-h3");

  h3.innerText = message;

  modal.showModal();
  document.addEventListener("click", function (event) {
    // If user either clicks close button OR clicks outside the modal window, then close modal by calling closeModal()
    if (event.target.matches(".btn") || !event.target.closest("div")) {
      modal.close();
    }
  });
};
