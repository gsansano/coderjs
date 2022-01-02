//Se leen los datos de la localStorage y se los parsea
function cargarDatosForm() {
    return JSON.parse(localStorage.getItem("datosFormulario"));
}
//Se imprimen los datos leídos en el div correspondiente
function mostrarDatos() {
    let datos_formulario = cargarDatosForm();
    //Calculo y muestro los diversos valores redondeando a dos decimales con el método toFixed
    let IVA = (datos_formulario.servicioPrecio * 0.21).toFixed(2);
    let tasaJusticia = (datos_formulario.servicioPrecio * 0.025).toFixed(2);
    let precioFinal = (datos_formulario.servicioPrecio * 1.21).toFixed(2);
    //Se crea el texto del resultado incorporando las variables leídas del localStorage
    let texto = `<br>En la ciudad de <strong>${datos_formulario.ciudad}</strong>, Provincia de <strong>${datos_formulario.provincia}</strong>, se confecciona el siguiente presupuesto de labor profesional a pedido del cliente<strong>, ${datos_formulario.nombre}</strong>.<br>
                El cliente deja expresamente asentado que acepta recibir todas las comunicaciones pertinentes a la casilla de correo electrónico:<strong> ${datos_formulario.email}</strong>, y sólo para el caso de ser necesario se lo contactará al teléfono: <strong>${datos_formulario.telefono}</strong>.<br> <br>     
                <i>Servicio seleccionado: ${datos_formulario.servicioNombre}</i> <br>
                Valor según Ley Arancelaria: $${datos_formulario.servicioPrecio} <br>
                <p>IVA: $${IVA}</p>
                <strong>Precio Final IVA incluido: $${precioFinal}</strong><br>
                <strong>Tasa de Justicia: $${tasaJusticia}</strong><br>
                <br><p>La presente cotización posee carácter estimativo, y tiene una validez de treinta (30) días corridos desde la fecha de su emisión.`;
    //Se inyecta el contenido HTML al div con el id correspondiente en el DOM
    $("#resultado").html(texto);
}
//Se llama a la función que muestra los datos
mostrarDatos();

//Se incorpora un botón de "Imprimir" con una función arrow y la función window.print(), para que el cliente pueda imprimir su presupuesto
$(document).ready(function () {
    $("#imprime").click(() => {
    window.print()
    })
})