// A function to handle the behaviour of the button for the form,
// used while the async function is awaiting its results

export const disableBtn = (btn, disabled=true) => {
    if(disabled){
        btn.disabled = true;
        btn.innerText = "Sending..";
    }else{
        btn.disabled = false;
        btn.innerText = "Submit";
    }
}

// A function to verify if there is additional posts in the category besides the 10 that is displayed
// If not, the More Posts button is hidden

export const morePosts = (button, numPosts, numInCategory) => {
    if (numPosts >= numInCategory){
        button.style.display = "none";
    }else{
        button.style.display = "block";
    }
}