const kmElement = document.querySelector("#km");

const kmkElement = document.querySelector("#kmk");

const buttonElement = document.querySelector("#button")

const ageElement = document.querySelector("#age");

const agekElement = document.querySelector("#agek");

const nameElement = document.querySelector("#name")

const namekElement = document.querySelector("#namek")

buttonElement.addEventListener("click",
    function(){
        let nameValue=nameElement.value;
        namekElement.innerHTML=nameValue;

        let valore_impuit_mk=kmElement.value;
        kmkElement.innerHTML=valore_impuit_mk;

        let ageValue= ageElement.value;
        agekElement.innerHTML=ageValue;
        
        const prezzo = 0.21;

        const pfinale = prezzo * valore_impuit_mk;

        document.getElementById("pfinale").innerHTML = pfinale.toFixed(2);

        if ( ageValue < 18 ) {
        
            document.getElementById("pfinale").innerHTML = pfinale - ( pfinale * 20 / 100 ).toFixed(2);
        
        } else if ( ageValue > 64 ) {
        
            document.getElementById("pfinale").innerHTML = pfinale - ( pfinale * 40 / 100 ).toFixed(2);
        
        }
    }
)