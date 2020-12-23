window.addEventListener("load", function () {
    var buttonGenerator = document.querySelector("#buttonGenerator");
    var buttonUpdate = document.querySelector("#buttonRemove");
    var showResults = document.querySelector("#show-Results");
    var showloser = document.querySelector("#show-loser");
    var divimg = document.querySelector("#img");
    //Alet error 
    var showAlert = document.querySelector("#show-Alert");
    var showImage = document.querySelector("#image");
    var showMessage = document.querySelector("#message");

    let showRectangule = () => { showResults.style.display = "block"; }

    let update = () => { window.location = "perdedor.html" }

    let showAlertError = () => { showAlert.style.display = "block"; }

    let hideAlertError = () => { showAlert.style.display = "none"; }

    let imageSad = () => { divimg.innerHTML = '<img src="Img/gatito.png" alt="Sad" width="110px" height="110px">' }

    let imageSad2 = () => { showImage.innerHTML = '<img src="Img/confundido.png" alt="Sad" width="110px" height="110px">' }

    let numberNegative = () => { showMessage.innerHTML = "No se pueden digitar números negativos"; showAlertError(); imageSad2(); }

    let imagePensar = () => { divimg.innerHTML = '<img src="Img/hombre-pensando.png" alt="Sad" width="110px" height="110px">' }

    let Users = () => {
        let numbersUsers = parseInt(prompt("¿Cuantos jugadores son?"));
        if (numbersUsers < 0) {
            numberNegative();
        } else {
            hideAlertError();
            var nameUsers = []
            for (let index = 0; index < numbersUsers; index++) {
                nameUsers.push(prompt("Cual es el nombre del jugador: " + (index + 1)));
            }
            setTimeout(() => {
                showRectangule();
                showloser.innerHTML = "Estoy Pensando.";
                imagePensar();
            }, 1000);

            setTimeout(() => {
                showRectangule();
                showloser.innerHTML = "Estoy Pensando..";
                imagePensar();
            }, 2000);

            setTimeout(() => {
                showRectangule();
                showloser.innerHTML = "Estoy Pensando...";
                imagePensar();
            }, 3000);

            setTimeout(() => {
                showRectangule();
                showloser.innerHTML = "Estoy Pensando....";
                imagePensar();
            }, 4000);

            setTimeout(() => {
                var randomLoser = nameUsers[Math.floor(Math.random() * nameUsers.length)]
                showRectangule();
                showloser.innerHTML = randomLoser;
                imageSad();
            }, 5000);
        }
    }

    buttonGenerator.addEventListener("click", function () {
        Users();
    })

    buttonUpdate.addEventListener("click", function () { update(); })
});