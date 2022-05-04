/*===============================================================*/
/*======================| V A R I A B L E S |====================*/
/*===============================================================*/

let hints = [
    document.getElementById('hint-1'),
    document.getElementById('hint-2'),
    document.getElementById('hint-3'),
    document.getElementById('hint-4'),
    document.getElementById('hint-5'),
];

let count=0;
let interval;

/*===============================================================*/
/*======================| F U N C T I O N S |====================*/
/*===============================================================*/

    /*___| Timer Launcher |___*/

function startInt(){
    interval = setInterval(disappear,1000);
}

    /*___| Disappear Function |___*/

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

    /*___| Hasher Function |___*/

function xFunction(){
    
    for(i = 0; i < 5; i++){
        hints[i].textContent = ' X '
    }
}

    /*___| Timer Stopper |___*/

function stopInt(){
    clearInterval(interval); 
}

    /*___| Redirection function |___*/

function redirectTo(){
    window.location.href = "/form/";
}

/*===============================================================*/
/*======================| L A U N C H E R |======================*/
/*===============================================================*/

setTimeout(startInt,2500);

/*===============================================================*/
/*==========| N O T H I N G  B E H I N D  T H I S |==============*/
/*===============================================================*/









































































































    /*-- Deeper -*/




























































































































/*-- Deeper -*/









































/*__ Beware the bearers of FALSE gifts & their BROKEN PROMISES.Much PAIN but still time __*/






































































































/*___ Add To the name of the man by for the answer ___*/