let day = 'monday';
let giorno;

/* 
if (day === 'monday'){
    giorno = 'lunedì';
} else if (day === 'tuesday'){
    giorno = 'martedì';
} else if (day === 'wednesday'){
    giorno = 'mercoledì';
} else if (day === 'thursday'){
    giorno = 'giovedì';
} else if (day === 'friday'){
    giorno = 'venerdì';
} else if (day === 'saturday'){
    giorno = 'sabato';
} else {
    giorno = 'domenica';
} 
*/

switch (day){
    case 'monday':
        giorno = 'lunedì' ;
        break;

        case 'tuesday':
        giorno = 'martedì' ;
        break;

        case 'wednesday':
        giorno = 'mercoledì' ;
        break;

        case 'thursday':
        giorno = 'giovedì' ;
        break;

        case 'friday':
        giorno = 'venerdì' ;
        break;

        case 'saturday':
        giorno = 'sabato' ;
        break;

        default:
            giorno = 'domenica';
}
document.getElementById('giorno').innerHTML += giorno;

//while/do while
let numero1 = 1;

while (numero1 < 11) {
    document.getElementById('listaWhile').innerHTML += '<li>' + numero1 + '</li>';
    numero1++;
}

let numero2 = 11;
do {
    document.getElementById('listaDoWhile').innerHTML += '<li>' + numero2 + '</li>';
    numero2++;
} while (numero2 < 11);

//for 
const numeri = [4, 9, 16, 25, 49];
let somma = 0;

for (let i = 0; i < numeri.length; i++) {
    somma += numeri[i];
}

document.getElementById('somma').innerHTML += somma;