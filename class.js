// le classi in JS non sono niente di nuovo o stravolgente, ma semplicemente un metodo ALTERNATIVO
// per la creazione di funzioni costruttore
// lo scopo è sempre lo stesso: automatizzare in modo furbo e robusto la creazione di oggetti in serie
// -> è semplicemente un modo diverso di scrivere una funzione costruttore, e ad oggi il più utilizzato

class NamedPerson {
  constructor(_firstName, _lastName, _address, _email = 'noemail@gmail.com') {
    this.firstName = _firstName
    this.lastName = _lastName
    this.address = _address
    this.email = _email
    // ho anche specificato nei parametri un'email di default nel caso NamedPerson venga invocato con solamente 3 argomenti
  }

  // poiché showCompleteName NON utilizza direttamente i parametri, per convenzione NON andrebbe inserita nel constructor
  // la mettiamo fuori, ma sempre nella classe

  // poiché siamo fuori dal constructor, le proprietà e i metodi vanno scritti SENZA il this.
  showCompleteName() {
    // nelle classi e nelle funzioni costruttore le funzioni freccia ricevono un binding automatico all'oggetto
    // generato dalla classe e quindi non allo scope esterno
    return `Mi chiamo ${this.firstName} ${this.lastName}!`
  }

  numberOfLegs = 2
}

const stefano = new NamedPerson(
  'Stefano',
  'Casasola',
  'Mushroom rd n.1',
  'stefano.casasola@gmail.com'
)

const orlandoBloom = new NamedPerson(
  'Orlando',
  'Bloom',
  'Hollywood rd. 1'
  // 'orlando.bloom@gmail.com' // <-- gli verrà assegnata noemail@gmail.com
)

console.log(stefano)
console.log(orlandoBloom.showCompleteName())
