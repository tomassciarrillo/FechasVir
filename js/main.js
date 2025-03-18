// document.addEventListener("DOMContentLoaded", function () {
//     const date1Input = document.getElementById("date1");
//     const date2Input = document.getElementById("date2");
//     const calculateBtn = document.getElementById("boton-calcular");
//     const clearBtn = document.getElementById("boton-limpiar");

//     // Obtener el div de resultados fuera del contenedor principal
//     const resultDiv = document.createElement("div");
//     resultDiv.classList.add("resultado-calculadora");
//     resultDiv.style.marginTop = "20px"; 
//     document.body.appendChild(resultDiv); // Lo agregamos al final del body

//     calculateBtn.addEventListener("click", function () {
//         let date1 = new Date(date1Input.value);
//         let date2 = new Date(date2Input.value);

//         if (isNaN(date1) || isNaN(date2)) {
//             resultDiv.innerHTML = "<strong>Por favor, ingrese fechas válidas.</strong>";
//             return;
//         }

//         // Asegurar que date1 sea siempre la menor
//         if (date1 > date2) {
//             [date1, date2] = [date2, date1];
//         }

//         let years = date2.getFullYear() - date1.getFullYear();
//         let months = date2.getMonth() - date1.getMonth();
//         let days = date2.getDate() - date1.getDate();

//         if (days < 0) {
//             months--;
//             days += new Date(date2.getFullYear(), date2.getMonth(), 0).getDate();
//         }

//         if (months < 0) {
//             years--;
//             months += 12;
//         }

//         resultDiv.innerHTML = `
//             <h4>DIFERENCIA</h4>
//             <div>
//                 <p><strong>AÑOS:</strong> ${years}</p>
//                 <p><strong>MESES:</strong> ${months}</p>
//                 <p><strong>DÍAS:</strong> ${days}</p>
//             </div>
//         `;
//     });

//     clearBtn.addEventListener("click", function () {
//         date1Input.value = "";
//         date2Input.value = "";
//         resultDiv.innerHTML = "";
//     });
// });



document.addEventListener("DOMContentLoaded", function () {
    const date1Input = document.getElementById("date1");
    const date2Input = document.getElementById("date2");
    const calculateBtn = document.getElementById("boton-calcular");
    const clearBtn = document.getElementById("boton-limpiar");

    // Obtener el div de resultados fuera del contenedor principal
    const resultDiv = document.createElement("div");
    resultDiv.classList.add("resultado-calculadora");
    resultDiv.style.marginTop = "20px"; 
    document.body.appendChild(resultDiv); // Lo agregamos al final del body

    calculateBtn.addEventListener("click", function () {
        let date1 = new Date(date1Input.value);
        let date2 = new Date(date2Input.value);

        if (isNaN(date1) || isNaN(date2)) {
            resultDiv.innerHTML = "<strong>Por favor, ingrese fechas válidas.</strong>";
            return;
        }

        // Asegurar que date1 sea siempre la menor
        if (date1 > date2) {
            [date1, date2] = [date2, date1];
        }

        let years = date2.getFullYear() - date1.getFullYear();
        let months = date2.getMonth() - date1.getMonth();
        let days = date2.getDate() - date1.getDate();

        // Si los días son negativos, corregimos el mes y los días
        if (days < 0) {
            months--;
            days += new Date(date2.getFullYear(), date2.getMonth(), 0).getDate(); // días del mes anterior
        }

        // Si los meses son negativos, corregimos los años y los meses
        if (months < 0) {
            years--;
            months += 12;
        }

        // Aquí agregamos los meses correspondientes a los años completos
        months += years * 12;

        resultDiv.innerHTML = `
            <h4>DIFERENCIA</h4>
            <div>
                <p><strong>AÑOS:</strong> ${years}</p>
                <p><strong>MESES:</strong> ${months}</p>
                <p><strong>DÍAS:</strong> ${days}</p>
            </div>
        `;
    });

    clearBtn.addEventListener("click", function () {
        date1Input.value = "";
        date2Input.value = "";
        resultDiv.innerHTML = "";
    });
});
