function mostrarError(redInput, input, error, defaultError) {
    if (input.value.trim() === "") {
        error.textContent = defaultError;
        error.style.display = "block";
        redInput.classList.add("text-lightred");
        input.classList.add('border-2', 'border-lightred');
    } else {
        error.style.display = "none";
        redInput.classList.remove("text-lightred");
        input.classList.remove('border-2', 'border-lightred');
    }
}


function validarInputs() {
    const dayInput = document.getElementById("day");
    const monthInput = document.getElementById("month");
    const yearInput = document.getElementById("year");

    const dayError = document.querySelector("#day + span");
    const monthError = document.querySelector("#month + span");
    const yearError = document.querySelector("#year + span");


    /**LABELs */

    const L_day = document.getElementById("Lday");
    const L_month = document.getElementById("Lmonth");
    const L_year = document.getElementById("Lyear");



    let day = parseInt(dayInput.value);
    let month = parseInt(monthInput.value);
    let year = parseInt(yearInput.value);

    //flag 
    let flag = false;


    // Validar campo de día
    mostrarError(L_day, dayInput, dayError, "This field is required");
    if (day < 1 || day > 31) {
        dayError.textContent = "Must be a valid day";
        dayError.style.display = "block";
        L_day.classList.add("text-lightred");
        dayInput.classList.add('border-2', 'border-lightred');
        flag = true;
    }
    // Validar campo de mes
    mostrarError(L_month, monthInput, monthError, "This field is required");
    if (month < 1 || month > 12) {
        monthError.textContent = "Must be a valid month";
        monthError.style.display = "block";
        L_month.classList.add("text-lightred");
        monthInput.classList.add('border-2', 'border-lightred');
        flag = true;
    }

    // Validar campo de año
    mostrarError(L_year, yearInput, yearError, "This field is required");
    if (year <= 1000 || year > new Date().getFullYear()) {
        yearError.textContent = "Must be a valid past";
        yearError.style.display = "block";
        L_year.classList.add("text-lightred");
        yearInput.classList.add('border-2', 'border-lightred');
        flag = true;
    }
    if (flag) {
        document.getElementById("s-day").textContent = "--";
        document.getElementById("s-mont").textContent = "--";
        document.getElementById("s-year").textContent = "--";
    }
    // Verificar si no hay errores
    if (dayError.style.display === "none" && monthError.style.display === "none" && yearError.style.display === "none") {
        const fechaNacimiento = `${day}/${month}/${year}`;
        const edad = calcularEdad(fechaNacimiento);
        // Si la edad es nula, mostrar un mensaje de error
        if (edad === null) {
            dayError.textContent = "Invalid date";
            dayError.style.display = "block";
            L_day.classList.add("text-lightred");
            dayInput.classList.add('border-2', 'border-lightred');

            monthError.textContent = "Invalid date";
            monthError.style.display = "block";
            L_month.classList.add("text-lightred");
            monthInput.classList.add('border-2', 'border-lightred');

            yearError.textContent = "Invalid date";
            yearError.style.display = "block";
            L_year.classList.add("text-lightred");
            yearInput.classList.add('border-2', 'border-lightred');

            document.getElementById("s-day").textContent = "--";
            document.getElementById("s-mont").textContent = "--";
            document.getElementById("s-year").textContent = "--";


        } else {
            // Mostrar la edad en años, meses y días
            document.getElementById("s-day").textContent = edad.años;
            document.getElementById("s-mont").textContent = edad.meses;
            document.getElementById("s-year").textContent = edad.dias;
        }
    }
}


function calcularEdad(fechaNacimiento) {
    // Validar la fecha de nacimiento
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(fechaNacimiento) || !esFechaValida(fechaNacimiento)) {
        return null;
    }

    // Convertir la fecha de nacimiento en un objeto Date
    const partesFecha = fechaNacimiento.split('/');
    const fechaNacimientoDate = new Date(partesFecha[2], partesFecha[1] - 1, partesFecha[0]);

    // Calcular la diferencia entre la fecha actual y la fecha de nacimiento
    const hoy = new Date();
    let edadAnos = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
    let edadMeses = hoy.getMonth() - fechaNacimientoDate.getMonth();
    let edadDias = hoy.getDate() - fechaNacimientoDate.getDate();

    // Ajustar la edad en caso de que falte algún mes o día
    if (edadDias < 0) {
        const ultimoDiaMesAnterior = new Date(hoy.getFullYear(), hoy.getMonth(), 0).getDate();
        edadDias += ultimoDiaMesAnterior;
        edadMeses--;
    }
    if (edadMeses < 0) {
        edadMeses += 12;
        edadAnos--;
    }

    // Retornar la edad como un objeto
    return {
        años: edadAnos,
        meses: edadMeses,
        dias: edadDias
    };
}
function esFechaValida(fecha) {
    // Separa la fecha en sus partes (día, mes y año)
    const partesFecha = fecha.split('/');
    const dia = parseInt(partesFecha[0], 10); // Obtiene el día de la fecha y lo convierte a número
    const mes = parseInt(partesFecha[1], 10) - 1; // Obtiene el mes de la fecha y lo convierte a número, se resta 1 ya que los meses en JS se indexan desde 0 (enero es 0, febrero es 1, etc.)
    const anio = parseInt(partesFecha[2], 10); // Obtiene el año de la fecha y lo convierte a número

    // Crea un objeto Date con la fecha
    const fechaDate = new Date(anio, mes, dia);





    // Compara la fecha original con la fecha creada por el objeto Date
    // Si son iguales, entonces la fecha es válida
    return fechaDate.getDate() === dia && fechaDate.getMonth() === mes && fechaDate.getFullYear() === anio;
}


// se hace con el fin de validar el texto ingresado por un dispositivo



function validarTexto(input) {
    const regex = /^[\d/]*$/;
    const valor = input.value;
    if (!regex.test(valor)) {
        input.value = valor.slice(0, -1);
    }
}