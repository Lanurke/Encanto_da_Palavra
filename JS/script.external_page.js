document.addEventListener('DOMContentLoaded', function () {
    // Função para carregar conteúdo externo
    function loadExternalContent(url, containerId, callback) {
        var container = document.getElementById(containerId);
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                container.innerHTML = xhr.responseText;

                // Chama a função de retorno (callback) após carregar o conteúdo externo
                if (callback && typeof callback === 'function') {
                    callback();
                }
            }
        };
        xhr.send();
    }

    // Carregar Footer
    loadExternalContent('/external_page/footer.html', 'footer-container');

    // Carregar Vertical Navbar
    loadExternalContent('/external_page/vertical-navbar.html', 'vertical-navbar-container', setupVerticalNavbar);
});
