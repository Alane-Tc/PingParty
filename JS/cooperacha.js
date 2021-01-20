window.addEventListener("load", function () {
    //Buttons 
    var btnCalculate = document.querySelector("#btn-Calculate");
    var btnClear = document.querySelector("#btn-Clear");
    var resultsCooperacha = document.querySelector("#result-Cooperacha");
    var alertError = document.querySelector("#alert-Error")

    let Clear = () => { window.location = "cooperacha.html" }

    let calculate = () => {
        var person = parseInt(document.querySelector("#input-Person").value);
        let nPerson = parseInt(document.querySelector("#input-NPerson").value);
        let Total = 0;
        let n1
        if (isNaN(person) || isNaN(nPerson)) {
            alertError.innerHTML = `<h3>¡Uy! Algo salió mal</h3>`
        } else if (person <= 0 || nPerson <= 0) {
            alertError.innerHTML = `<h3>No se pueden digitar numeros negativos</h3>`
        } else if (person == 1 || nPerson == 1) {
            alertError.innerHTML = `<h3>Para sacar la cooperacha tienen que ser más de 2 productos</h3>`
        } else {
            for (let i = 1; i <= person; i++) {
                n1 = prompt("¿Cuál es el precio del producto?: " + (i));
                Total = Total + parseInt(n1);
            }
            resultsCooperacha.innerHTML = `La suma es: <span class="span-Total"><b>${Total}</b></span> ` +
                '<br>' + `Cooperacha de ${nPerson} personas: <span class="span-Total"><b>${Total / nPerson}</b></span> `
        }
    }

    btnCalculate.addEventListener("click", function () { calculate(); });

    btnClear.addEventListener("click", function () { Clear(); })

});