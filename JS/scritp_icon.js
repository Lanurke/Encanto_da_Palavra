// Função para verificar a posição de rolagem e mostrar/ocultar o ícone do WhatsApp e Home
function verificarPosicaoRolagem() {
    var posicaoScroll = window.scrollY || document.documentElement.scrollTop;
    var alturaMain = document.getElementById('main').offsetTop;
    var whatsappElement = document.querySelector('.whatsapp');
    var homeElement = document.querySelector('.home');

    // Adicione ou remova a classe com base na posição de rolagem para o WhatsApp
    if (posicaoScroll >= alturaMain) {
        whatsappElement.classList.add('mostrar');
    } else {
        whatsappElement.classList.remove('mostrar');
    }

    // Adicione ou remova a classe com base na posição de rolagem para o Home
    if (posicaoScroll >= alturaMain) {
        homeElement.classList.add('visivel');
    } else {
        homeElement.classList.remove('visivel');
    }
}

// Adicione um ouvinte de evento para chamar a função quando a página for rolada
window.addEventListener('scroll', verificarPosicaoRolagem);

// Chame a função inicialmente para verificar a posição ao carregar a página
verificarPosicaoRolagem();




  