let userName = document.querySelector("[name='userName']");
let userKm = document.querySelector("[name='userKm']");
let userAge = document.querySelector("[name='userAge']");
let spanName = document.getElementById("span-name");
let spanOffer = document.getElementById("span-offer");
let spanCarriage = document.getElementById("span-carriage");
let spanCode = document.getElementById("span-code");
let spanPrice = document.getElementById("span-price");
const submit = document.getElementById("submitBtn");
const erase = document.getElementById("eraseBtn");

const kmPrice = 0.21;



erase.addEventListener("click", function createTicket() {
    userName.value = "";
    userKm.value = "";
});

submit.addEventListener("click", function createTicket() {
    // Variables
    let randomNum = Math.random();
    let randomCarriage = Math.floor(randomNum * 10);
    let randomCode = Math.floor(randomNum * 100000);
    let totalPrice = userKm.value * kmPrice;
    let underDiscount = totalPrice * .2;
    let overDiscount = totalPrice * .4;  

    //Code
    spanName.innerHTML = userName.value;

    if (userAge.value === "under") {
        ticketPrice = totalPrice - underDiscount;
        spanOffer.innerHTML = "20% Discount";
    } else if (userAge.value === "over") {
        ticketPrice = totalPrice - overDiscount;
        spanOffer.innerHTML = "40% Discount";
    } else {
        ticketPrice = totalPrice;
        spanOffer.innerHTML = "No discount";
    }

    spanCarriage.innerHTML = randomCarriage.toFixed();
    spanCode.innerHTML = randomCode.toFixed();
    spanPrice.innerHTML = `${ticketPrice.toFixed(2)}€`;

    userName.value = "";
    userKm.value = "";
});

