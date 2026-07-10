/* ==================================
   AshCore AI V1.0
   script.js Final
================================== */

const menuBtn = document.getElementById("menuBtn");
const closeMenu = document.getElementById("closeMenu");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

// Open Menu
menuBtn.addEventListener("click", () => {
    sideMenu.classList.add("active");
    overlay.classList.add("active");
});

// Close Menu Button
closeMenu.addEventListener("click", closeSidebar);

// Close Overlay
overlay.addEventListener("click", closeSidebar);

function closeSidebar() {
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
}

// Close menu after clicking any link
document.querySelectorAll(".side-menu a").forEach(link => {
    link.addEventListener("click", () => {
        closeSidebar();
    });
});

// Welcome Message
window.addEventListener("load", () => {
    console.log("✅ AshCore AI Loaded Successfully");
});

// Future Notification
document.querySelectorAll(".coming-badge").forEach(item => {

    item.addEventListener("click", () => {

        alert("🚀 This feature will be available in the next update.");

    });

});
