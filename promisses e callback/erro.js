//Exercício 2: Crie uma Promise que rejeite com a mensagem 'Erro forçado!' após 1 segundo

const promisseError = (email)=>{
    return new Promise((resolver,reject)=>{
        const error = true

        setTimeout(() => {
            if (error){
            reject('erro forçado')
        }
        }, 1000);
        
    })
}

promisseError()

.catch(error =>{
        console.error("Rejeição: ", error)
})

