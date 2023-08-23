const countBtn = document.getElementById("countBtn");
const resultDiv = document.getElementById("result");
const sentenceInput = document.getElementById("sentenceInput");
countBtn.addEventListener("click", () => {
    const sentence = sentenceInput.value;
    const wordCount = contarPalabras(sentence);
    resultDiv.innerHTML = `Cantidad de palabras: ${wordCount}`;
});
function contarPalabras(oracion) {
    const palabras = oracion.trim().split(/\s+/);
    return palabras.length;
}
