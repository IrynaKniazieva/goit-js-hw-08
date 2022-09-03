import throttle from "lodash.throttle";


const STORAGE_KEY = "feedback-form-state";
const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),

}

const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle (onFormInput, 500));

populateForm();

function onFormSubmit (evt) {

    evt.preventDefault(); 
 
    evt.currentTarget.reset();
    
    localStorage.removeItem(STORAGE_KEY);
    }

function onFormInput (evt) {
    evt.preventDefault(); 
    
    formData[evt.target.name] = evt.target.value;
    console.log(formData);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm () {
const savedMessage = localStorage.getItem(STORAGE_KEY);
const parseMassage = JSON.parse(savedMessage);

if (savedMessage) {
refs.input.value = parseMassage.email || "";
refs.textarea.value = parseMassage.message || "";
}
// localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
