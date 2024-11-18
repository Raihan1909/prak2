function toggleMode() {
    const body = document.getElementById('body');
    const button = document.getElementById('modeToggleBtn');
    body.classList.toggle('chaotic');

    if (body.classList.contains('chaotic')) {
        button.innerText = "Pindah ke Mode Rapi";
    } else {
        button.innerText = "Ubah Mode Tampilan";
    }
}

function showContent(id) {
    const content = document.getElementById(id);
    if (content.style.display === "none") {
        alert("Apakah Anda ingin melihat bagian ini?");
        content.style.display = "block";
    } else {
        alert("Apakah Anda ingin menyembunyikan bagian ini?");
        content.style.display = "none";
    }
}

function confirmToggleContent(id, sectionName) {
    const content = document.getElementById(id);
    if (content.style.display === "none") {
        if (confirm(`Apakah Anda ingin melihat bagian ${sectionName}?`)) {
            content.style.display = "block";
        }
    } else {
        if (confirm(`Apakah Anda ingin menyembunyikan bagian ${sectionName}?`)) {
            content.style.display = "none";
        }
    }
}