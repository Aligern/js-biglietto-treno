/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). */


// chiediamo quanti Km vuole percorrere l'utente
let meters = (prompt ('Inserisci Kilometraggio'));
console.log(meters);

// chiediamo l'eta all'utente
let age = (prompt ('Inserisci età'));
console.log(age);

//prezzo del biglietto per km
let price = 0.21 * meters;

//sconto minorenni
let under18 = 20 / 100;

//sconto anziani
let over65 = 40 / 100;

let priceunder18;

let priceover65;




if (age < 18) {
   priceunder18 = price * under18;
   console.log(price - priceunder18);
   document.getElementById('display').innerHTML=" Il prezzo è: "
} else if (age >= 65) { 
   priceover65 = price * over65;
   document.getElementById('display').innerHTML=" Il prezzo è: "
   console.log(price - priceover65);
} 
