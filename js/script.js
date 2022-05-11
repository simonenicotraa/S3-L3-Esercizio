function registrati(){ //legge tutti i dati dell'imput
let nome= document.getElementById('inser_nome').value //con value leggo solo il contenuto del tag html. senza avrò tutto il tag html
let cognome= document.getElementById('inser_cognome').value
let eta= +document.getElementById('inser_eta').value
let email= document.getElementById('inser_email').value
/* console.log(nome, cognome, eta, email) */
stampaUtente(nome, cognome, eta, email) //richiama stampa utente e gli passa tutti i dati
}

function stampaUtente(nome, cognome, eta, email) {
    /* console.log(nome, cognome, eta, email) */
    document.getElementById('nomeUt').innerHTML= nome;
    document.getElementById('cognomeUT').innerHTML= cognome;
    document.getElementById('etaUt').innerHTML= eta;
    document.getElementById('email').innerHTML=email;
    let eta_pensione = calcolapensione(eta);
    document.getElementById('pensione').innerHTML=eta_pensione
}

function calcolapensione(eta) { //età la passo anche a questa funzione 
   let pensione= 70 - eta;
   return pensione;
}


//addizione
function addizione (){
let val1 = +document.getElementById('valore1').value;
let val2 = +document.getElementById('valore2').value;
const resultsomma= val1+val2;
console.log(resultsomma);

document.getElementById('Risultato').innerHTML= 'il risultato è ' + resultsomma;
}




//sottrazione
function sottrazione(){
    let val1 = +document.getElementById('valore1').value;
    let val2 = +document.getElementById('valore2').value;
    const resultsottr= val1-val2;
    console.log(resultsottr);
    document.getElementById('Risultato').innerHTML= 'il risultato è ' + resultsottr;
}


//moltiplicazione
function moltiplicazione(){
    let val1 = +document.getElementById('valore1').value;
    let val2 = +document.getElementById('valore2').value;
    const resultmolt= val1*val2;
    console.log(resultmolt);
    document.getElementById('Risultato').innerHTML= 'il risultato è ' + resultmolt;
}

//divisione
function divisione(){
    let val1 = +document.getElementById('valore1').value;
    let val2 = +document.getElementById('valore2').value;
    const resultdiv= val1/val2;
    console.log(resultdiv);
    document.getElementById('Risultato').innerHTML='il risultato è ' + resultdiv;
}