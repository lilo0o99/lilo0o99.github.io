//Así se agregan comentarios 
//Código para desplazar hacia arriba

//Selecciones para barra de navegación burger
const burger = document.querySelector("#burger-menu"); //cuando selecciona la hamburguesa
const ul = document.querySelector("nav ul") //cuando seleccionen la lista
const nav = document.querySelector("nav") //cuando seleccione la barra de navegación o un contenedor de nav

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

//cerrar el menu de burger
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) => 
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
); 

//Selección de desplazar hacia arriba
const scrollUp = document.querySelector("#scroll-up");

//Funcionalidad de desplazar hacia arriba
scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });   
});