document.addEventListener("DOMContentLoaded", function () {

    const listaNumeros = document.getElementById("lista-numeros");
    const companyCodeInput = document.getElementById("company-code");
    const botonConvertir = document.getElementById("boton-convertir");
    const botonLimpiar = document.getElementById("boton-limpiar-convertidor");
    const botonCopiar = document.getElementById("boton-copiar");
    const resultadoDiv = document.getElementById("resultado-convertidor");

    botonConvertir.addEventListener("click", function () {

        const texto = listaNumeros.value.trim();
        const companyCode = companyCodeInput.value.trim();

        if (texto === "" || companyCode === "") {
            resultadoDiv.innerHTML = "<strong>Completá el listado y el company code.</strong>";
            return;
        }

        const numeros = texto.split(/\s+/);
        let resultado = "";

        numeros.forEach(numero => {
            resultado += `Document ${numero} was posted in company code ${companyCode}<br>`;
        });

        resultadoDiv.innerHTML = resultado;
    });

    botonLimpiar.addEventListener("click", function () {
        listaNumeros.value = "";
        companyCodeInput.value = "";
        resultadoDiv.innerHTML = "";
    });

    botonCopiar.addEventListener("click", function () {
        const texto = resultadoDiv.innerText;

        if (texto === "") {
            alert("No hay nada para copiar");
            return;
        }

        navigator.clipboard.writeText(texto)
            .then(() => alert("Texto copiado al portapapeles"))
            .catch(() => alert("Error al copiar"));
    });
});
