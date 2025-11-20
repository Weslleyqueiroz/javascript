//Exercício 4: Simule o carregamento de uma página: após 3 segundos, retorne 'Página carregada'.
const paginaCarregada = async (carregada)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve()
        },carregada)
    })
}


const esperandoCarregamento = async ()=>{
    console.log('carregamento de 3000 segundos: ')
    await paginaCarregada(3000)
    console.log("Páginda carregada!")
}

esperandoCarregamento()

