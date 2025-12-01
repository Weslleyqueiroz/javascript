//Exercício 9: Crie uma Promise que gera um valor em dólar (ex.: 10). No próximo .then(), converta para reais (multiplique por 5
const conversor = ()=>{
    return new Promise ((resolve,reject)=>{
        error = false

        const dolar = Math.floor((Math.random() * 10)+1)
        setTimeout(()=>{

            if(error){
                reject("Erro na conversão")
            }else{

                resolve(dolar)
            }

        },1000)
    })
}

conversor()
.then(valorDolar =>{
    const valorReal = valorDolar * 5

    console.log(`Valor em dolar :  ${valorDolar}`)
    console.log(`Valor convertido em real :  ${valorReal}`)

    return valorReal
})
.then(resolvido=>{
    console.log(resolvido, "R$ ")
})

.catch(erro=>{
    console.log(erro, " :erro")
})