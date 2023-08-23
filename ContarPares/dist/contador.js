const contarParesImpares = (inicio, fin) => {
    let pares = 0;
    let impares = 0;
    for (let num = inicio; num <= fin; num++) {
        if (num % 2 === 0) {
            pares++;
        }
        else {
            impares++;
        }
    }
    return { pares, impares };
};
const calcularBtn = document.getElementById("calcularBtn");
const resultadoDiv = document.getElementById("resultado");
const inicio = document.getElementById("inicio");
const fin = document.getElementById("fin");
calcularBtn.addEventListener("click", () => {
    const comienzo = parseFloat(inicio.value);
    const final = parseFloat(fin.value);
    const { pares, impares } = contarParesImpares(comienzo, final);
    resultadoDiv.innerHTML = `Pares: ${pares}, Impares: ${impares}`;
});
