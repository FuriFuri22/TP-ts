function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
function convertFahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
const convertBtn = document.getElementById("convertBtn");
const resultDiv = document.getElementById("result");
const tempInput = document.getElementById("tempInput");
const conversionType = document.getElementById("conversionType");
convertBtn.addEventListener("click", () => {
    const temp = parseFloat(tempInput.value);
    const conversion = conversionType.value;
    let result;
    if (conversion === "celsiusToFahrenheit") {
        result = convertCelsiusToFahrenheit(temp);
    }
    else {
        result = convertFahrenheitToCelsius(temp);
    }
    resultDiv.innerHTML = `Resultado: ${result}`;
});
