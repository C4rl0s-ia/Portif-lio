function toggleDarkMode() {
    const body = document.body;
    const themeBtn = document.getElementById('theme-toggle');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeBtn.textContent = '☀️';
        localStorage.setItem('temaPortifolio', 'escuro'); 
    } else {
        themeBtn.textContent = '🌙'; 
        localStorage.setItem('temaPortifolio', 'claro'); 
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const temaSalvo = localStorage.getItem('temaPortifolio');
    const themeBtn = document.getElementById('theme-toggle');

    if (temaSalvo === 'escuro') {
        document.body.classList.add('dark-mode');
        if (themeBtn) {
            themeBtn.textContent = '☀️';
        }
    }
});

// =========================================
// LÓGICA DO DARK MODE (Com troca de Logo)
// =========================================

function toggleDarkMode() {
    const body = document.body;
    const themeBtn = document.getElementById('theme-toggle');
    const logo = document.getElementById('logo-navbar');

    // Alterna a classe 'dark-mode'
    body.classList.toggle('dark-mode');

    // Verifica qual tema ficou ativo para trocar o ícone, o logo e salvar
    if (body.classList.contains('dark-mode')) {
        themeBtn.textContent = '☀️';
        localStorage.setItem('temaPortifolio', 'escuro');
        
        // Troca para o logo branco
        if (logo) {
            logo.src = 'image/logo_branco.png';
        }
    } else {
        themeBtn.textContent = '🌙';
        localStorage.setItem('temaPortifolio', 'claro');
        
        if (logo) {
            logo.src = 'image/logo_escuro.png';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const temaSalvo = localStorage.getItem('temaPortifolio');
    const themeBtn = document.getElementById('theme-toggle');
    const logo = document.getElementById('logo-navbar');

    if (temaSalvo === 'escuro') {
        document.body.classList.add('dark-mode');
        
        if (themeBtn) {
            themeBtn.textContent = '☀️';
        }
        
        if (logo) {
            logo.src = 'image/logo_escuro.png';
        }
    }
});