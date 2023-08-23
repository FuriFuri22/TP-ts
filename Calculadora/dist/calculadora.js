const sumar = (x, y) => x + y;
const restar = (x, y) => x - y;
const multiplicar = (x, y) => x * y;
const dividir = (x, y) => x / y;
const operaciones = (op, x, y) => {
    let resultado;
    switch (op) {
        case "+":
            resultado = sumar(x, y);
            break;
        case "-":
            resultado = restar(x, y);
            break;
        case "*":
            resultado = multiplicar(x, y);
            break;
        case "/":
            resultado = dividir(x, y);
            break;
    }
    return resultado;
};
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const operationSelect = document.getElementById("operation");
const calculateBtn = document.getElementById("calculateBtn");
const resultDiv = document.getElementById("result");
calculateBtn.addEventListener("click", () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operation = operationSelect.value;
    resultDiv.innerHTML = `Resultado: ${operaciones(operation, num1, num2)}`;
});
