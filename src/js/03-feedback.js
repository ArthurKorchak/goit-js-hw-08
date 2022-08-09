import throttle from "lodash.throttle";

const form = document.querySelector('form');
const submit = document.querySelector('button');
let feedback = JSON.parse(localStorage.getItem("feedback-form-state"));

if (feedback.email) {form[0].value = feedback.email;};

if (feedback.message) {form[1].value = feedback.message;};

form.addEventListener('input', throttle(() => {
    feedback.email = form[0].value;
    feedback.message = form[1].value;
    localStorage.setItem("feedback-form-state", JSON.stringify(feedback));
}, 500));

submit.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(feedback);
    feedback = {};
    form[0].value = '';
    form[1].value = '';
    localStorage.setItem("feedback-form-state", JSON.stringify(feedback));
});