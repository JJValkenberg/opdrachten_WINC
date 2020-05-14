//DEEL 1 - Elementen toevoegen aan de DOM

//https://www.w3schools.com/jsref/met_node_appendchild.asp


const bigFiveButton = document.querySelectorAll('.big-five-button'); // variabele toegewezen aan de buttons
const bigFiveList = document.querySelectorAll('.big-five-list-item'); //variabele toegewezen aan de big five lijst
const spottedList = document.querySelector("#spotted-animals-list"); // variabele toegewezen aan de gespotte dieren lijst

Array.from(bigFiveButton).forEach(button => {
    button.addEventListener('click', event => {
        console.log(button.innerHTML);                                         // logs the name (innerHTML) of the button you're pressing
        const extraItem = document.createElement("li");                        // Create a <li> node
        const tekst = document.createTextNode(button.innerHTML);               // Create a text node
        extraItem.appendChild(tekst);                                          // Append the text to <li>
        spottedList.appendChild(extraItem);                                    // Append <li> to <ul> with id="spotted-animals-list" ->Child to Parent
    })

})

//DEEL 2 - 1 element verwijderen uit de DOM

// https://www.w3schools.com/jsref/met_node_removechild.asp


const eersteItemVerwijderen = document.querySelector("#remove-first-item-button"); //#remove-first-item-button als variabele: 'eersteItemVerwijderen' gekoppeld

eersteItemVerwijderen.addEventListener('click', (e) => { //eventListener ('click') aan eersteItemVerwijderen (#remove-first-item-button) gekoppeld
    spottedList.removeChild(spottedList.childNodes[0]); //removeChild gekoppeld als functie

});

// DEEL 3 Meerdere element verwijderen uit de DOM

// https://medium.com/front-end-weekly/remove-all-children-of-the-node-in-javascript-968ad8f120eb


const allesVerwijderen = document.querySelector("#remove-all-button"); //#remove-all-items-button als variabele: 'allesVerwijderen' gekoppeld

allesVerwijderen.addEventListener('click', (e) => {
    spottedList.innerHTML = " ";
});