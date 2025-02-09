const sections = ["home", "destination", "experience", "helpChat", "cart", "profile"];
const botContainer = document.getElementById('botContainer');

sections.forEach(section => {
    document.getElementById(section).onclick = () => activateSection(section);
});

function activateSection(activeSection) {
    botContainer.style.display = activeSection === "helpChat" ? 'flex' : 'none';
    
    sections.forEach(section => {
        document.getElementById(section).classList.toggle("active", section === activeSection);
    });
}

document.getElementById("cut").onclick = removeChatBot;
function removeChatBot() {
    botContainer.style.display = 'none';
    activateSection("home");
}

document.getElementById("logoHome").onclick = () => location.reload();