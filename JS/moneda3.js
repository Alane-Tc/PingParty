window.addEventListener("load", function () {
    var buttonThrow = document.querySelector("#btn-throw");
    var buttonBack = document.querySelector("#btn-back");
    var showResults = document.querySelector("#show-Results");
    var imgCoins = document.querySelector("#img-coin");
    var spanResults = document.querySelector("#result-coin");
    var text = document.querySelector("#text-result");

    var randomImage = new Array();
    randomImage[0] = "../Img/Monedas/Cara-dolar.png";
    randomImage[1] = "../Img/Monedas/cruz-dolar.png";
    randomImage[2] = "../Img/Monedas/cruz-dolar.png";
    randomImage[3] = "../Img/Monedas/Cara-dolar.png";
    randomImage[4] = "../Img/Monedas/cruz-dolar.png";
    randomImage[5] = "../Img/Monedas/Cara-dolar.png";

    let showResultsF = () => {
        showResults.style.display = "block";
    }

    let getRandomImage = () => {
        var numberImg = Math.floor(Math.random() * randomImage.length);
        setTimeout(() => {
            text.innerHTML = "Lanzando.";
        }, 1000);

        setTimeout(() => {
            text.innerHTML = "Lanzando..";
        }, 2000);

        setTimeout(() => {
            text.innerHTML = "Lanzando...";
        }, 3000);

        setTimeout(() => {
            text.innerHTML = "Lanzando....";
        }, 4000);

        setTimeout(() => {
            imgCoins.innerHTML = ('<img id=generator src="' + randomImage[numberImg] + '" />');
        if (numberImg == 0) {
            text.innerHTML = "Resultado: Cara";
        } else if (numberImg == 1) {
            text.innerHTML = "Resultado: Cruz";
        } else if (numberImg == 2) {
            text.innerHTML = "Resultado: Cruz";
        } else if (numberImg == 3) {
            text.innerHTML = "Resultado: Cara";
        } else if (numberImg == 4) {
            text.innerHTML = "Resultado: Cruz";
        } else if (numberImg == 5) {
            text.innerHTML = "Resultado: Cara";
        }
        }, 5000);  
    }

    let buttonDisable = () => {
        buttonThrow.style.background = "#ccc";
        buttonThrow.disabled = true;
    }

    let lanzarNuevo = () => { window.location = "moneda3.html" }

    buttonThrow.addEventListener("click", function () {
        showResultsF();
        getRandomImage();
        buttonDisable();
    })

    buttonBack.addEventListener("click", function () {
        lanzarNuevo();
    })

});