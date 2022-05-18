/*==========================================================================================
============================================================================================
============================================================================================

     _______.___________.  ______   .______       __   __  
    /       |           | /  __  \  |   _  \     |  | |  | 
   |   (----`---|  |----`|  |  |  | |  |_)  |    |  | |  | 
    \   \       |  |     |  |  |  | |   ___/     |  | |  | 
.----)   |      |  |     |  `--'  | |  |         |__| |__| 
|_______/       |__|      \______/  | _|         (__) (__) 


Si vous vous retrouvez ici c'est que vous vous appretez a commetre un acte moralement
discutable. Nous n'allons pas vous mentir, oui, la reponse a l'enigme se trouve bien ici.
A la ligne 180. Maintenant a vous de voir :
    - Soit vous fermer cette page avec honneur et tenter par vous même de resoudre cet enigme
    - Soit vous rester couar et aller chercher la reponse. 
Dans ce dernier cas, sachez tout de même que vous n'accederez ainsi qu'au deuxieme niveau,
il vous en restera encore deux a resoudre avant d'arriver a l'indice finale...


     ___         ____    ____  ______    __    __       _______.      
    /   \        \   \  /   / /  __  \  |  |  |  |     /       |       
   /  ^  \        \   \/   / |  |  |  | |  |  |  |    |   (----`      
  /  /_\  \        \      /  |  |  |  | |  |  |  |     \   \       
 /  _____  \        \    /   |  `--'  | |  `--'  | .----)   |      
/__/     \__\        \__/     \______/   \______/  |_______/   

 _______   _______    ____    ____  ______    __  .______      
|       \ |   ____|   \   \  /   / /  __  \  |  | |   _  \     
|  .--.  ||  |__       \   \/   / |  |  |  | |  | |  |_)  |    
|  |  |  ||   __|       \      /  |  |  |  | |  | |      /     
|  '--'  ||  |____       \    /   |  `--'  | |  | |  |\  \----.
|_______/ |_______|       \__/     \______/  |__| | _| `._____|
                                                                                                                                  
                                                           
                                        
===========================================================================================
===========================================================================================
==========================================================================================*/













































































































/*===============================================================*/
/*======================| L V L  0 1 |===========================*/
/*===============================================================*/

    /*___________________*/
    /*___| VARIABLES |___*/

let input = document.querySelector('#answer-input');
let form = document.querySelector('#form-lvl-01');

let answer;

    /*___________________*/
    /*___| FUNCTIONS |___*/

    function redirectToNope(){
        window.location.href = "/hint/nope";
    }

    function redirectToLvl02(){
        window.location.href = "/hint/lvl-02";
    }

    /*___________________*/
    /*____| EVENTS |_____*/

form.addEventListener('submit', (e) => {
    e.preventDefault();
    answer = input.value.toUpperCase();
    
    if(answer != 'JONATHAN'){
        redirectToNope()
    } else {
        redirectToLvl02()
    }
})

/*===============================================================*/
/*==========| N O T H I N G  B E H I N D  T H I S |==============*/
/*===============================================================*/