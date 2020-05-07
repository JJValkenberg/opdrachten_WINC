//OPDRACHT 1

const buttonClick = document.querySelector('#mybutton');   // een variabele (buttonClick) gemaakt 'attached' aan de ID="mybutton" 

buttonClick.addEventListener('click', (press) => {
    alert("Je hebt geklikt!");
})
// Aan de eerder gemaakte variabele een event gekoppeld ('click') zodat deze een function uitvoerd nadat de specifieke variabele is aangeklikt. 
// te uit te voeren function = Na klikken een alert met de tekst "Je hebt geklikt!" tonen


//OPDRACHT 2 -> zie 'index.html'


//OPDRACHT 3
/* < ----OM TE CHECKEN COMMENTS WEGHALEN
const changeButton = document.querySelector("#backgroundButton"); //#backgroundButton aan variabele 'changeButton' toegewezen
const body = document.querySelector(".blue-background"); //'#.blue-background' aan variabele 'body' toegewezen

changeButton.addEventListener('click', (e) => {  //Aan de eerder gemaakte variabele een event gekoppeld ('click') zodat deze een function uitvoerd nadat de specifieke variabele is aangeklikt. 

    body.classList.add("red-background"); //Aan 'body' variabele de class'red-background toegevoegd door classList.add

})
OM TE CHECKEN COMMENTS WEGHALEN---> */

//uitkomst: na drukken button 'Change Background' een rode achtergrond!!!

//OPDRACHT 4

const changeButton = document.querySelector("#backgroundButton");
const body = document.querySelector(".blue-background");

changeButton.addEventListener('click', (e) => {

    body.classList.toggle("red-background"); // Button 'toggles' to red and back to blue by: classList.toggle

})
