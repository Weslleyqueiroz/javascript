// Selecionar os elementos
const alterarBotao = document.getElementById('idBotao');
const body = document.body;

// Adicionar evento de clique ao botão
alterarBotao.addEventListener('click', () => {
    alterarBotao.classList.toggle('ativo')

    body.classList.toggle('dark-theme')
});
