var lista = []
var total = 4
function ENVIAR() {
    lista = []
    for (var contador = 1; contador <= total; contador++) {
        lista.push(document.getElementById("A" + contador).value)
    }
    document.getElementById("ResultadoAlumno").innerHTML = lista
}
function AGREGAR() {
    total++
    document.getElementById("CAMPOS").innerHTML += total + '<input type="text" id="A' + total + '"><br>'
}
function Orden_Alfabetico() {
    lista.sort()
    document.getElementById("ResultadoAlumno").innerHTML = lista
    document.getElementById("cuadrito").style.display = "none"
}
function ORDENAR() {
    document.getElementById("cuadrito").style.display = "block"
}