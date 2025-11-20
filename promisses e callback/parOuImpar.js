//Exercício 6: Crie uma Promise que gera um número aleatório entre 1 e 10. Se for par, resolva com 'Número par: X'. Se for ímpar, rejeite com 'Número ímpar: X'.

const parOuImpar = ()=>{
    return new Promise((resolve,reject)=>{
        let max = 10
        const aleatorio = (Math.floor(Math.random() * max))
        setTimeout(() => {
            if (aleatorio %2 === 0){
                resolve(aleatorio)
            }else{
                reject(aleatorio)
            }
        }, 2000);
    })
}

parOuImpar()

.then(par =>{
    console.log("Número par : ", par)
})

.catch(impar=>{
    console.log("Número impar : " , impar)
})