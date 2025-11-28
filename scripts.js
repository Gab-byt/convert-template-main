const USD = 5.34
const EUR = 6.20
const GBP = 7.07

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Permite números com vírgula ou ponto
amount.addEventListener("input", () => {
    amount.value = amount.value.replace(/[^0-9.,]/g, "")
})

form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value) {

        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break

        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break

        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break

        default:
            alert("Selecione uma moeda para converter.")
    }
}

function convertCurrency(amountInput, price, symbol) {
    try {
        const normalizedAmount = parseFloat(
            amountInput.replace(",", ".")
        )

        if (isNaN(normalizedAmount)) {
            return alert("Por favor, digite um valor válido.")
        }

        description.textContent =
            `${symbol} 1 = ${formatCurrencyBRL(price)}`

        const total = normalizedAmount * price

        result.textContent = `${formatCurrencyBRL(total)} Reais`

        footer.classList.add("show-result")

    } catch (error) {

        footer.classList.remove("show-result")
        console.error(error)
        alert("Não foi possível converter. Tente novamente.")
    }
}

function formatCurrencyBRL(value) {
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}
