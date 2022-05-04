
let hints = [
    document.getElementById('hint-1'),
    document.getElementById('hint-2'),
    document.getElementById('hint-3'),
    document.getElementById('hint-4'),
    document.getElementById('hint-5'),
];

let count=0;

let interval;

function startInt(){
    interval = setInterval(disappear,1000);
}

function disappear(){
    if(count > 4){
           stopInt();
           setTimeout(xFunction,2000);
    } else {
        console.log('disparation ' + count);
        hints[count].className = "disappear";
        count++;
    }
}

function xFunction(){
    
    for(i = 0; i < 5; i++){
        hints[i].textContent = ' X '
    }
}

function stopInt(){
    clearInterval(interval); 
}

setTimeout(startInt,3000);



/* function test (){
let interval = setInterval(disappear,2000);

 for (let i=1; i <= 5; i ++) {
    disappear(i);
    console.log('numeros :' + i)
}

}

function disappear (param){
    let hint = document.querySelector('#hint-' + param);
    hint.className = 'disappear';
}

test(); */