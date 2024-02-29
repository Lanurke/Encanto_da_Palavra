// Aguarda o carregamento completo do DOM antes de executar o script
document.addEventListener('DOMContentLoaded', function () {
    // Itera sobre os elementos de 1 a 20
    for (let i = 1; i <= 20; i++) {
        // Seleciona os botões de fonte, de retorno e os detalhes do cartão para o índice atual
        const fontBtn = document.querySelector(`.font_btn_${i}`);
        const backBtn = document.querySelector(`.back_btn_${i}`);
        const cardDetails = document.querySelector(`.card_details_${i}`);

        // Verifica se os elementos foram encontrados
        if (fontBtn && backBtn && cardDetails) {
            // Adiciona um ouvinte de clique para o botão de fonte
            fontBtn.addEventListener('click', () => {
                console.log(`Font button ${i} clicked`);
                // Adiciona a classe 'open' aos detalhes do cartão clicado
                cardDetails.classList.add('open');
                // Fecha outros cartões abertos
                closeOtherCards(i);
            });

            // Adiciona um ouvinte de clique para o botão de retorno
            backBtn.addEventListener('click', () => {
                console.log(`Back button ${i} clicked`);
                // Remove a classe 'open' dos detalhes do cartão atual
                cardDetails.classList.remove('open');
            });
        } else {
            // Registra um erro se algum elemento não for encontrado para o cartão atual
            console.error(`Element not found for card ${i}`);
        }
    }

    // Função para fechar os detalhes de outros cartões, mantendo apenas o atual aberto
    function closeOtherCards(currentIndex) {
        console.log(`Closing other cards for index ${currentIndex}`);
        // Itera sobre os elementos de 1 a 20
        for (let j = 1; j <= 20; j++) {
            // Verifica se o índice atual não é o mesmo que o índice do cartão atual
            if (j !== currentIndex) {
                // Seleciona os detalhes do cartão para o índice atual
                const otherCardDetails = document.querySelector(`.card_details_${j}`);
                // Verifica se os detalhes do cartão foram encontrados
                if (otherCardDetails) {
                    console.log(`Closing card details for index ${j}`);
                    // Remove a classe 'open' dos detalhes do cartão
                    otherCardDetails.classList.remove('open');
                } else {
                    // Registra um erro se os detalhes do cartão não forem encontrados
                    console.error(`Element not found for card details ${j}`);
                }
            }
        }
    }
});
