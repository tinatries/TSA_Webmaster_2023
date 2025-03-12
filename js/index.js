var lines = document.querySelectorAll(".burger-lines"); 
var burgerMenu = document.querySelector(".burger-menu");
var navMenu = document.querySelector(".pri-nav");

burgerMenu.addEventListener("click", function() {
    var isOpen = navMenu.getAttribute("is-open");

    if(isOpen === "false") {
        lines[0].setAttribute("is-open", true); 
        lines[1].setAttribute("is-open", true);
        lines[2].setAttribute("is-open", true);
        navMenu.setAttribute("is-open", true);

        isOpen = true; 
    } else {
        lines[0].setAttribute("is-open", false); 
        lines[1].setAttribute("is-open", false);
        lines[2].setAttribute("is-open", false);
        navMenu.setAttribute("is-open", false);
        isOpen = false; 
    }
})

if (window.innerWidth >= 950) {
    navMenu.setAttribute("is-open", true)
}

window.addEventListener("resize", function(){
    if (window.innerWidth >= 950) {
        navMenu.setAttribute("is-open", true);
    } else {
        navMenu.setAttribute("is-open", false);
    }
})



