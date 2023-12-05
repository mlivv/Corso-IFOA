//es 1
// crea una classe User per la creazione di oggetti di tipo "utente". Il suo costruttore dovra' inizializzare ogni oggetto utente con i seguenti attributi:
// -firstName
// -lastName
// -age
// -location
//Aggiungi alla classe User anche un metodo che restituisca il confronto con l'eta' di un'altra persona.
//Ad esempio, date due istanze della classe utente "x" e "y" inizializzate con le proprieta'sopra descritte, il metodo dovra' restituire una frase simile a "x e' piu vecchio di y" a seconda del risultato del confronto.

//Crea degli oggetti a partire dalla classe User e verifica che la comparazione tra le eta' funzioni correttamente.

class User {
    constructor(firstName, lastName, age, location){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }
    confrontoAge (eta2){
        if(this.age > eta2){
            return 'utente1 is older than utente2';
        } else if(this.age < eta2){
            return 'utente1 is younger than utente2';
        } else{
            return 'utente1 and utente2 have the same age';
        }
    }
}

let user1 = new User('Martina', 'Rossi', 18, 'Italy');
let user2 = new User('Sara', 'Verdi', 20, 'Italy');

console.log(user1.confrontoAge(user2.age));

//es 2
//Crea un form per la creazione di oggetto "Pet" (animali domestici).
//La classe Pet dovra' essere dotata delle seguenti proprieta':
// -petName
// -ownerName
// -species // (labrador, soriano, nano etc.)
//Nella classe che utilizzerai per creare questi oggetti aggiungi anche un metodo che restituisca true se due animali condividono lo stesso padrone.

//Crea, raccogliendo i dati dal form, diverse istanze della classe Pet e mostrane i dati in una lista sottostante.

class Pet {
    constructor(petName, ownerName, species) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
    } 
    sameOwner (secondoPadrone) {
        if(this.ownerName === secondoPadrone){
            return true;
        } else {
            return false;
        }
    }
}

let form = document.getElementById('form');
let nomePet = document.getElementById('nomePet');
let nomeOwner = document.getElementById('nomeOwner');
