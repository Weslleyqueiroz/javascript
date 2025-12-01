// Selecionar os elementos
const toggleButton = document.getElementById('toggle-button');
const formInputs = document.querySelectorAll('.form-input');

// Adicionar evento de clique ao botão
toggleButton.addEventListener('click', () => {
    // Verificar se os campos estão desabilitados
    if(formInputs === isDisabled){
        console.log("desabilitado")
    }else{
        console.log("habilitado")
    }
    // Percorrer todos os campos
    formInputs.forEach(input => {
        input.getAttribute('t')
    });
    
    // Atualizar o texto e ícone do botão
    if (isDisabled) {
        toggleButton.innerHTML = '<i class="fas fa-lock">🔒</i> Desabilitar Campos';
        toggleButton
    } else {
        toggleButton.innerHTML = '<i class="fas fa-lock-open">🔓</i> Habilitar Campos';
        toggleButton
    }
});
