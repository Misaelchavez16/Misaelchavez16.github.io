function procesarFormulario(){
    var peso = $("#peso").val()
    var estatura = $("#estatura").val()
    
    

    /*var peso = document.getElementById("peso").value
    var estatura = document.getElementById("estatura").value*/
    var imc = peso/(estatura*estatura)

    /*var mensaje = "Gracias " + nombre + ", pronto nos pondremos en contacto";
    $("#salida").text(mensaje) */ 

    var mensaje = "No has puesto nada";
    console.log(imc);

    if (imc < 18.6){
        mensaje = "Tu IMC es " + imc + " se concidera bajo de peso :)";
        $("#imagen").css("content", "url('Imagenes/BajoPeso.png')")
    }
    else if (imc <25){
        mensaje = "Tu IMC es " + imc + " se considera peso saludable MUY BIEN :D";
        $("#imagen").css("content", "url('Imagenes/Gigachad.jpg')")
    }
    else if (imc <30){
        mensaje = "Tu IMC es " + imc + " se considera sobre peso :)";
        $("#imagen").css("content", "url('Imagenes/SobrePeso.png')")
    }
    else if (imc <35){
        mensaje = "Tu IMC es " + imc + " se considera obesidad de grado 1 :|";
        $("#imagen").css("content", "url('Imagenes/ObesidadGrado.png')")
    }
    else if (imc <40){
        mensaje = "Tu IMC es " + imc + " se considera obesidad de grado 2 :(";
        $("#imagen").css("content", "url('Imagenes/ObesidadGrado.png')")
    }
    else if (imc >=40){
        mensaje = "Tu IMC es " + imc + " se considera obesidad morbida D:";
        $("#imagen").css("content", "url('Imagenes/Morbida.png')")
    }

    console.log(mensaje)
    $("#salida").text(mensaje) 
}