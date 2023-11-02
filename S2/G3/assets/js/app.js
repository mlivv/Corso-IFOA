// Ricevere attraverso un form il nome e l'anno di nascita, calcolare l'età, verificare se la persona è maggiorenne o minorenne, salutarla indicando la maggiore o minore età

/*
1. Leggere il campo nome e memorizzarlo
2. Leggere il campo anno e memorizzarlo
3. Calcolare l'età
4. Verificare la maggiore o minore età
5. Scrivere nell'HTML
6. Cancellare il form

EVENTO SCATENANTE
click

VARIABILI GLOBALI
nome
anno
stato
*/

let nome; // globale in quanto utilizzata per leggere il campo di input e per stampare a video
let anno; // globale in quanto utilizzato per leggere il campo di input, calcolare l'età, verificare l'età, stampare a video
let eta;
let stato; // globale in quanto utilizzata per verificare l'età e stampare a video
let errore = document.getElementById('errore');

function eventHandler() {
    leggiForm();
    if (anno >= 1900 && anno <= 2023) {
        errore.innerHTML = '';
        calcolaEta();
        verifica();
        scrivi();
        cancellaForm();
    } else {
        errore.innerHTML= 'Attenzione! Inserire un numero tra 1900 e 2023';
        return;
    }   
}
function leggiForm() {
    nome = document.getElementById('nome').value;
    anno = document.getElementById('anno').value;
}

function calcolaEta(){
    eta = 2023 - Number(anno);
    console.log(eta);
}

function verifica() {
    stato = (eta >= 18) ? 'maggiorenne' : 'minorenne';
    console.log(stato);
}

