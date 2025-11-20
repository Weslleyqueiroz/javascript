//Exercício 1: Crie uma Promise que sempre resolva após 2 segundos com a mensagem 'Tempo concluído!'.

const promisseOne = (concluido) =>{
    return new Promise((resolve, reject) => {
        const error = false;
        
        if (error){
            reject(error)
        }
    setTimeout(() => {
        console.log('Tempo concluído')
        
    }, 2000);
})

}
promisseOne()

.then(resolvido =>{
    console.resolve('A promisse foi resolvida? ' , resolvido)
})