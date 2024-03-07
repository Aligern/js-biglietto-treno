/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). */


// chiediamo quanti Km vuole percorrere l'utente
// utilizziamo parseInt per effettuare un controllo sulle informazioni inserite dall'utente
let meters = parseInt(prompt ('Inserisci Kilometraggio'));
console.log(meters);
// chiediamo l'eta all'utente
let age = parseInt(prompt ('Inserisci età'));
console.log(age);
//prezzo del biglietto per km
let price = meters * 0.21;
//sconto minorenni
let under18 = 20 / 100;
//sconto anziani
let over65 = 40 / 100;



if (isNaN(age) || isNaN(meters)) {
   document.getElementById('display').innerHTML = 'Inserisci dei numeri';
   console.log(age)
   console.log(meters)
} else {
   if (age < 18) {
      // abbreviamo l'operazione utilizzando * -= * per evitare di scrivere nuovamente * price - *
      price -= (price * under18);
      console.log(price);
   } else if (age >= 65) { 
      price -= (price * over65);
      console.log(price);
   } 
   document.getElementById('display').innerHTML =` il prezzo è: ${price.toFixed(2)} `;
   // utilizziamo toFixed per effettuare una formattazione e convertire un numero in una stringa ( questo preclude l'utilizzo del numero per usi futuri )
}