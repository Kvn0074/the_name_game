/*===============================================================*/
/*======================| C O U N T D O W N |====================*/
/*===============================================================*/

    /*___________________*/
    /*___| VARIABLES |___*/

    let deadLine = new Date("may 18, 2022 18:00:00").getTime();

    let daysHTML = document.getElementById("days");
    let hoursHTML = document.getElementById("hours");
    let minutesHTML = document.getElementById("minutes");
    let secondsHTML = document.getElementById("seconds");
    

    /*___________________*/
    /*___| FUNCTIONS |___*/

    function countDown(){

        let now = new Date().getTime();
        let theCountDown = deadLine - now;

        let days = Math.floor(theCountDown / (1000 * 60 * 60 * 24));
        let hours = Math.floor((theCountDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((theCountDown % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((theCountDown % (1000 * 60)) / 1000);

        daysHTML.textContent = days + " .";
        hoursHTML.textContent = hours + " .";
        minutesHTML.textContent = minutes + " .";
        secondsHTML.textContent = seconds;

        if (theCountDown < 0) {
            clearInterval(x);
            daysHTML.textContent = "00 ."
            hoursHTML.textContent = "00 ."
            minutesHTML.textContent = "00 ."
            secondsHTML.textContent = "00"
          }
    }

    /*___________________________*/
    /*___| FUNCTIONS CALLING |___*/

    interval = setInterval(countDown,1000)

/*===============================================================*/
/*==========| N O T H I N G  B E H I N D  T H I S |==============*/
/*===============================================================*/