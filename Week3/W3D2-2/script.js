//STAP 1
/* //const gemaakt van'huiswerkMaken met als function met parameter vak, callback
const huiswerkMaken = (vak, callback) => {
    console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
    callback();
}
*/
//STAP 2
const klaarMetHuiswerk = () => {
    console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!")
}

//STAP 3
//huiswerkMaken('wiskunde', klaarMetHuiswerk);

//STAP 4 

const huiswerkMaken = (vak, callback) => {
    setTimeout(() => {
        console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
        callback();
    }, 1000);

}
huiswerkMaken('wiskunde', klaarMetHuiswerk);
