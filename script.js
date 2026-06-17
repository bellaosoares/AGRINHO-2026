// agro-sustentavel.js

document.addEventListener("DOMContentLoaded", () => {
    // Inicializar recursos do site
    initBotaoInterativo();
    initValidacaoFormulario();
    initAnimacaoScroll();
});

/**
 * 1. INTERATIVIDADE DA PÁGINA INICIAL
 * Ação para o botão interativo do Banner Principal
 */
function initBotaoInterativo() {
    // Seleciona o botão do banner (substitua a classe se necessário)
    const botaoBanner = document.querySelector(".btn-banner-interativo");
    
    if (botaoBanner) {
        botaoBanner.addEventListener("click", (e) => {
            e.preventDefault();
            // Faz um scroll suave até a seção de Soluções e Futuro
            const secaoSolucoes = document.querySelector("#secao-solucoes");
            if (secaoSolucoes) {
                secaoSolucoes.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
}

/**
 * 2. FORMULÁRIO DE CONTATO (SEÇÃO 5)
 * Validação e feedback para o formulário de conscientização
 */
function initValidacaoFormulario() {
    const formulario = document.querySelector("#form-contato");
    
    if (formulario) {
        formulario.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Captura dos campos
            const nome = formulario.querySelector("#nome")?.value.trim();
            const email = formulario.querySelector("#email")?.value.trim();
            const mensagem = formulario.querySelector("#mensagem")?.value.trim();
            
            // Validação simples
            if (!nome || !email || !mensagem) {
                exibirFeedback("Por favor, preencha todos os campos.", "erro");
                return;
            }
            
            if (!validarEmail(email)) {
                exibirFeedback("Por favor, insira um e-mail válido.", "erro");
                return;
            }
            
            // Simulação de envio com sucesso
            exibirFeedback("Mensagem enviada com sucesso! Obrigado por apoiar o Agro Sustentável. 🌱", "sucesso");
            formulario.reset();
        });
    }
}

// Função auxiliar para validar e-mail
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Função auxiliar para exibir mensagens de feedback de forma elegante
function exibirFeedback(mensagem, tipo) {
    // Remove feedback anterior se existir
    const feedbackExistente = document.querySelector(".feedback-form");
    if (feedbackExistente) feedbackExistente.remove();
    
    const divFeedback = document.createElement("div");
    divFeedback.classList.add("feedback-form", tipo);
    divFeedback.innerText = mensagem;
    
    // Estilização dinâmica rápida baseada na paleta de cores
    divFeedback.style.padding = "10px";
    divFeedback.style.marginTop = "15px";
    divFeedback.style.borderRadius = "5px";
    divFeedback.style.textAlign = "center";
    divFeedback.style.fontWeight = "bold";
    
    if (tipo === "sucesso") {
        divFeedback.style.backgroundColor = "#66BB6A"; // Verde claro
        divFeedback.style.color = "#FFFFFF";
    } else {
        divFeedback.style.backgroundColor = "#8D6E63"; // Marrom suave (alerta/terra)
        divFeedback.style.color = "#FFFFFF";
    }
    
    const formulario = document.querySelector("#form-contato");
    formulario?.appendChild(divFeedback);
    
    // Remove a mensagem após 5 segundos
    setTimeout(() => {
        divFeedback.remove();
    }, 5000);
}

/**
 * 3. ANIMAÇÕES AO ROLAR A PÁGINA (SCROLL)
 * Efeito visual moderno para revelar os cards das seções de Sustentabilidade e Desafios
 */
function initAnimacaoScroll() {
    // Seleciona elementos que vão ganhar animação (ex: cards, blocos de texto)
    const elementosAnimados = document.querySelectorAll(".animar-scroll");
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visivel");
                    observer.unobserve(entry.target); // Anima apenas uma vez
                }
            });
        }, {
            threshold: 0.15 // Ativa quando 15% do elemento aparece na tela
        });
        
        elementosAnimados.forEach(elemento => observer.observe(elemento));
    } else {
        // Fallback caso o navegador seja muito antigo
        elementosAnimados.forEach(elemento => elemento.classList.add("visivel"));
    }
}
