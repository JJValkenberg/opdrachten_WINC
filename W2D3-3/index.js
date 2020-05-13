/*VRAAG A
Schrijf een JavaScript functie om het woord "cool" aan een array met strings toe te voegen. 
Gebruik de .push method.
*/

const addTheWordCool = (array) => {
    array.push("cool"); // door .push method wordt de string "cool" toegvoegd aan de parameter (array) en returned om het daadwerkelijk toe te voegen
    return array;

}
//test data
console.log("Added cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: Wanneer gelogd de string "cool" is toegevoegd aan de array.



/* VRAAG B
Schrijf een JavaScript functie die het aantal elementen in een array retourneert.
*/
const amountOfElementsInArray = (array) => {
    return array.length;
}
//test data
console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen']));

//console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen'])); // 3

/*VRAAG C
Schrijf een JavaScript functie om het éérste element uit een array te retourneren. 
PS: Bij welk cijfer begint een array ook alweer met tellen? = (begint bij [0])
*/
const selectBelgiumFromBenelux = (array) => {
    return array.find(first => first = [0]);
}

//test data
console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));
// resultaat: "Belgie"

/*VRAAG D
Schrijf een JavaScript functie om het laatste element uit een array te retourneren.
*/

const lastElementInArray = (array) => {
    return array[array.length - 1];
}

//test data
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));
// resultaat: "Schildpad"


/*VRAAG E
Schrijf een JavaScript functie om het eerste element uit een array te halen en het restant te retourneren .
Gebruik .slice én de alternatieve optie .splice. Wat is het verschil tussen deze functies? Hint: mutability.
SLICE METHOD RETURNED EEN COPY VAN DE GROOTTE VAN DE AANGEGEVEN INDEX NUMMER!
SPLICE METHOD RETURNED EEN GEWIJZIGDE ARRAY EN GEEN KOPIE!
*/



//test data 
const presidents = ["Trump", "Obama", "Bush", "Clinton"]

const impeachTrumpSlice = (array) => {
    return array.slice(1, 4); //hier wordt element 1 - 4 (trump = 0) 'gesliced' uit het geheel.
}

const impeachTrumpSplice = (array) => {
    return array.splice(1, 3); // hier wordt vanaf element 1 (start) (1) gespliced en dan 3 index nummer verder (incl. start index (1))
}

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]


/* OPDRACHT F
Write a simple JavaScript program to join all elements of the following array into a string (with spaces).
ps: deze opdracht hebben we in het Engels gelaten omdat er een dikke tip in zit over welke array method je gaat gebruiken.
*/

const stringsTogether = (array) => {
    return array.join(" ");
}
//test data
console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']))
//resultaat: "Winc Academy is leuk ;-}"


/*OPDRACHT G
Schrijf een functie die 2 arrays ['array 1'] ['array2'] combineert tot 1 array ['array1', 
*/

const combineArrays = (array1, array2) => {  //array1 heeft als argument [1, 2, 3] , array2 heeft als argument [4, 5, 6]
    return array1.concat(array2);  // hier worden de 2 argumten/ arrays concatenated tot 1
};

console.log(combineArrays([1, 2, 3], [4, 5, 6]));

/*
//test data
combineArrays([1, 2, 3], [4, 5, 6])
// resultaat: [1,2,3,4,5,6] */