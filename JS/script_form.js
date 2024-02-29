document.addEventListener('DOMContentLoaded', function () {
    // Seletor do formulário
    var form = document.querySelector('form');

    // Adiciona um ouvinte de evento para o formulário ao enviar
    form.addEventListener('submit', function (event) {
        // Impede o envio padrão do formulário
        event.preventDefault();

        // Chama a função de validação
        if (validarFormulario()) {
            // Se o formulário for válido, exibe a mensagem de agradecimento usando SweetAlert2
            Swal.fire({
                title: 'Obrigado!',
                text: 'Retornaremos o mais breve possível.',
                icon: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK',
                showClass: {
                    popup: 'animated fadeInDown faster',
                    title: 'animated fadeInUp faster'
                },
                hideClass: {
                    popup: 'animated fadeOutUp faster',
                    title: 'animated fadeOutDown faster'
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    // Limpa os campos do formulário após um envio bem-sucedido
                    document.getElementById('fname').value = '';
                    document.getElementById('name').value = '';
                    document.getElementById('email').value = '';
                    document.getElementById('text-feedback').value = '';

                    // Redireciona para a página desejada após clicar em OK
                    window.location.href = '/index.html';
                }
            });
        }
    });

    // Função para validar o formulário
    function validarFormulario() {
        // Obtém os valores dos campos
        var nome = document.getElementById('fname').value;
        var telefone = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var mensagem = document.getElementById('text-feedback').value;

        // Validação simples - certifique-se de que todos os campos estão preenchidos
        if (nome.trim() === '' || telefone.trim() === '' || email.trim() === '' || mensagem.trim() === '') {
            // Exibe a caixa de alerta do SweetAlert2 indicando que todos os campos devem ser preenchidos
            Swal.fire({
                title: 'Erro',
                text: 'Por favor, preencha todos os campos do formulário.',
                icon: 'error',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK'
            });

            return false;
        }

        // Se chegarmos até aqui, o formulário é válido
        return true;
    }
    // Função auxiliar para verificar se o e-mail contém '@' durante a digitação
    function contemArrobaDuranteDigitacao(event) {
        var inputValue = event.target.value;
        var hasArroba = contemArroba(inputValue);

        if (!hasArroba) {
            // Se não houver '@', você pode limpar o valor ou exibir uma mensagem de erro
            event.target.setCustomValidity('Por favor, insira um endereço de e-mail válido.');
        } else {
            event.target.setCustomValidity(''); // Limpa qualquer mensagem de erro
        }
    }

    // Adicione um ouvinte de evento de entrada para verificar o caractere '@' durante a digitação
    document.getElementById('email').addEventListener('input', contemArrobaDuranteDigitacao);

    // Função auxiliar para verificar se o e-mail contém '@'
    function contemArroba(email) {
        return email.includes('@');
    }
});
