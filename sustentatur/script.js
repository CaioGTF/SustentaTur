
document.addEventListener("DOMContentLoaded", () => {
        const btnMenu = document.getElementById("btnMenu");
        const menu = document.getElementById("menu");

        btnMenu.addEventListener("click", (event) => {
            event.preventDefault();
            menu.classList.toggle("active"); 
        });
});


function seaarch() {
    let input = document.getElementById("searchbarr").value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName("pesquisas");

    for(i=0; i < x.length; i++) {
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display = "none"
        }else {
            x[i].style.display = "list-item"
        }
    }

}

