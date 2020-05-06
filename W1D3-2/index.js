// DEEL A

// Bullet list met pseudo-functies
/* dutchCheeseSandwich
Get a slice of bread
Smear some butter on the bread
Add a slice of cheese
Place another slice of bread on top
*/

/*

function dutchCheeseSandwich() {
    console.log('Get a slice of bread');
    console.log('Smear some butter on the bread');
    console.log('Add a slice of cheese');
    console.log('Place another slice of bread on top');
}

dutchCheeseSandwich();

*/
// DEEL B

/*
function makeSandwich(beleg) // alles links is de function declaration!  
{
    console.log('There you go, a sandwich with' + ' ' + beleg + '!');
}
makeSandwich('worst');  // Hier 'call' ik de functie
makeSandwich('filet American'); // Hier 'call' ik de functie ook
*/
// DEEL C
/*
const calculateDiscountedPrice = (totalAmount, discount) => {
    return totalAmount - discount;
};

let prijs = calculateDiscountedPrice(99.50, 25);

console.log(Math.round(prijs));
*/
// DEEL D

/*
const calculateDiscountedPrice = (totalAmount, discount) => {
    return totalAmount - discount;
};

let prijs = calculateDiscountedPrice(99.50, 25);

console.log(Math.round(prijs));

*/


const calculateDiscountedPrice2 = (totalAmount, discount) => {
    if (totalAmount > 25) {
        return totalAmount - discount;
    }
}


console.log(calculateDiscountedPrice2(26, 20));

