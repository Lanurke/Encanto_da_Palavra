function setupVerticalNavbar() {
    var moreButton = document.getElementById('more');
    var headerContainer = document.querySelector('.header-container');
    var verticalNavbar = document.querySelector('.vertical-navbar');
    var backgroundOverlay = document.getElementById('background-overlay');

    // Salva as configurações originais do header-container
    var originalHeaderContainerStyles = {
        opacity: window.getComputedStyle(headerContainer).opacity
    };

    moreButton.addEventListener('click', function (event) {
        event.stopPropagation();

        // Mostra o fundo semitransparente
        backgroundOverlay.classList.remove('hidden');

        // Oculta o header-container com transição suave
        headerContainer.style.transition = 'opacity 0.5s';
        headerContainer.style.opacity = '0';

        // Exibe o vertical-navbar com transição suave
        verticalNavbar.style.transition = 'opacity 0.5s, transform 0.5s';
        verticalNavbar.style.opacity = '1';
        verticalNavbar.style.transform = 'translateX(0)';

        // Adiciona a classe show-vertical-navbar para aplicar estilos específicos ao vertical-navbar
        verticalNavbar.classList.add('show-vertical-navbar');

        // Oculta a barra de rolagem
        document.body.style.overflow = 'hidden';
    });

    document.addEventListener('click', function (event) {
        // Verifica se o vertical-navbar está visível
        if (parseFloat(window.getComputedStyle(verticalNavbar).opacity) === 1) {
            // Verifica se o clique não ocorreu dentro do vertical-navbar
            if (!verticalNavbar.contains(event.target) && event.target !== moreButton) {
                // Oculta o vertical-navbar com transição suave
                verticalNavbar.style.transition = 'opacity 0.5s, transform 0.5s';
                verticalNavbar.style.opacity = '0';
                verticalNavbar.style.transform = 'translateX(-100%)';

                // Restaura as configurações originais do header-container
                headerContainer.style.transition = 'opacity 0.5s';
                headerContainer.style.opacity = originalHeaderContainerStyles.opacity;

                // Remove a classe show-vertical-navbar
                verticalNavbar.classList.remove('show-vertical-navbar');

                // Oculta o fundo semitransparente
                backgroundOverlay.classList.add('hidden');

                // Restaura a barra de rolagem
                document.body.style.overflow = 'auto';
            }
        }
    });
}

// Chama a função setupVerticalNavbar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', setupVerticalNavbar);
