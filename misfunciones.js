var hola = "Hola Mundo"

function procesarFormulario(){
    var nombre = document.getElementById("nombre").value 
    document.getElementById("salida").innerHTML = "Gracias " + nombre + " pronto nos pondremos en contacto";
}