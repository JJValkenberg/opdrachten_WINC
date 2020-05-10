// while loop // i=o (index number) -> small then 4 because need to print every part of the array
let colors = ['yellow', 'blue', 'red', 'orange'];
/*
let i = 0;
// while loop to print out every color in the array. Array length=4
while (i < 4) {
    console.log(colors[i]);
    i++;
}
*/

// for loop - for (i = 0; i < colors.length; i++)  -> i= index number, condition= i < colors.length -> i++ =the incrementer
for (i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

//For each -> log iedere element van mijn array
//colors.forEach(element => console.log(element));


/*
VRAGEN
1. Hoeveel regels neemt mijn for loop in beslag?
antwoord: for loop -> 3 regels code. Aantal regels log -> 4 regels

2. Hoeveel regels neemt mijn `forEach` method in beslag?
antwoord: 'forEach' -> 1 regel code. Aantal regels log -> 4 regels

3. Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop?
antwoord: Je hebt geem kans op een 'infinity loop' 

Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
antwoord: 'forEach' is voor mij logischer. Minder andere variablen

4. Stel je hebt een `object` met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je die
45 properties kunt `console.log`-en zonder elke property handmatig te `console.log` en. Probeer dit nu eens
in een stukje code (en gebruik hier een object met 5 properties voor). Ben je nu aan het *itereren*?
antwoord: console.log(person) -> alle properties zullen worden gelogged. Je bent NIET aan het 'itereren'!
*/

let person = {
    name: 'Jonathan',
    lastName: 'Valkenberg',
    age: 36,
    location: 'Amsterdam',
    status: 'Married'
}

console.log(person);
