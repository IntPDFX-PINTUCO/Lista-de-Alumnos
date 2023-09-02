var lista = []
var total = 4
function ENVIAR() {
    lista = []
    for (var contador = 1; contador <= total; contador++) {
        lista.push(document.getElementById("A" + contador).value)
    }
    document.getElementById("ResultadoAlumno").innerHTML = lista.join(" - ")
}
function AGREGAR() {
    total++
    document.getElementById("CAMPOS").innerHTML += total + '<input type="text" id="A' + total + '"><button class="botesito" onclick="borrar ('+ total +')"></button><br>'
}
function Orden_Alfabetico() {
    lista.sort()
    document.getElementById("ResultadoAlumno").innerHTML = lista.join(" - ")
    document.getElementById("cuadrito").style.display = "none"
    var entradas= document.querySelectorAll("input");
    for (let index = 0; index < entradas.length; index++) {
        entradas[index].value=lista[index]
    }
}
function ORDENAR() {
    document.getElementById("cuadrito").style.display = "block"
}
function Orden_deletra() {
    lista.sort(function (a,b) {
    return a.length-b.length
    })
    document.getElementById("ResultadoAlumno").innerHTML = lista.join(" - ")
    document.getElementById("cuadrito").style.display = "none"
    var entradas= document.querySelectorAll("input");
    for (let index = 0; index < entradas.length; index++) {
        entradas[index].value=lista[index]
    }
}
function ELIMINAR() {
    var entradas= document.querySelectorAll(".botesito");
    for (let index = 0; index < entradas.length; index++) {
        entradas[index].style.display="inline-block"
    }
}
function borrar (basurita) {
lista.splice(basurita-1,1)
document.getElementById("ResultadoAlumno").innerHTML = lista.join(" - ")
}