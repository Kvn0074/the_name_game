/*===============================================================*/
/*======================| D I S A P P E A R |====================*/
/*===============================================================*/

    /*___________________*/
    /*___| VARIABLES |___*/

    let hints = [
        document.getElementById('hint-1'),
        document.getElementById('hint-2'),
        document.getElementById('hint-3'),
        document.getElementById('hint-4'),
        document.getElementById('hint-5'),
    ];

    let count=0;
    let interval;

    /*___________________*/
    /*___| FUNCTIONS |___*/

        /*________Timer Launcher */

    function startInt(){
        interval = setInterval(disappear,1000);
    }

        /*________Disappear Function */

    function disappear(){
        if(count > 4){
            stopInt();
            setTimeout(xFunction,1500);
            setTimeout(redirectTo,1800);
        } else {
            console.log('disparation ' + count);
            hints[count].className = "disappear";
            count++;
        }
    }

        /*________Hasher Function */

    function xFunction(){
        
        for(i = 0; i < 5; i++){
            hints[i].textContent = ' X '
        }
    }

        /*________Timer Stopper */

    function stopInt(){
        clearInterval(interval); 
    }

        /*________Redirection function */

    function redirectTo(){
        window.location.href = "/form/";
    }

    /*___________________________*/
    /*___| FUNCTIONS CALLING |___*/

    setTimeout(startInt,2500);

/*===============================================================*/
/*==========| N O T H I N G  B E H I N D  T H I S |==============*/
/*===============================================================*/