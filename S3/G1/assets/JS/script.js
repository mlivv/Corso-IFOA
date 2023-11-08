// metodo splice

const mioArray = ['Anna', 'Mario', 'Gianluca', 'Francesco', 'Sara'];
console.log(mioArray);

mioArray.splice(2); // il metodo splice MODIFICA l'array iniziale, che resta modificato per tutto lo script, non solo dopo splice
// tra parentesi: il primo numero e' DOVE INIZIO, il secondo e' la QUANTITA'
// dopo il secondo parametro si mette quello che si vuole aggiungere, nella posizione indicata nel primo parametro

console.log(mioArray);

// ----------------------

// Selezione elementi da checkbox

let html = document.getElementById('HTML');
let css = document.getElementById('CSS');
let js = document.getElementById('JS');

let scelti = [html, css, js];
let corsi = [];

function invia() {
    let corsi = [];
    document.getElementById('scelti').innerHTML = '';
    scelti.forEach((el) => {
        if (el.checked) {
            corsi.push(el.value);
        }
    });
    document.getElementById('scelti').innerHTML = `Corsi scelti: ${corsi}`;
}

