function toggleMenu() {
    document.querySelector(".menu").classList.toggle("active");
}

document.addEventListener("click", function (event) {
    const menu = document.querySelector(".menu");
    const hamburger = document.querySelector(".hamburger");

    if (
        menu.classList.contains("active") &&
        !menu.contains(event.target) &&
        !hamburger.contains(event.target)
    ) {
        menu.classList.remove("active");
    }
});


const links = document.querySelectorAll('.menu a');
const currentUrl = window.location.pathname.split("/").pop(); 
links.forEach(link => {
    if (link.getAttribute("href") === currentUrl) {
        link.classList.add("active");
    }
});
