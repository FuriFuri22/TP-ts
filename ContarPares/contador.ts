const contarParesImpares = (inicio: number, fin: number): { pares: number, impares: number } => {
    let pares = 0;
    let impares = 0;

    for (let num = inicio; num <= fin; num++) {
        if (num % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    return { pares, impares };
}


const calcularBtn = document.getElementById("calcularBtn") as HTMLInputElement;
const resultadoDiv = document.getElementById("resultado") as HTMLDivElement;
const inicio = document.getElementById("inicio") as HTMLInputElement;
const fin = document.getElementById("fin") as HTMLInputElement;

calcularBtn.addEventListener("click", () => {

    const comienzo = parseFloat(inicio.value);
    const final = parseFloat(fin.value);

    const { pares, impares } = contarParesImpares(comienzo, final);

    resultadoDiv.innerHTML = `Pares: ${pares}, Impares: ${impares}`;
});