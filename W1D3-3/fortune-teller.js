// DEEL 1


const tellFortune = (numberOfChildren, namePartner, geoLocation, jobTitle) => {
    console.log("You will be a " + jobTitle + '' + " in the " + geoLocation +
        ",married with " + namePartner + " and have " + numberOfChildren + " Children.")
}


let voorspelling1 = tellFortune(2, "Ericka", "USA", "Developer")
let voorspelling2 = tellFortune(0, "iemand", "Amsterdam", "werkeloze")
let voorspelling3 = tellFortune(4, "niemand", "Schagen", "ober")

console.log(voorspelling1);
console.log(voorspelling2);
console.log(voorspelling3);


// 