let numero1;
let numero2;
let nomeOperazione;
let risultato;

function eventHandler() {
    numero1 = document.getElementById('numero1').value;
    numero1 = document.getElementById('numero2').value;
    operazione = document.getElementById('nomeOperazione').value;

    if (controlla()) {
        calcola();
        cancellaForm();
    } else {
        return;
    }
}

function controlla() {
    if (numero1 === '' || numero2 === '' || nomeOperazione === '') {
        alert('inserire i due numero e scegliere un\'operazione');
        return false
    } else {
        return true;
    }
}

function calcola() {
    let nomeOperazione;
    let risultato;
    switch (nomeOperazione) {
        case '1':
            nomeOperazione = 'addizione';
            risultato = Number (numero1) + Number (numero2);
            break;
        case '2':
            nomeOperazione = 'sottrazione';
            risultato = Number (numero1) - Number (numero2);
            break;
        case '3':
            nomeOperazione = 'moltiplicazione';
            risultato = Number (numero1) * Number (numero2);
            break;
        case '4':
            nomeOperazione = 'divisione';
            risultato = Number (numero1) / Number (numero2);
            break;
    }
}

function scrivi() {
    document.getElementById('risultato').innerHTML = 'Il risultato della ' + nomeOperazione + ' tra ' + numero1 + ' e ' + numero2 + ' è ' + risultato;
}

function cancellaForm() {
    document.getElementById('numero1').innerHTML = '';
    document.getElementById('numero2').innerHTML = '';
    document.getElementById('nomeOperazione').value = '';
}