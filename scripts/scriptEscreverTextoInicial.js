function typeWriter(element, text, speed, callback) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {

            if (callback) callback();
        }
    }
    type();
}


window.onload = function() {

    const titleText = "Construindo soluções robustas e sistemas inteligentes.";
    const descriptionText = "Desenvolvedor de Software com foco em Java, Spring Boot e arquitetura MVC/MVP. Transformo dados complexos em inteligência de negócios.";

    const titleSpan = document.getElementById('typing-title');
    const descriptionSpan = document.getElementById('typing-description');

    typeWriter(titleSpan, titleText, 50, function() {

        setTimeout(function() {
            typeWriter(descriptionSpan, descriptionText, 30);
        }, 500);
    });
};