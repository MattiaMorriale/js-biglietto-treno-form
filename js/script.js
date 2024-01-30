const kmElement = document.querySelector("#km");

const kmkElement = document.querySelector("#kmk");

const buttonElement = document.querySelector("#button")

buttonElement.addEventListener("click",
    function(){
        kmElement.value = kmkElement.value;

        console.log("kmkElement")

        document.getElementById("kmkElement").innerHTML = kmkElement;
    }
)

const age = document.querySelector("#age");

const prezzo = 0.21;

const pfinale = prezzo * km;

document.getElementById("pfinale").innerHTML = pfinale.toFixed(2);

if ( age < 18 ) {

    document.getElementById("pfinale").innerHTML = pfinale - ( pfinale * 20 / 100 ).toFixed(2);

} else if ( age > 64 ) {

    document.getElementById("pfinale").innerHTML = pfinale - ( pfinale * 40 / 100 ).toFixed(2);

}
