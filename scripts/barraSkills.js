document.addEventListener("DOMContentLoaded", function() {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const barras = entry.target.querySelectorAll('.progress-fill');


                barras.forEach(barra => {
                    const largura = barra.getAttribute('data-width');
                    barra.style.width = largura;
                });


                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });


    const skillsSection = document.getElementById('habilidades');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
});