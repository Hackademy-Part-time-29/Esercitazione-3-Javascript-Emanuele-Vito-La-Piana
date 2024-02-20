//traccia tre

//let num1 = prompt("Inserisci il primo numero");
//let num2 = prompt("Inserisci il secondo numero");


//console.log(typeof num1); //cosi' avremo stringa
//console.log("ciao" + " a tutti"); // concatenazione tra stringhe
//ma se...
//console.log("10" - "15"); //fa sottrazione e ti da numero, mentre se avessi messo + è concatenazione tra stringhe e non addizione
// esempio se avessi scritto
//let num1 = parseInt(prompt("Inserisci il primo numero")); //parseInt serve a convertirlo in un numero, lo fa diventare intero
//let num2 = parseInt(prompt("Inserisci il secondo numero"));
//console.log(num1 + num2);

//math
//let a = 6;
//let b = 90000000;
//let massimo = Math.max(a, b, 1000, 600);
//console.log(massimo); //verra visto b in quanto 90000000

//let minimo = Math.min(a, b, 1000, 600);
//console.log(minimo);

//let number = Math.round( 9.5 );  //se il primo numero dopo il punto è >= 5 arrotonda per eccesso.in questo caso 10
//console.log(number);

//let num1 = 6.8;
//console.log(Math.floor(num1)); //arrotonda per difetto, pavimento
//console.log(Math.ceil(num1)); //arrotonda per eccesso, soffitto


//let numeroAcaso = Math.random(); //genera un numero a caso da 0 a 1, escluso l'uno.
//console.log(numeroAcaso);

//let lancioDado = Math.floor(Math.random()*(max - min + 1 )+ min); //formula che va a generare ad esempio con il dado
//let lancioDado = Math.floor(Math.random()*(6 - 1 + 1 )+ 1);
//console.log(lancioDado);







//operatori
//operatori unari        typeof x          x++       x--
//operatori binari    (operatori matematici, operatori di confronto, operatori logici)      x + y           x/y       
//operatore terniario     




//operatori di confronto

//uguaglianza
console.log(5 == 5);  //true
console.log(5 == "5"); //sempre true anche se 5 è stringa ma non tiene conto del tipo di dato
//uguaglianza stretta 
console.log(5 === "5") //false perche' con tre uguali tiene conto del tipo di dato


//maggiore
console.log( 7 > 5 ); //true

//minore
console.log(3 < 5);

//maggiore uguale
console.log(7 >= 5);

//minore uguale
console.log(3 <= 5);

//disuguaglianza
console.log(5 != "5"); //true

//disuguaglianza stretta
console.log( 5 !== "5"); //perche' è diverso da 5 quindi true

//operatori logici

// AND &&
// restituisce il primo valore falsy che trova se non ne trova restituisce l'ultimo truthy
//esempio console.log (5 > 0 && 5 < 18); -> console.log (true && true); -> come se per aprire il cancello bisogna tirare tutte le leve simultaneamente
// OR ||
// restituisce il primo valore truthy che trova se non ne trova restituisce l'ultimo falsy
//basta che solo una dei confronti sia verificata per darti true
//esempio console.log(7 > 18 || 7 < 16);  -> console.log(false || true); true


//gli operatori logici sono operatori binari che ci permettono di concatenare piu' confronti
//questi operatori ci fanno entrare nel contesto booleano, dove tutti i valori assumono il valore di truthy e falsy
//truthy tutti numeri maggiori di zero, stringhe non vuote, oggetti e true
//falsy numeri minori o uguali a zero, stringhe vuote, false, null e NaN, undefined


//If/else
//if/ else if/ else
//switch
//let age = 16;
//if(age >= 18 && age < 90) {
    //blocco di istruzioni
//    console.log("puoi prendere la patente");
//}else {
    //blocco di istruzioni
//    console.log("non puoi prendere la patente");
//}

// operatore ternario
//let age = 16;
//() ? : ; 
//(age >= 18)? console.log("puoi prendere la patente"): console.log("non prendere la patente"); 

//switch si usa solo in casi selettivi, esempio
//let color = "orange";
//switch (color) {
    //case color = "red"
    //console.log("sono rosso");
    //break;
     //case color = "green"
    //console.log("sono verde");
    //break; 
     //case color = "blu"
    //console.log("sono blu");
    //break;
    //default:
    //    console.log("colore non disponibile");
//}

