const convertButton = document.querySelector(".button-converter")
const currencySelect = document.querySelector(".selected-option")


function convertValues() {
    const inputCurrencyValue = parseFloat(document.querySelector(".input-value").value);
    const valueToConvert = document.querySelector(".value-to-convert")
    const conversionResult = document.querySelector(".valor")


    const dollarQuote = 5.73
    const euroQuote = 6.25

    if (currencySelect.value == "dolar") {
        conversionResult.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dollarQuote)
    }

    if (currencySelect.value == "euro") {
        conversionResult.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency:"EUR",
        }).format(inputCurrencyValue / euroQuote)
    }
    
    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputCurrencyValue)
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-imagem")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar"
        currencyImg.src = "../assets/dolar.gif"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "../assets/euro.png"
    }

    convertValues()
}
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)