const form = document.querySelector("#form-register");

const capturarDatos = form => {
    const campos = {};

    for (let element of form.elements) {
        if (!element.name) continue;
        if (element.type == "radio" && !element.checked) continue;
        campos[element.name] = element.value;
    }

    return campos;
};

if ( form ) {
    form.onsubmit = (e) => {
        e.preventDefault();
        const campos = capturarDatos(form);
        form.reset();

        // Gardar datos en localStorage
        localStorage.setItem("registro", JSON.stringify(campos));
    }
}

// Si desea recuperar los datos de localStorage se puede hacer lo siguiente:
const registro = localStorage.getItem("registro");

if ( registro ) {
    const datos = JSON.parse(registro);
    console.log( datos );
}