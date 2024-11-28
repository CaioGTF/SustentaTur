
document.addEventListener("DOMContentLoaded", () => {
        const btnMenu = document.getElementById("btnMenu");
        const menu = document.getElementById("menu");

        btnMenu.addEventListener("click", (event) => {
            event.preventDefault();
            menu.classList.toggle("active"); 
        });
});


document.addEventListener("seaarch", () => {
    let input = document.getElementById("searchbarr");
    let x = document.getElementsByClassName("pesquisas");
    input.addEventListener("click", (event) => {
        event.preventDefault();
        x.classList.toggle("active");
    });
});

