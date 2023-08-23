const generarTabla = (numero: number, maximo: number): string => {
    let tabla = '';

    for (let i = 1; i <= maximo; i++) {
        tabla += `${numero} x ${i} = ${numero * i}\n`;
    }

    return tabla;
}

const num = document.getElementById("numero") as HTMLInputElement;
const max = document.getElementById("maximo") as HTMLInputElement;

const generarBtn = document.getElementById("generarBtn");
const tablaResultado = document.getElementById("tablaResultado");

generarBtn.addEventListener("click", () => {
    const numero = parseFloat(num.value);
    const maximo = parseFloat(max.value);

    const tabla = generarTabla(numero, maximo);

    tablaResultado.textContent = tabla;
});