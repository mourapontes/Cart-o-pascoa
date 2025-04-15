const colors = ['#f1c40f', '#e74c3c', '#9b59b6', '#3498db', '#2ecc71', '#1abc9c', '#f39c12'];
const patterns = [
    'linear-gradient(45deg, #f1c40f 50%, #e74c3c 50%)',
    'radial-gradient(circle, #9b59b6, #3498db)',
    'linear-gradient(to right, #2ecc71, #1abc9c)'
];

function eggClick(num) {
    const egg = document.querySelectorAll('.egg')[num-1];
    
    if (num === 3) {
        // Ovo especial com padrão gradiente
        const randomPattern = patterns[Math.floor(Math.random() * patterns.length)];
        egg.style.background = randomPattern;
        alert('Você encontrou o ovo especial com surpresa!');
    } else {
        // Ovos normais com cores sólidas
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        egg.style.backgroundColor = randomColor;
    }
    
    // Efeito de pulo
    egg.style.transform = 'translateY(-20px)';
    setTimeout(() => {
        egg.style.transform = 'translateY(0)';
    }, 300);
}

function showMessage() {
    const message = document.getElementById('hiddenMessage');
    const bunny = document.querySelector('.bunny');
    
    if (message.style.display === 'block') {
        message.style.display = 'none';
        bunny.textContent = '🐇';
    } else {
        message.style.display = 'block';
        bunny.textContent = '🐰';
    }
}

// Efeito de digitação na mensagem do cartão
function typeWriter() {
    const messageElement = document.querySelector('.mensagem-cartao');
    const messageText = "Que esta data seja repleta de bênçãos!";
    let i = 0;
    
    messageElement.textContent = '';
    
    function typing() {
        if (i < messageText.length) {
            messageElement.textContent += messageText.charAt(i);
            i++;
            setTimeout(typing, 100);
        }
    }
    
    setTimeout(typing, 1000);
}

// Inicia quando a página carrega
window.onload = function() {
    typeWriter();
};