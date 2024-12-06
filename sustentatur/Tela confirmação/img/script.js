document.addEventListener("DOMContentLoaded", () => {
    const btnMenu = document.getElementById("btnMenu");
    const menu = document.getElementById("menu");

    btnMenu.addEventListener("click", (event) => {
        event.preventDefault();
        menu.classList.toggle("active"); 
    });
});

document.addEventListener("DOMContentLoaded", () => {
const input = document.getElementById("searchbarr");
const lista = document.querySelector(".pesquisas-barra");

input.addEventListener("focus", () => {
    lista.classList.add("active");
});

document.addEventListener("click", (event) => {
    if (!input.contains(event.target) && !lista.contains(event.target)) {
        lista.classList.remove("active");
    }
});

input.addEventListener("blur", () => {
    setTimeout(() => lista.classList.remove("active"), 100);
});
});

let trilho = document.getElementById("trilho");
let body = document.querySelector('body');


trilho.addEventListener('click', ()=>{
trilho.classList.toggle('dark')
body.classList.toggle('dark')
})

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
nextImage();
}, 3000);

function nextImage() {
count ++;
if(count > 3){
count = 1;
}
document.getElementById("radio"+count).checked = true;
}

document.addEventListener("DOMContentLoaded", () => {
const login = document.getElementById("login_button");
const dropdown = document.getElementById("dropdown_login");

login.addEventListener("click", (event) => {
    event.stopPropagation(); 
    dropdown.classList.toggle("active");
});

document.addEventListener("click", (event) => {
    if (!login.contains(event.target)) {
        dropdown.classList.remove("active");
    }
});
});
