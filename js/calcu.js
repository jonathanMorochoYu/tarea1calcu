function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calcular() {
    var expression = document.getElementById('display').value;
    var result = eval(expression);
    document.getElementById('display').value = result;
}

function toggleImagen() {
    var imagen = document.getElementById("imagen");
    if (imagen.style.display === "none") {
        imagen.style.display = "block";
    } else {
        imagen.style.display = "none";
    }
}