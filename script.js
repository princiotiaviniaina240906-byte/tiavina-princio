function showSection(sectionId) {
    // Afina ny menu ankavanana
    document.getElementById('menu-container').classList.add('hidden');
    
    // Asehoy ny panel details
    const detailsContainer = document.getElementById('details-container');
    detailsContainer.classList.remove('hidden');
    
    // Afina ny section rehetra hafa ao anatin'ny details
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(sec => sec.classList.add('hidden'));
    
    // Asehoy ilay section voafidy
    document.getElementById(sectionId).classList.remove('hidden');
}

function hideSection() {
    // Afina ny details
    document.getElementById('details-container').classList.add('hidden');
    
    // Asehoy indray ny menu 6 boutons
    document.getElementById('menu-container').classList.remove('hidden');
}
