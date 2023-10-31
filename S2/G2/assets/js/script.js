// Oggetto

const mioOggetto = {
    name: 'Milena',
    surname: 'Livian',
    eta: 21,
    studente: true,
};

document.getElementById('name').innerHTML = mioOggetto.name;
document.getElementById('surname').innerHTML = mioOggetto.surname;
document.getElementById('eta').innerHTML = mioOggetto.eta;
// Aggiunta proprietà
mioOggetto.email = 'milena.livian@gmail.com'

document.getElementById('email').innerHTML += mioOggetto.email;
// Eliminazione proprietà
delete mioOggetto.eta;

document.getElementById('eliminata').innerHTML += mioOggetto.eta;
// Creazione copia oggetto
const nuovoOggetto = mioOggetto;
nuovoOggetto.name = 'Pippo';
// Il valore della proprietà cambia in entrambi gli oggetto quando si usa l'operatore di assegnazione =
document.getElementById('primo').innerHTML += mioOggetto.name;
document.getElementById('secondo').innerHTML += nuovoOggetto.name;


const altroOggetto = Object.assign({}, mioOggetto);
// const altroOggetto = {...mioOggetto} // altra sintassi per creare una copia distinta dell'oggetto

altroOggetto.name = 'Paperino';
// Utilizzando lo spread operator (...) o Object.assing() si crea una copia dell'oggetto distinta dall'oggetto di partenza
document.getElementById('precedente').innerHTML += mioOggetto.name;
document.getElementById('nuovo').innerHTML += altroOggetto.name;

//Array
const mioArray = ['gatto', 'cane','coniglio'];

//Lettura intero array
document.getElementById('array').innerHTML = mioArray;

// Destrutturazione
document.getElementById('primaVoce').innerHTML = mioArray[0];
document.getElementById('secondaVoce').innerHTML = mioArray[1];
document.getElementById('terzaVoce').innerHTML = mioArray[2];

// Flussi condizionali
let peso = 15;

if (peso > 15) {
    document.getElementById('semplice').innerHTML = 'Il peso è superiore alla portata del pallet';
}

document.getElementById('successivo').innerHTML = 'Javascript va avanti';

// if + else

if (peso <= 15) {
    document.getElementById('ifElse').innerHTML = 'Il peso è adatto alla portata del pallet';
}
else{
    document.getElementById('ifElse').innerHTML = 'Troppo pesante per un pallet';
}

//if-else if-else
let nps = 45;

if (nps <= 35){
    document.getElementById('nps').innerHTML = 'NPS insufficiente';
} else if (nps <= 70) {
    document.getElementById('nps').innerHTML = 'NPS sufficiente';
} else {
    document.getElementById('nps').innerHTML = 'NPS ottimo';
}


// range di condizioni se i due requisiti devono essere validati entrambi
let voto = 8.5;
let presenze = 70;

if (voto >= 7.5 && presenze >= 70) {
    document.getElementById('range').innerHTML = 'Corso valido';
} else {
    document.getElementById('range').innerHTMl = 'Corso non valido';
}
