const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelector(".item");

// Toggle Mobile Menu

function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");

        // Add Menu (Hanburger) Icon
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else {
        menu.classList.add("active");

        // Add Close (X) icon
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
}

// Event Listener

toggle.addEventListener("click", toggleMenu, false);
