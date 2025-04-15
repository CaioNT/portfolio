document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    // Menu mobile
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Fechar o menu quando um link for clicado
    navItems.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Fechar menu mobile
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');

            // Rolagem suave
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Atualizar link ativo
            navItems.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Observar seções para destacar link ativo
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navItems.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // Modal para imagens dos projetos
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.getElementsByClassName('close')[0];

    // Adiciona evento de clique em todas as imagens dos projetos
    document.querySelectorAll('.projeto-img').forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
        });
    });

    // Fecha o modal quando clicar no X
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Fecha o modal quando clicar fora da imagem
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Fechar modal com tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}); 

// Inicializa o EmailJS com sua chave pública
emailjs.init("BSq2H8XPFLNia9q3e");

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;

    const templateParams = {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value
    };

    emailjs.send("service_b7uypot", "template_qlonzw9", templateParams)
        .then((response) => {
            console.log("SUCCESS!", response.status, response.text);
            alert("Mensagem enviada com sucesso!");
            this.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        })
        .catch((err) => {
            console.error("FAILED...", err);
            alert(`Erro ao enviar: ${err.text || err.message || JSON.stringify(err)}`);
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
});