document.addEventListener("DOMContentLoaded", () => {
    
    // Captura o formulário de contato
    const formulario = document.getElementById("agroForm");

    formulario.addEventListener("submit", (evento) => {
        // Impede a página de recarregar ao enviar o formulário
        evento.preventDefault();

        // Coleta os valores digitados pelo usuário
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;

        // Gera uma resposta interativa de sucesso
        alert(`Obrigado pelo contato, ${nome}!\nEnviamos um link de conscientização ecológica para o e-mail: ${email}.`);

        // Limpa os campos do formulário após o envio
        formulario.reset();
    });

    // Efeito Visual Sutil: Muda a opacidade do menu ao rolar a página
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "rgba(46, 125, 50, 0.95)";
        } else {
            navbar.style.backgroundColor = "#2E7D32";
        }
    });
});