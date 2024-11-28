

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
        setTimeout(() => lista.classList.remove("active"), 100); // Atraso para capturar cliques na lista
    });
});
