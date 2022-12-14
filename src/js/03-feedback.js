import throttle from "lodash.throttle";

const form = document.querySelector('form');
const submit = document.querySelector('button');
const startSet = JSON.parse(localStorage.getItem("feedback-form-state"));
let feedback = {};

if (startSet) {
    feedback = startSet;
    feedback.email ? form[0].value = feedback.email : null;
    feedback.message ? form[1].value = feedback.message : null;
};

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