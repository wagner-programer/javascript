function somar() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var resultado = numero1 + numero2;
    document.getElementById("resultado").textContent = resultado;
}

function subtrair() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var resultado = numero1 - numero2;
    document.getElementById("resultado").textContent = resultado;
}

function multiplicar() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var resultado = numero1 * numero2;
    document.getElementById("resultado").textContent = resultado;
}

function dividir() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    if (numero2 === 0) {
        alert("Não é possível dividir por zero!");
    } else {
        var resultado = numero1 / numero2;
        document.getElementById("resultado").textContent = resultado;
    }
}