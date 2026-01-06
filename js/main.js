document.addEventListener("DOMContentLoaded", function () {

    const date1Input = document.getElementById("date1");
    const date2Input = document.getElementById("date2");
    const calculateBtn = document.getElementById("boton-calcular");
    const clearBtn = document.getElementById("boton-limpiar");

    const resultDiv = document.getElementById("resultado-fechas");

    calculateBtn.addEventListener("click", function () {
        let date1 = new Date(date1Input.value);
        let date2 = new Date(date2Input.value);

        if (isNaN(date1) || isNaN(date2)) {
            resultDiv.innerHTML = "<strong>Por favor, ingrese fechas válidas.</strong>";
            return;
        }

        if (date1 > date2) {
            [date1, date2] = [date2, date1];
        }

        let years = date2.getFullYear() - date1.getFullYear();
        let months = date2.getMonth() - date1.getMonth();
        let days = date2.getDate() - date1.getDate();

        if (days < 0) {
            months--;
            days += new Date(date2.getFullYear(), date2.getMonth(), 0).getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        months += years * 12;

        resultDiv.innerHTML = `
            <h4>DIFERENCIA</h4>
            <p><strong>AÑOS:</strong> ${years}</p>
            <p><strong>MESES:</strong> ${months}</p>
            <p><strong>DÍAS:</strong> ${days}</p>
        `;
    });

    clearBtn.addEventListener("click", function () {
        date1Input.value = "";
        date2Input.value = "";
        resultDiv.innerHTML = "";
    });
});
