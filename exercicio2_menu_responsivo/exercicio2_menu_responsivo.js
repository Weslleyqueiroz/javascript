// Selecionar os elementos
const menuButton = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

// Adicionar evento de clique ao botão
menuButton.addEventListener('click', () => {
    // Alternar a classe visible no menu
    navMenu.classList.toggle('visible')
    // Alternar classe active no botão
    menuButton.classList.toggle('active')

    navMenu.classList.toggle('aria-expanded')
    // Acessibilidade: atualizar aria-expanded
});
