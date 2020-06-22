const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
    { name: "A. Curry", profession: "kikvorsman", age: 32 },
    { name: "F. Vonk", profession: "slangenmelker", age: 36 },
    { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
];

/*VRAAG 1
Hoe ziet elk object eruit? Log all objecten in de loop. 
Voorzie je console.log van een begeleidende tekst, zodat je weet wat je gaat loggen (good practice):
*/

//for (let person of array) {
//    console.log('"Dit is de gehele persoon:', [person]) 
//}      // alle objecten van de array worden gelogd -> person 


/*VRAAG 2
Log enkel alle namen met daarvoor een introductie ⇒  log bijv. (dit is naam)
*/

for (let person of array) {
    console.log('Dit is alleen de naam van de persoon:', [person.name]); // Hier wordt alleen de naam (.name) van ieder object (person) gelogd
}


/* VRAAG 3
Log het geboortejaar (dus **niet** de leeftijd) voor ieder persoon
*/


for (let person of array) {
    console.log('Dit is het geboortejaar van de persoon:', 2020 - person.age); //
}


/*VRAAG 4
Log alle namen + beroep ⇒ zodat je bijvoorbeeld logt "N. Armstrong is een spacecowboy"
*/

for (let person of array) {
    console.log(person.name, 'is een', person.profession); // Hier wordt eerst de naam (person.name) gelogd - 'is een' en dan het beroep (person.profession)
}

/*VRAAG 5
5. Plaats een if statement in de loop die checkt of een persoon ouder is dan 50 jaar. 
Zet vervolgens weer een `console.log` in deze if-statement. Werkt je if statement? */

for (let person of array) {
    if (person.age > 50)
        console.log('Deze persoon is ouder dan 50:', person.name);   // Nu worden alleen de objects gelogd die een leeftijd hebben hoger dan 50

}