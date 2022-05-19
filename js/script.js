let inputName = document.getElementById("name");
let userKm = document.querySelector("[name='userKm']");
let userAge = document.querySelector("[name='userAge']");
const submit = document.getElementById("submitBtn");
const erase = document.getElementById("eraseBtn");


submit.addEventListener("click", function createTicket(){
    console.log(inputName.value, userKm.value, userAge.value);
});

