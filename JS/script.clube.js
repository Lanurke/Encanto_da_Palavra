// Função para abrir o modal
function openModal() {
    Swal.fire({
        title: 'Clube do Café - A Palavra <br> ',
        html: '<div class="custom-swal-text">Em breve, novidades!</div>',
        icon: 'custom-icon',
        confirmButtonColor: '#ddbb00',
        confirmButtonText: 'OK',
        customClass: {
            popup: 'custom-swal-popup',
            title: 'custom-swal-title',
            confirmButton: 'custom-swal-confirm-button'
        }
    });

    var modalContent = document.querySelector('.swal2-popup .swal2-content');
    if (modalContent) {
        modalContent.style.fontSize = '24px';
    }
}

// Adicionando evento de clique apenas aos links com onclick="openModal()"
document.addEventListener('DOMContentLoaded', function () {
    var linksWithOpenModal = document.querySelectorAll('a[onclick="openModal()"]');
    linksWithOpenModal.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Impede o comportamento padrão do link
            openModal(); // Chama a função para abrir o modal
        });
    });
});
