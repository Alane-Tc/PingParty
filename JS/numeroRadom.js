window.addEventListener("load", function () {
    var btnGenerator = document.querySelector("#buttonGenerator");
    var showResults = document.querySelector("#show-Results");
    var btnRemove = document.querySelector("#buttonRemove");
    var showAlert = document.querySelector("#show-Alert");
    var showImage = document.querySelector("#image");
    var showMessage = document.querySelector("#message");

    let show = () => { showResults.style.display = "block"; }

    let hideResults = () => { showResults.style.display = "none"; }

    let Remove = () => { window.location = "numeroRandom.html"; }

    let numberRandom = (number1, number2) => { return Math.round(Math.random() * (number2 - number1) + parseInt(number1)); }

    let showAlertError = () => { showAlert.style.display = "block"; }

    let hideAlertError = () => { showAlert.style.display = "none"; }

    let imageSad = () => { showImage.innerHTML = '<img src="Img/sad-error.png" alt="Sad" width="110px" height="110px">' }

    let alertaError = () => { showMessage.innerHTML = "¡Uy! Algo salió mal"; showAlertError(); imageSad(); }

    let imageSad2 = () => { showImage.innerHTML = '<img src="Img/confundido.png" alt="Sad" width="110px" height="110px">' }

    let numberNegative = () => { showMessage.innerHTML = "No se pueden digitar números negativos"; showAlertError(); imageSad2(); }

    let calculateNumberRandom = () => {
        var n1 = parseInt(document.querySelector("#numberRandom").value);
        var n2 = parseInt(document.querySelector("#numberRandom2").value);

        if (n1 < 0 || n2 < 0) {
            numberNegative();
            hideResults();
        } else if (isNaN(n1) || isNaN(n2)) {
            alertaError();
        } else {
            show();
            hideAlertError();
            let results = numberRandom(n2, n1);
            document.querySelector("#span-results").innerHTML = results;
        }
    }

    btnGenerator.addEventListener("click", function () { calculateNumberRandom(); });

    btnRemove.addEventListener("click", function () { Remove(); });

});