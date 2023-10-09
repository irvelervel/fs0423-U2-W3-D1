// Perchè si dice che in JS TUTTO è un oggetto?
// Perchè tutte le stringhe, gli array, i numeri, gli oggetti stessi ereditano parte delle loro caratteristiche
// dai loro PROTOTIPI! I prototipi sono degli oggetti che "arricchiscono" tutti i tipi di dati in JS (anche quelli
// primitivi) con determinate caratteristiche...

const epicodeBatch = 'FS0423'
console.log(epicodeBatch.length) // non esiste su epicodeBatch! ma esiste sul suo prototipo String
console.log(epicodeBatch.toLocaleLowerCase()) // non esiste su epicodeBatch! ma esiste sul suo prototipo String

// come trovo il prototipo di un dato? attraverso una proprietà SEMPRE esistente chiamata .__proto__
console.log(epicodeBatch.__proto__) // l'oggetto String

// JS si comporta così: all'invocazione di un metodo o alla ricerca di una proprietà su un dato, qualora non venisse
// trovato, viene cercato sul prototipo del dato, fino a che non viene raggiunto il prototipo di Object che è null.
// Object è in cima alla catena prototipale, è l'unico oggetto che NON ha un prototipo (il suo .__proto__ è null).

//
// in altri linguaggi (Java, C#, etc.) è prima necessario costruire la CLASSE dell'oggetto, ovvero una specie di progetto,
// una "fabbrica" per creare questi oggetti; una volta creata la classe, è possibile utilizzarla per creare quante volte
// si vuole molti oggetti "in serie", dello stesso tipo... questi oggetti creati a partire dalla classe sono definiti
// "ISTANZE" della classe

// in JS invece è possibile creare un oggetto SENZA averne prima definito la struttura, come è necessario fare in molti
// altri linguaggi orientati agli oggetti. In JS è sufficiente aprire le parentesi graffe e cominciare "senza un piano"
// a definire da zero come l'oggetto sarà strutturato. In JS esiste la cosiddetta "notazione letterale" per gli oggetti:

const house = {
  wallsColor: 'lightpink',
  numberOfFloors: 2,
  families: ['Rossi', 'Bianchi'],
  explode: function () {
    console.log('BOOM!')
  },
}

console.log(house.numberOfFloors)
console.log(house.families[0])
house.explode()

console.log(house.__proto__) // Object

let person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  sayHello: function () {
    console.log('Ciao, io mi chiamo ' + this.firstName)
    // console.log(`Ciao, io mi chiamo ${this.firstName}`)
    // "this" è un oggetto che punta al contesto di esecuzione di sayHello
    // sayHello si trova nell'oggetto person: ecco che "this" punta all'oggetto person
  },
}
person.sayHello()

const anotherPerson = person
// // questa assegnazione NON crea una copia dell'oggetto! ma di fatto ci fornisce un altro accesso allo stesso oggetto in memoria...

person = null // elimino il riferimento all'oggetto chiamato "person"
anotherPerson.sayHello() // funziona se uso "this.firstName", ma NON se uso "person.firstName", perchè l'ho appena eliminato

//
// JS permette di creare oggetti "al volo", bello!
// ma come fare quando dobbiamo creare 50 case, e non vogliamo copincollare tutte le proprietà per creare nuovi oggetti
// tutti dotati delle stesse caratteristiche?
// ci viene in aiuto la funzione "costruttore"
