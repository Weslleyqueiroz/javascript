// Selecionar os elementos
const mainImage = document.getElementById('main-image');
const imageCaption = document.getElementById('image-caption');
const thumbnails = document.querySelectorAll('.thumbnail');

// Adicionar evento de clique a cada miniatura
thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
        // Obter src e alt da miniatura clicada
        const newSrc = thumb.getAttribute('src')
        const newAlt = thumb.getAttribute('alt')
        // Atualizar a imagem principal
        mainImage.setAttribute('src', newSrc)
        mainImage.setAttribute('alt', newAlt)
        
        // Atualizar classe active
        thumb.classList.add('active')
        
    });
});
