import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector("input[name=email]");
const messageInput = document.querySelector("input[name=message]");
console.log(emailInput);
console.log(messageInput);

// const LOCALSTORAGE_KEY = "";