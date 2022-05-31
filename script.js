let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.61;
let rateUSD = 4.28;
let rateCAD = 3.39;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;

        case "USD":
            result = amount / rateUSD;
            break;

        case "CAD":
            result = amount / rateCAD;
            break;
    }

    resultElement.innerHTML = `${amount.toFixed(2)} PLN= <strong>${result.toFixed(2)} ${currency}</strong>`;
});