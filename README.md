# Portfólio Designer Gráfico

Um site portfólio moderno e responsivo para designer gráfico, desenvolvido com HTML, CSS e JavaScript.

## 🚀 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Font Awesome 6.0.0
- EmailJS para formulário de contato

## 📋 Funcionalidades

- Design responsivo
- Menu de navegação com animações
- Seção Hero com chamada para ação
- Galeria de projetos com modal para visualização ampliada
- Seção Sobre com apresentação profissional
- Formulário de contato funcional
- Links para redes sociais
- Animações suaves de scroll

## 📧 Configuração do Formulário de Contato

O formulário de contato utiliza o serviço EmailJS. Para configurar:

1. Crie uma conta em [EmailJS](https://www.emailjs.com/)
2. Obtenha sua Public Key
3. Crie um Email Service
4. Crie um Email Template com as variáveis:
   - name
   - email
   - message

### Configuração do EmailJS no projeto:

```javascript
// No script.js
emailjs.init("YOUR_PUBLIC_KEY");

// Parâmetros do template
const templateParams = {
    name: "Nome do Remetente",
    email: "email@remetente.com",
    message: "Mensagem"
};

// IDs necessários
service_id: "seu_service_id"
template_id: "seu_template_id"
```

## 🎨 Personalização

O projeto utiliza variáveis CSS para fácil personalização:

```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #ffd98f;
    --text-color: #ffffff;
    --light-bg: #0f0f0f;
    --dark-bg: #000000;
}
```

## 📱 Responsividade

O site é totalmente responsivo e se adapta a diferentes tamanhos de tela:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (até 767px)

## 👤 Autor

Desenvolvido por [Caio Nunes](https://www.instagram.com/2ez_caio/) 