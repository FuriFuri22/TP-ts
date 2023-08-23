const sumar = (x : number , y : number ) : number => x + y;

const restar = (x : number, y: number) : number => x - y;

const multiplicar = (x : number, y: number) : number => x * y;

const dividir = (x : number, y: number): number => x / y;

const operaciones = (op : string , x : number, y: number): number =>{
 
    let resultado;

 switch (op) {
        case "+": 
            resultado = sumar(x, y)
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

const num1Input = document.getElementById("num1") as HTMLInputElement;
const num2Input = document.getElementById("num2") as HTMLInputElement;
const operationSelect = document.getElementById("operation") as HTMLSelectElement;
const calculateBtn = document.getElementById("calculateBtn") as HTMLButtonElement;
const resultDiv = document.getElementById("result") as HTMLDivElement;

calculateBtn.addEventListener("click", () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operation = operationSelect.value;

    resultDiv.innerHTML = `Resultado: ${operaciones(operation, num1, num2)}`

}
)