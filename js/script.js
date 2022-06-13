// Dichiarazione e assegnazione variabili
const username= prompt('Inserisci nome');
const usersurname=prompt('Inserisci cognome');
const usercolor=prompt('Inserisci il tuo colore preferito');
const userpassword= username + usersurname + usercolor +'22';

// Associazione variabili a id html
document.getElementById('user-name').innerHTML= username;
document.getElementById('user-surname').innerHTML= usersurname;
document.getElementById('user-color').innerHTML= usercolor;
document.getElementById('user-password').innerHTML= userpassword;