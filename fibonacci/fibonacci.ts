
function generarFibonacci(n: number): number[] {
    const fibonacciSequence: number[] = [];

    if (n >= 1) {
        fibonacciSequence.push(0);
    }
    if (n >= 2) {
        fibonacciSequence.push(1);
    }

    for (let i = 2; i < n; i++) {
        const nextFibonacci = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
        fibonacciSequence.push(nextFibonacci);
    }

    return fibonacciSequence;
}

const nn = document.getElementById("numero") as HTMLInputElement;

const result = document.getElementById("resultado") as HTMLDivElement;

document.getElementById("calcularBtn")?.addEventListener("click", ()=>{
    const n = parseFloat(nn.value);

    if (!isNaN(n) && n >= 0) {
        const fibonacciNumbers = generarFibonacci(n);

        result.innerHTML = `Los primeros ${n} números de la secuencia de Fibonacci son:
        ${fibonacciNumbers.join(", ")}
        `
        console.log(fibonacciNumbers.join(", "));
    } else {
        console.log("Por favor, ingrese un número entero no negativo.");
    }
})
