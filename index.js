window.onscroll = function () {
    let topbar = document.querySelector("nav");
    if(window.scrollY > 50){
        topbar.classList.add("Scrolled");
    }else {
        topbar.classList.remove("Scrolled");
    }
}