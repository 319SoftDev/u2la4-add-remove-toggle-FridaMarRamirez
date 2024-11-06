// changing font color of heading
const heading = document.querySelector("#heading");

const changeFontColor = () => {
    heading.classList.toggle("blue-text");
}

heading.addEventListener("click", changeFontColor);

// changing text color of subheading
const subheading = document.querySelector("#subheading");

const changingColor = () => {
    subheading.classList.toggle("blue-text");
}

subheading.addEventListener("click", changingColor);

// reply button shows text box (remove hidden)
const replyButton = document.querySelector("#reply-button");
const replyMessage = document.querySelector("#reply-message");

const openReplyMessage = () => {
    replyMessage.classList.remove("hidden");
}

replyButton.addEventListener("click", openReplyMessage);

// Send and cancel buttons hide text box (add hidden)
const sendButton = document.querySelector("#send-button");
const cancelButton = document.querySelector("#cancel-button");

const closeReplyMessage = () => {
    replyMessage.classList.add("hidden");
}

sendButton.addEventListener("click", closeReplyMessage);
cancelButton.addEventListener("click", closeReplyMessage);