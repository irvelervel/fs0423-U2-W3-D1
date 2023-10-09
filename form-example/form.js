// prendiamo i riferimenti nel DOM a:
// campo nome
const firstnameInput = document.getElementById('firstname-field')
// campo cognome
const surnameInput = document.getElementById('surname-field')
// campo telefono
const phoneInput = document.getElementById('phone-field')

// creo la mia lista di contatti
const contacts = []

class Contact {
  constructor(_firstname, _surname, _phone) {
    this.firstname = _firstname
    this.surname = _surname
    this.phone = _phone
  }
}

// scriviamo qui renderList()
const renderList = function () {
  // prima di tutto prendo un riferimento alla lista <ul>
  const contactsList = document.querySelector('ul')
  // per sicurezza, la svuoto prima di riempirla
  contactsList.innerHTML = ''
  // ora, per ogni contatto, creo un <li> e lo appendo alla <ul>
  contacts.forEach((contact) => {
    // cosa faccio per ogni contatto?
    // 1) creo un <li> vuoto
    const newLi = document.createElement('li')
    // 2) riempio <li> con i dati
    newLi.innerText = `${contact.firstname} ${contact.surname} - ${contact.phone}`
    // 3) appendo <li> alla <ul>
    contactsList.appendChild(newLi)
  })
}

const formReference = document.querySelector('form')
formReference.addEventListener('submit', function (e) {
  e.preventDefault() // blocco il comportamento di default del form
  // creo un oggetto di tipo Contact con i valori recuperati dal form
  const newContact = new Contact(
    firstnameInput.value,
    surnameInput.value,
    phoneInput.value
  )

  console.log('CONTATTO CREATO', newContact)
  // pusho il contatto dentro la lista contatti
  contacts.push(newContact)
  // svuoto i campi del form
  firstnameInput.value = ''
  surnameInput.value = ''
  phoneInput.value = ''

  // renderizzo nuovamente la <ul> in modo da rispecchiare il contenuto dell'array "contacts"
  renderList()
})
