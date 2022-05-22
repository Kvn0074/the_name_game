/*===============================================================*/
/*======================| L V L  0 2 |===========================*/
/*===============================================================*/

    /*___________________*/
    /*___| VARIABLES |___*/

    let container = document.querySelector('.lvl-02-contain');
    let counter = document.querySelector('#try-counter');
    let count = 4;
    counter.textContent = count;

    let input = document.querySelector('#answer-input');
    let form = document.querySelector('#form-lvl-02');

    let info = document.querySelector('#lvl-02-info');
    let instruction;
    let error = document.querySelector('#lvl-02-error');
    error.style.display = 'none';

    let chosenNumber;

    let secretNumber = Math.floor(Math.random() * 100);
   

    /*___________________*/
    /*___| FUNCTIONS |___*/

    function loseRound (){
        instruction = document.createElement('p');
        instruction.textContent = "un tour de perdu" 
        info.append(instruction);
    }

    function checkCount (counter, number){
        console.log("j'y passe");
        if (counter == 0 && number != secretNumber){
            instruction = document.createElement('p');
            instruction.textContent = "désolé, vous avez echoué" 
            info.append(instruction);
            input.disabled = true;
            setTimeout(backHome, 3000);
        }
    }

    function backHome (){
        window.location.href = "/";
    } 

    function goToLastLvl (){
        window.location.href = "/hint/lvl-03";
    }

    function checkNumber (nombre){
        instruction = document.createElement('p');
        
        if (nombre < secretNumber){
            instruction.textContent = "C'est plus";
        }

        else if (nombre > secretNumber) {
            instruction.textContent = "C'est moins";
        }

        else {
            instruction.textContent = "Félicitations, vous accedez au niveaux trois, restez concentré";
            input.disabled = true;
            setTimeout(goToLastLvl, 5000);
        }

        info.append(instruction);
    } 

    /*___________________*/
    /*____| EVENTS |_____*/


    input.addEventListener('keyup', () => {
        if (isNaN(input.value)){
            error.style.display = 'inline';
        } else {
            error.style.display = 'none';
        }
    })

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (isNaN(input.value) || input.value == ""){
            count --;
            counter.textContent = count; 
            input.value = "";
            loseRound();
        } else {
            count --;
            counter.textContent = count;
            chosenNumber = input.value;
            input.value = "";
            checkNumber(chosenNumber);
            checkCount(count, chosenNumber);
        }    
    })

/*===============================================================*/
/*==========| N O T H I N G  B E H I N D  T H I S |==============*/
/*===============================================================*/