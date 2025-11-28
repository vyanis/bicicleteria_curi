let btnMenu = document.querySelector("#btn-menu");
let nav = document.querySelector("header nav");
let icons = btnMenu.querySelectorAll("#btn-menu i");

btnMenu.addEventListener("click", function() {
    nav.classList.toggle("oculto");
    
    icons.forEach(icon => {
     icon.classList.toggle("oculto");
    });
});