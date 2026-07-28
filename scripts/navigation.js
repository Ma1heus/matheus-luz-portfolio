const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");
const navLinks = document.querySelectorAll("#navigation a");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuButton.innerHTML = isOpen ? "✕" : "☰";
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("open");
        menuButton.innerHTML = "☰";
        menuButton.setAttribute("aria-label", "Open navigation menu");
    });
});