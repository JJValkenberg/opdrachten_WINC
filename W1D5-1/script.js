//variabelen toegewezen om menu te openen
const burgerButtonShow = document.querySelector("#hamburger-button");
const navList = document.querySelector(".nav-list");

//variabelen toegewezen voor kleuren de kleuren
//const body = document.querySelector("#totaal")
const wit = document.querySelector(".button-white")
const rood = document.querySelector(".button-red")
const oranje = document.querySelector(".button-orange")
const groen = document.querySelector(".button-green")
const lime = document.querySelector(".button-lime")
const blauw = document.querySelector(".button-blue")
const body = document.querySelector("#totaal")

//Functions for wijzigen kleuren achtergrond
wit.addEventListener('click', (e) => {
    body.style.background = "white";
    navList.classList.toggle("nav-listOpened");
})

rood.addEventListener('click', (e) => {
    body.style.background = "#FF0000";
    navList.classList.toggle("nav-listOpened");
})

oranje.addEventListener('click', (e) => {
    body.style.background = "#FF7A00";
    navList.classList.toggle("nav-listOpened");
})

groen.addEventListener('click', (e) => {
    body.style.background = "#00FF00";
    navList.classList.toggle("nav-listOpened");
})

lime.addEventListener('click', (e) => {
    body.style.background = "#00FF7A";
    navList.classList.toggle("nav-listOpened");
})

blauw.addEventListener('click', (e) => {
    body.style.background = "#0000FF";
    navList.classList.toggle("nav-listOpened");
})

//Button om menu zichtbaar te maken
burgerButtonShow.addEventListener('click', (e) => {
    navList.classList.toggle("nav-listOpened");
})
