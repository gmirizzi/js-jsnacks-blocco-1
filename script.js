//SNACK1
/* const num1 = parseInt(prompt('Inserisci il primo numero'));
const num2 = parseInt(prompt('Inserisci il secondo numero'));

if (isNaN(num1)||isNaN(num2)){
    alert('Devi inserire due numeri!')
} else if (num1==num2) {
    document.getElementById('risultato').innerHTML= 'I numeri sono uguali';
} else if (num1>num2) {
    document.getElementById('risultato').innerHTML= 'Il primo numero è maggiore';
} else {
    document.getElementById('risultato').innerHTML= 'Il secondo numero è maggiore';
} */

//SNACK2
/* const str1 = prompt('Inserisci la prima parola');
const str2 = prompt('Inserisci la seconda parola');

if (str2.length>str1.length) {
    document.getElementById('risultato').innerHTML= str2 + ' ' + str1;
} else {
    document.getElementById('risultato').innerHTML= str1 + ' ' + str2;
} 
*/

//SNACK3
/* let num1 = parseInt(prompt('Inserisci il primo numero'));
if (isNaN(num1)) {
    alert('Devi inserire un numero')
}
let num2 = parseInt(prompt('Inserisci il secondo numero'));
if (isNaN(num2)) {
    alert('Devi inserire un numero')
}
let num3 = parseInt(prompt('Inserisci il terzo numero'));
if (isNaN(num3)) {
    alert('Devi inserire un numero')
}
let num4 = parseInt(prompt('Inserisci il quarto numero'));
if (isNaN(num4)) {
    alert('Devi inserire un numero')
}
let num5 = parseInt(prompt('Inserisci il quinto numero'));
if (isNaN(num5)) {
    alert('Devi inserire un numero')
}
let num6 = parseInt(prompt('Inserisci il sesto numero'));
if (isNaN(num6)) {
    alert('Devi inserire un numero')
}
let num7 = parseInt(prompt('Inserisci il settimo numero'));
if (isNaN(num7)) {
    alert('Devi inserire un numero')
}
let num8 = parseInt(prompt('Inserisci il ottavo numero'));
if (isNaN(num8)) {
    alert('Devi inserire un numero')
}
let num9 = parseInt(prompt('Inserisci il nono numero'));
if (isNaN(num9)) {
    alert('Devi inserire un numero')
}
let num10 = parseInt(prompt('Inserisci l\'ultimo numero'));
if (isNaN(num10)) {
    alert('Devi inserire un numero')
}
const result = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10;
document.getElementById('risultato').innerHTML= result; 
*/

//SNACK4
/* const invitati = ['Aldo', 'Luigi', 'Giuseppe', 'Gabriel', 'Mauro', 'Chiara'];
const nome = prompt('Inserisci il tuo nome');
let check = false;

for (let index = 0; index < invitati.length; index++) {
    if (nome.toLowerCase()==invitati[index].toLowerCase()) {
        check = true;
    }    
}

if (check) {
    document.getElementById('risultato').innerHTML= 'Sei stato invitato';
    check = false;
} else {
    document.getElementById('risultato').innerHTML= 'Non sei stato invitato';
} 
*/

//SNACK5
/* const dispari = [];

for (let index = 1; index <= 6; index++) {
    const num = prompt('Inserisci un numero');
    if (num%2 != 0){
        dispari.push(num);
    }    
}

document.getElementById('risultato').innerHTML= dispari; 
*/

//SNACK6
/* 
const num = prompt('Inserisci un numero di quattro cifre');
let somma=0;
if (num.length!=4||isNaN(num)){
    alert('Devi inserire quattro cifre!')
} else {
    for (let index = 0; index < num.length; index++) {
        somma+=parseInt(num.charAt(index));    
    }
    document.getElementById('risultato').innerHTML= somma;
} 
*/