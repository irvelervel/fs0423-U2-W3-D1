console.log('la funzione constructor')

// la funzione costruttore permette la facile riproduzione "in serie" di oggetti dotati
// tutti delle stesse caratteristiche (con le stesse proprietà e metodi)

const person1 = {
  firstName: 'Valentino',
  lastName: 'Rossi',
  address: 'Via Bologna 1, Tavullia',
  email: 'valentino.rossi@gmail.com',
  showCompleteName: function () {
    return `My name is ${this.firstName} ${this.lastName}, I drive motorcycles!`
  },
}

// cerchiamo ora di riutilizzare questa struttura in modo da poter definire altri esseri umani,
// tutti dotati delle stesse caratteristiche, evitando di copiare e incollare (seguendo la filosofia D R Y)

// le funzioni costruttore seguono la nomenclatura PascalCase
const Person = function () {
  // questa è una funzione COSTRUTTORE!
  // andiamo a descrivere le proprietà degli oggetti che creeremo a partire da questa funzione
  this.firstName = ''
  this.lastName = ''
  this.address = ''
  this.email = ''
  this.showCompleteName = function () {
    return `Mi chiamo ${this.firstName} ${this.lastName}!`
  }
}

// ho creato uno "stampino", con tutte le proprietà che mi interessano ma senza valori al momento...
// dovrò attribuire i valori quando andrò a creare gli oggetti invocando questa funzione costruttore

const marioBros = new Person()
console.log('MARIOBROS', marioBros)
// abbiamo creato un "guscio vuoto", un Person dotato di firstName, lastName, email, address e del metodo showCompleteName
// però è tutto vuoto :(
marioBros.firstName = 'Mario'
marioBros.lastName = 'Bros'
marioBros.address = 'Mushroom Road 1'
marioBros.email = 'mario.bros@gmail.com'

console.log(marioBros.showCompleteName())

const luigiBros = new Person()

luigiBros.firstName = 'Luigi'
luigiBros.lastName = 'Bros'
luigiBros.address = 'Mushroom Road 1'
luigiBros.email = 'luigi.bros@gmail.com'

console.log(luigiBros.showCompleteName())

// già meglio, l'editor ci suggerisce le proprietà e i metodi e almeno non li inventiamo da capo per ogni oggetto...
// però sarebbe bello SALTARE questo passaggio, questa assegnazione a mano delle proprietà... magari creando
// l'oggetto direttamente con le proprietà in un solo passaggio!
