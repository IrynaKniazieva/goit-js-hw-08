import throttle from "lodash.throttle";


const STORAGE_KEY = "feedback-form-state";
const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),

}

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle (onFormInput, 500));

let formData = {};
populateForm();

function onFormSubmit (evt) {
    evt.preventDefault(); 
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log (formData);
    }

function onFormInput (evt) {
    evt.preventDefault(); 
    formData[evt.target.name] = evt.target.value;
  // console.log(formData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

}
function populateForm() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedMessage?.email) {
        refs.input.value = savedMessage.email;
    }

    if (savedMessage?.message) {
        refs.textarea.value = savedMessage.message;
    }
    if (savedMessage) {
        formData = savedMessage;
    }
}

// function populateForm() {
// const savedMessage = localStorage.getItem(STORAGE_KEY);
// const parseMassage = JSON.parse(savedMessage);

// refs.input.value = parseMassage.email || "";
// refs.textarea.value = parseMassage.message || "";

// localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
//     }

