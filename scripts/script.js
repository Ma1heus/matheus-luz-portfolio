// Get current year
const currentYear = new Date().getFullYear();

// Insert year in footer
document.getElementById("currentyear").textContent = currentYear;

// Get last modified date
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;