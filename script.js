function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    /* When you toggle it, it will either open or close the "open" class*/
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}