// è possibile creare una classe a partire da un'altra classe, in modo da ereditarne le caratteristiche
// e di fatto avere un "punto di partenza" per una classe che non sia vuoto

// immaginiamo una classe che genera Computer

class Computer {
  constructor(_brand) {
    this.brand = _brand
    // ogni computer avrà un brand
  }

  showBrand() {
    return 'Ho un computer di marca ' + this.brand
  }
}

const macbook = new Computer('Apple')
console.log(macbook.brand) // 'Apple'
console.log(macbook.showBrand()) // 'Ho un computer di marca Apple'

// in JS le classi possono venire ESTESE
// si estende una classe al fine di ereditarne le caratteristiche e crearne una nuova

class ComputerWithModel extends Computer {
  // per merito dell'extends, ogni ComputerWithModel erediterà tutti i metodi e le proprietà
  // di Computer
  constructor(_brand, _model) {
    // riassegno _brand a this.brand? no, perchè lo fa già il constructor di Computer!
    // quello che dovrei fare con _brand è semplicemente RE-INVOCARE il costructor di Computer
    super(_brand) // super() è costruttore della classe della cui estendiamo, ovvero Computer
    // passiamo _brand al costruttore di Computer in modo da inizializzare correttamente la proprietà this.brand
    this.model = _model
  }

  showModel() {
    return super.showBrand() + ', il modello è ' + this.model
  }
}

const surfacePro = new ComputerWithModel('Microsoft', 'Surface Pro 8')

console.log(surfacePro)
console.log(surfacePro.showModel())
