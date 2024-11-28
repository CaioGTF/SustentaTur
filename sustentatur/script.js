
document.addEventListener("DOMContentLoaded", () => {
        const btnMenu = document.getElementById("btnMenu");
        const menu = document.getElementById("menu");

        btnMenu.addEventListener("click", (event) => {
            event.preventDefault();
            menu.classList.toggle("active"); 
        });
});


