function convertCelsiusToFahrenheit(celsius: number): number{
    return (celsius * 9/5) + 32;
}

function convertFahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5/9;
}

const convertBtn = document.getElementById("convertBtn") as HTMLInputElement;

const resultDiv = document.getElementById("result") as HTMLDivElement;

const tempInput = document.getElementById("tempInput") as HTMLInputElement;

const conversionType = document.getElementById("conversionType") as HTMLInputElement;

convertBtn.addEventListener("click", () => {
    const temp = parseFloat(tempInput.value);
    const conversion = conversionType.value;

    let result;
    
    if (conversion === "celsiusToFahrenheit") {
        result = convertCelsiusToFahrenheit(temp);
    } else {
        result = convertFahrenheitToCelsius(temp);
    }

    resultDiv.innerHTML = `Resultado: ${result}`;
});