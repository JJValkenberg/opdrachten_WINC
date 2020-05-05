
// const : do not change anything!!
const age = 18;

//input : please fill in the age of the guest (in numbers)
let guestAge = 14;

if (guestAge >= age) {
    console.log("geniet, maar drink met mate en welkom!");
}
else {
    console.log("Helaas, wacht nog maar een paar jaar!");
}

// const : do not change anything!!
const isFemale = true;
const isMale = false;

//input : please fill in if the guest: isFemale / isMale
let gender = isMale;

if (gender == isFemale) {
    console.log("Welkom op de Ladies Night!");
}
else {
    console.log("Helaas, het is Ladies Night, dus Ladies-only!");
}

// const : do not change anything!!
const driverStatus = "Bob";

//input : please fill in the name of the driver:
let chauffeur = "Kees";

if (chauffeur == driverStatus) {
    console.log("Je mag zelf rijden Bob!");
}
else {
    console.log("Helaas, je bent niet Bob dus je mag niet rijden!");
}

//input : please fill in the age of the customer:
let leeftijd = 24;

if (leeftijd >= 18 && leeftijd <= 25) {
    console.log("Gefeliciteerd, je krijgt 50% korting!")
}
else {
    console.log("Helaas, je moet de volle mep betalen!");
}

// const : do not change anything!!
const name = "Bram";

//input : please fill in the name of the guest:
let guestName = "Sarah";

if (guestName === "Bram" || guestName === "Sarah") {
    console.log("Een gratis biertje voor jou!");
}

else {
    console.log("Jammer zeg, geen gratis biertje voor jou!");
}

// const : do not change anything!!
const totalAmount = 100;

//input : please fill in the amount the customer is paying:
let bestedingGast = 45;

if (bestedingGast >= totalAmount) {
    console.log("Champagne!!!!")
}
else if (bestedingGast > 25 && bestedingGast < 50) {
    console.log("Yumm  een gratis portie \(vega\)bitterballen!");
}

else if (bestedingGast > 50 && bestedingGast < 100) {
    console.log("Yumm een gratis portie nachos!");
}

else {
    console.log("Bedankt voor je komst, maar niks gratis.");
}