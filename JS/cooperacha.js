window.addEventListener("load", function () {
    //var price = document.querySelector("#input-Price");
    //Buttons 
    var btnCalculate = document.querySelector("#btn-Calculate");
    var btnClear = document.querySelector("#btn-Clear");
    var resultsCooperacha = document.querySelector("#result-Cooperacha");

    let Clear = () => { window.location = "cooperacha.html" }

    let calculate = () => {
        var person = parseInt(document.querySelector("#input-Person").value);
        let Total = 0;
        let n1
        for (let i = 1; i <= person; i++) {
            n1 = prompt("¿Cuál es el precio del producto?: " + (i));
            Total = Total + parseInt(n1);
        }
        resultsCooperacha.innerHTML = `La suma es: <span class="span-Total"><b>${Total}</b></span> ` +
            '<br>' + `Cooperacha: <span class="span-Total"><b>${Total / person}</b></span> `
    }

    btnCalculate.addEventListener("click", function () {
        calculate();
    });

    btnClear.addEventListener("click", function () {
        Clear();
    })

});