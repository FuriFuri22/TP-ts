
const countBtn = document.getElementById("countBtn") as HTMLInputElement;

const resultDiv = document.getElementById("result") as HTMLDivElement;

const sentenceInput = document.getElementById("sentenceInput") as HTMLInputElement;

countBtn.addEventListener("click", () => {
    const sentence = sentenceInput.value ;
    const wordCount = contarPalabras(sentence);

    resultDiv.innerHTML = `Cantidad de palabras: ${wordCount}`;
});

function contarPalabras(oracion: string): number{
    const palabras = oracion.trim().split(/\s+/);
    return palabras.length;
}
