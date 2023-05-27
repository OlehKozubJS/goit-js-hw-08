import throttle from "lodash.throttle";

const feedbackForm = document.querySelector(".feedback-form");

window.addEventListener("load", readMessage);
feedbackForm.addEventListener("input", throttle(writeMessage, 500));
feedbackForm.addEventListener("submit", submitForm);

let feedbackFormState = JSON.parse(localStorage.getItem("feedback-form-state")) || {email: "", message: ""};

function readMessage() {
    document.querySelector("input").value = feedbackFormState.email;
    document.querySelector("textarea").value = feedbackFormState.message;
}

function writeMessage(event) {
    if (event.target.nodeName === "INPUT") {
        feedbackFormState.email = event.target.value;
    }

    if (event.target.nodeName === "TEXTAREA") {
        feedbackFormState.message = event.target.value;
    }

    localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormState));
}

function submitForm(event) {
    event.preventDefault();
    feedbackFormState = JSON.parse(localStorage.getItem("feedback-form-state"));
    console.log(feedbackFormState);
    event.currentTarget.reset();
}