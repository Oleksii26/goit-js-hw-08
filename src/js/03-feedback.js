
import throttle from 'lodash.throttle';

const refTextarea = document.querySelector('textarea');
const refForm = document.querySelector('form');

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

populateTextarea();
refForm.addEventListener('submit', onFormSubmit);
refForm.addEventListener('input', throttle(onTextAreaInput, 500));

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.target.reset();
  let msData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  localStorage.removeItem(STORAGE_KEY);
  console.log(msData);
}

function onTextAreaInput(evt) {
  let message = localStorage.getItem(STORAGE_KEY);
  message = message ? JSON.parse(message) : {};
  message[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(message));
}

function populateTextarea() {
  let message = localStorage.getItem(STORAGE_KEY);
  if (message) {
    message = JSON.parse(message);
    Object.entries(message).forEach(([name, value]) => {
      refForm.elements[name].value = value;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(message));
    });
  }
  else {
    message = {};
  }
}