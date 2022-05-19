let userName = document.querySelector("[name='userName']");
let userKm = document.querySelector("[name='userKm']");
let userAge = document.querySelector("[name='userAge']");
let spanName = document.getElementById("span-name");
let spanCarriage = document.getElementById("span-carriage");
let spanOffer = document.getElementById("span-offer");
let spanPrice = document.getElementById("span-price");
const submit = document.getElementById("submitBtn");
const erase = document.getElementById("eraseBtn");


erase.addEventListener("click", function createTicket(){
    userName.value = "";
    userKm.value = "";
});

submit.addEventListener("click", function createTicket(){
    spanName.innerHTML = userName.value;

    if (userAge.value === "under"){
        spanOffer.innerHTML = "20% Discount";
    } else if (userAge.value === "over"){
        spanOffer.innerHTML = "40% Discount";
    } else{
        spanOffer = "No discount";
    }

    userName.value = "";
    userKm.value = "";
});

