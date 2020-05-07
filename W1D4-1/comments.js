/*
// DEEL 1
vraag
 Gebruik de console van de Chrome Dev Tools en `document.body.innerHTML` om de gehele inhoud van `
<body>` te vervangen met "Ik ben de nieuwe inhoud van body" (vergelijkbaar met wat je hebt gezien in de video).

antwoord:
Hier is alles binnen de <body> tag gewijzigd in de tekst die is doorgeven via de DOM
-> document.body.innerHTML = "En nu hebben we een nieuwe inhoud"

vraag
Check na afloop nog even het resultaat van je actie in je HTML pagina, dmv inspector of inspect
page source. Hoe ziet je HTML er nu uit?

antwoord:
Hier is alles binnen de <body> tag gewijzigd in de tekst die is doorgeven via de DOM en dus zichtbaar in
het 'elements' gedeelte binnen de console

*


// DEEL 2
vraag
Gebruik de console nog een keer om het div element met de ID "first-section" te selecteren.

antwoord:
// Hier selecteren we de id "first-section"  --->  document.querySelector('#first-section')

vraag
Sla het geselecteerde element op in een variable:

antwoord
geslecteerde element ('first-section') opgeslagen in variabele firstconstSection  ---> firstSection = document.querySelector('#first-section');

// DEEL 3

vraag
Stop de elementen weer in een variable en tik deze in je console. Bekijk hoe een collectie aan
elementen er anders uit ziet dan 1 enkel element.


antwoord
selecteer de beiden elementen d.m.v de class='paragraph) ---> document.getElementsByClassName('paragraph');
Daarna een variabele (par) toegekend aan beiden d.m.v   ---> let par = document.getElementsByClassName('paragraph');


*/