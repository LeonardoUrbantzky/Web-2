document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            alert("Mensagem enviada com sucesso!");
            form.reset();
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });

    window.addEventListener("scroll", function() {
        const sections = document.querySelectorAll("section");
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });
    });
});
