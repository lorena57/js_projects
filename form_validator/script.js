const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// show input error message
function showError(input, message) {
    // the parentElement is the div within the form element
    const formControl = input.parentElement;
    // className is overwriting the class name is the div
    // you are essentially manipulating the classname and adding 'error'
    formControl.className= "form-control error";
    const small = formControl.querySelector('small');
    // the message is the argument within the parameter and 
    // the message is from the eventListener
    small.innerText = message;
}

// show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}