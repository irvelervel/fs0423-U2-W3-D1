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
