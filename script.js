//SNACK1
/* const num1 = parseInt(prompt('Inserisci il primo numero'));
const num2 = parseInt(prompt('Inserisci il secondo numero'));

if (isNaN(num1)||isNaN(num2)){
    alert('Devi inserire due numeri!')
} else if (num1==num2) {
    document.getElementById('risultato').innerHTML= 'I numeri sono uguali';
} else if (num1>num2) {
    document.getElementById('risultato').innerHTML= num1;
} else {
    document.getElementById('risultato').innerHTML= num2;
} */

//SNACK2
/* const str1 = prompt('Inserisci la prima parola');
const str2 = prompt('Inserisci la seconda parola');

if (str2.length<str1.length) {
    document.getElementById('risultato').innerHTML= str2 + ' ' + str1;
} else {
    document.getElementById('risultato').innerHTML= str1 + ' ' + str2;
}  */

//SNACK3
/* let somma=0;
for (let index = 1; index <= 10; index++) {
    const num = parseInt(prompt('Inserisci un numero'));
    if (isNaN(num)){
        alert('Non è un numero!');
        continue;
    } else {
        somma+=num;
    }
}

document.getElementById('risultato').innerHTML=somma; */

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
    if(isNaN(num)){
        alert('Non è un numero!');
        continue;
    }else if (parseInt(num)%2==1){
        dispari.push(num);
    }    
}

document.getElementById('risultato').innerHTML= dispari;  */


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