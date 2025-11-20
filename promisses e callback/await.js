//Exercício 3: Implemente uma função esperar(ms) que retorna uma Promise que resolve após ms milissegundos. Teste com await.

const awaitMs = async (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, ms);
    })

}

const esperandoResposta = async ()=>{
    console.log('esperando...')
    await awaitMs(2000)
    console.log('resolvido após 2ms')
}



esperandoResposta()