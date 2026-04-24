function rolarPara(idDaSecao) {
    const secao = document.getElementById(idDaSecao);
    if (secao) {
        secao.scrollIntoView({ behavior: 'smooth' });
    }
}

function redirecionar(destino){
    switch (destino) {
        case "github":
            window.open("https://github.com/C4rl0s-ia", "_blank");
            break;
        case "projetos":
            rolarPara('detalhes');
            break;
        case "whatsapp":
            window.open("https://wa.link/5up7az", "_blank");
            break;
        case "linkedin":
            window.open("https://www.linkedin.com/in/carlos-4ugust0/", "_blank");
            break;
    }
}
