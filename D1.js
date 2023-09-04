/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// I principali datatype di Js sono 5:
// 1) STRING: è quel valore contornato da virgolette singole o doppio e possiamo scrivere sia parole che numeri, ma verrà letto dal browser come se fosse un testo.
// 2) NUMBER: è un valore numerico che assegniamo al nostro contenitore.
// 3) BOOLEAN: è quel valore che definisce che il contenuto della nostra scatola sia vero o falso.
// 4) UNDEFINED: è un valore che ci fa capire che la nostra scatola non ha un valore definito.
// 5) NULL: lo ritroviamo quando la nostra scatola non contiene nulla, è vuota.

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let firstName = "Cristina"
console.log(firstName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n1 = 12
let n2 = 20
console.log(n1 + n2)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12
console.log(x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// In questo caso ho modificato il valore della string variable
firstName = "Palmisani"
console.log(firstName)

const lastName = "Palmisani"
console.log(lastName)
// In questo caso mi dà errore
// lastName = "Cristina"

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let y = 4
console.log(x - y)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john"
let name2 = "John"

console.log(name1 === name2)

console.log(name2 !== name1)

console.log(name1.toLowerCase() === name2.toLowerCase())
console.log(name2)
