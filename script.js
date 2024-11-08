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


// opening the inbox message
const openButton = document.querySelector("#open-button");
const inbox = document.querySelector("#inbox");
const inboxMessage = document.querySelector("#inbox-message");
const markUnreadButton = document.querySelector("#mark-button");

const openingMessage = () => {
    inbox.classList.add("is-read");
    inboxMessage.classList.remove("hidden");
    markUnreadButton.classList.remove("hidden");
}

openButton.addEventListener("click", openingMessage);


// closing the inbox message
const closeButton = document.querySelector("#close");

const closeMessage = () => {
    inboxMessage.classList.add("hidden");
}

closeButton.addEventListener("click", closeMessage);


// marking message as unread (using the Mark as Unread button)
const markUnread = () => {
    markUnreadButton.classList.add("hidden");
    inbox.classList.remove("is-read");
    inboxMessage.classList.add("hidden");
}

markUnreadButton.addEventListener("click", markUnread);


// changing the checkbox
const checkboxButton = document.querySelector("#checkbox");
const actionButtons = document.querySelector("#action-buttons");

const checkBox = () => {
    inbox.classList.toggle("is-selected");
    actionButtons.classList.toggle("hidden");
}

checkboxButton.addEventListener("click", checkBox);


// deleting the message
const deleteMessageButton = document.querySelector("#delete-button");

const deleteMessage = () => {
    inbox.classList.toggle("hidden");
    if (deleteMessageButton.innerHTML == "Delete Message(s)"){
        deleteMessageButton.innerHTML = "Undo Deletion";
    } else {
        deleteMessageButton.innerHTML = "Delete Message(s)";
    }
}

deleteMessageButton.addEventListener("click", deleteMessage);


// marking the message as read
const markReadButton = document.querySelector("#read-button");

const markAsRead = () => {
    markUnreadButton.classList.remove("hidden");
    inbox.classList.remove("is-selected");
    inbox.classList.toggle("is-read");
}

markReadButton.addEventListener("click", markAsRead);