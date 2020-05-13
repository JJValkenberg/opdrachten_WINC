//DEEL A

/* Opdracht: Bouw deze functie om tot een arrow function
const ikRockArrowFunctions = function () {
  console.log("Joe, ik rock de arrow functions!");
};

ikRockArrowFunctions();

*/
const ikRockArrowFunctions = () => {
    console.log("Joe, ik rock de arrow functions!");
};

ikRockArrowFunctions();

//DEEL B

/* Opdracht: schrijf de onderstaande functie om naar een arrow functie op 1 regel. 

const fivePlusSeven = function () {
  return 5 + 7
};

fivePlusSeven();

(Dit kan niet omdat de arrow 'direct' de gehele function syntax kan aanwijzen)
*/

const fivePlusSeven = () => 5 + 7;

fivePlusSeven();

//DEEL C

/* Opdracht: schrijf een zo kort mogelijke arrow function, zonder naam  (je hoeft het dus ook niet in een const te stoppen),
 die 1 + 2 bij elkaar optelt.
 */

() => 1 + 2
// Deze kan niet 'gecalled' worden er geen variabele naam aan is gekoppeld dus er is geen verwijzing naar. 

//DEEL D

/* Opdracht: Schrijf een arrow function, op 1 regel (dus met een impliciete return statement), 
die de params a en b bijelkaar optelt. Noem de functie myFunction. 
*/
const myFunction = (a, b) => a + b

//DEEL E

/* Opdracht: Schrijf een arrow function op 1 regel, die de parameter a behoudt, e
n altijd a plus 5 returned. Noem de functie addFive. 
*/

const addFive = a => a + 5

//DEEL F

/* Opdracht: Schrijf een arrow function met de naam createObject met een
implicit return statement (dus op 1 regel) die een simpel object returned: {greeting: "hoi"}
*/

const createObject = () => ({ greeting: "hoi" })
//


