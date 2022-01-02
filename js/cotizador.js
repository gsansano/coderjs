//Se define la función que carga el formulario
function cargarFormulario() {
    var provincias = ["Seleccionar", "Río Negro", "Neuquén"];

    //Se define la función que completa el menú desplegable
    function cargarProvincias(provincias) {
        var select_provincia = $("#provincia");

        //Recorro el array de provincias para completar los elementos del select
        for (let provincia of provincias) {
            select_provincia.append("<option value='" + provincia + "'>" + provincia + "</option>");
        }
    }
    //Constructor de objetos para los servicios ofrecidos
    class Servicio {
        constructor(nombre, precio) {
            this.nombre = nombre;
            this.precio = precio;
            this.iva = precio * 1.21;
        }
    }
    //Se crean los objetos con el constructor definido anteriormente
    const servicio0 = new Servicio("Seleccionar", "0");
    const servicio1 = new Servicio("Consulta", "4184");
    const servicio2 = new Servicio("Carta documento", "8368");
    const servicio3 = new Servicio("Audiencia", "12552");
    const servicio4 = new Servicio("Demanda", "20920");

    //Se define el array de servicios y se lo integra mediante el método push
    const arrayServicios = []
    arrayServicios.push(servicio0, servicio1, servicio2, servicio3, servicio4);

    //Se define la función que carga los servicios en el select
    function cargarServicios(arrayServicios) {
        var select_servicios = $("#servicio");
        //Se recorre el array de servicios para completar las opciones del select, dejando oculto el precio y mostrando sólo el nombre de cada objeto
        for (let Servicio of arrayServicios) {
            select_servicios.append("<option value='" + Servicio.precio + "'>" + Servicio.nombre + "</option>");
        }
    }
    //Validación de los campos del formulario con clases de Bootstrap
    function camposValidos(nombre1, nombre2, estado) {
        var nombre1 = $("#" + nombre1);
        var nombre2 = $("#" + nombre2);

        if (estado == "ok") {
            nombre1.removeClass("is-invalid");
            nombre1.addClass("is-valid");
            nombre2.removeClass("invalid-feedback");
            nombre2.addClass("valid-feedback");
        } else {
            nombre1.removeClass("is-valid");
            nombre1.addClass("is-invalid");
            nombre2.removeClass("valid-feedback");
            nombre2.addClass("invalid-feedback");
        }
    }

    function validarProvincia() {
        var provincia = $("#provincia");
    }

    //Se define la función que guarda los datos en el localStorage 
    function guardarDatosForm() {
        var nombre = $("#nombre").val();
        var email = $("#email").val();
        var telefono = $("#telefono").val();
        var provincia = $("#provincia").val();
        var ciudad = $("#ciudad").val();
        var servicioNombre = $("#servicio option:selected").text();
        var servicioPrecio = $("#servicio option:selected").val();
        localStorage.setItem("datosFormulario", JSON.stringify({ nombre: nombre, email: email, telefono: telefono, provincia: provincia, ciudad: ciudad, servicioPrecio: servicioPrecio, servicioNombre: servicioNombre }));
    }
    //VALIDACIONES CAMPO POR CAMPO DEL FORMULARIO
    function validarFormulario() {
        var nombre = $("#nombre");
        var textoNombre = $("#textoNombre");

        if (nombre.val() == "") {
            textoNombre.html("Por favor complete este campo");
            camposValidos("nombre", "textoNombre", "error");
            nombre.focus();
            return false;
        } else {
            textoNombre.html("Datos validados!");
            camposValidos("nombre", "textoNombre", "ok");
        }

        var email = $("#email");
        var textoEmail = $("#textoEmail");

        if (email.val() == "") {
            textoEmail.html("Por favor complete este campo");
            camposValidos("email", "textoEmail", "error");
            email.focus();
            return false;
        } else {
            textoEmail.html("Datos validados!");
            camposValidos("email", "textoEmail", "ok");
        }

        var telefono = $("#telefono");
        var textoTelefono = $("#textoTelefono");

        if (telefono.val() == "") {
            textoTelefono.html("Por favor complete este campo");
            camposValidos("telefono", "textoTelefono", "error");
            telefono.focus();
            return false;
        } else {
            textoTelefono.html("Datos validados!");
            camposValidos("telefono", "textoTelefono", "ok");
        }

        var provincia = $("#provincia");
        var textoProvincia = $("#textoProvincia");

        if (provincia.val() == "Seleccionar") {
            textoProvincia.html("Por favor, seleccione una Provincia");
            camposValidos("provincia", "textoProvincia", "error");
            provincia.focus();
            return false;
        } else {
            textoProvincia.html("Datos validados!");
            camposValidos("provincia", "textoProvincia", "ok");
        }

        var ciudad = $("#ciudad");
        var textoCiudad = $("#textoCiudad");

        if (ciudad.val() == "") {
            textoCiudad.html("Por favor complete este campo");
            camposValidos("ciudad", "textoCiudad", "error");
            ciudad.focus();
            return false;
        } else {
            textoCiudad.html("Datos validados!");
            camposValidos("ciudad", "textoCiudad", "ok");
        }

        var servicio = $("#servicio");
        var textoServicio = $("#textoServicio");

        if (servicio.val() == "Seleccionar") {
            textoServicio.html("Error! Ingrese un servicio válido");
            camposValidos("servicio", "textoServicio", "error");
            servicio.focus();
            return false; // Detengo la validación en este lugar
        } else {
            textoServicio.html("Datos validados!");
            camposValidos("servicio", "textoServicio", "ok");
        }

        var tyc = $("#tyc");
        var textoTYC = $("#textoTYC");

        if (!tyc.is(':checked')) {
            textoTYC.html("Por favor acepte los Términos y Condiciones!");
            camposValidos("tyc", "textoTYC", "error");
            tyc.focus();
            return false; // Detengo la validación en este lugar
        } else {
            textoTYC.html("Condiciones aceptadas");
            camposValidos("tyc", "textoTYC", "ok");
        }
        //Se llama a la función que guarda los datos en la localStorage y se la vincula con el submit
        guardarDatosForm();
        $("#formulario_contacto").submit();
        console.log("Formulario Enviado!");
    }
    //Se cargan ambos arrays
    cargarProvincias(provincias);
    cargarServicios(arrayServicios);

    //Eventos del formulario para la validación en tiempo real
    $("#enviar_form").click(function () {
        validarFormulario();
    })

    $("#nombre").focusout(function () {
        validarFormulario();
    })

    $("#email").focusout(function () {
        validarFormulario();
    })

    $("#telefono").focusout(function () {
        validarFormulario();
    })

    $("#provincia").focusout(function () {
        validarFormulario();
    })

    $("#provincia").change(function () {
        validarProvincia();
    })

    $("#ciudad").focusout(function () {
        validarFormulario();
    })

    $("#servicio").focusout(function () {
        validarFormulario();
    })
    //Se esconde el párrafo de políticas de privacidad con el método hide
    $("#politica").hide();

    //Se agrega el evento mouseenter para mostrar el párrafo oculto cuando el cursor entra al campo del elemento identificado
    $("#line-politica").mouseenter(function () {
        $("#politica").fadeIn(); //Se reemplazó show por fadeIn para animar la transición

    })

    //Se anima el elemento haciéndolo aparecer con animaciones concatenadas con un delay
    $("#line-politica")
        .hide()
        .slideDown(2000)
        .delay(4000)
;
}

//Se llama finalmente a la función madre que carga todo el formulario
cargarFormulario();