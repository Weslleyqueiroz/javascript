//Exercício 10: Simule o download de 3 arquivos em sequência usando then encadeados,
//mostrando mensagens 'Arquivo 1 baixado', 'Arquivo 2 baixado', 'Arquivo 3 baixado'.

const download = ()=>{
    return new Promise((resolve,reject)=>{
        const error =  false

        setTimeout(()=>{
            if(error){
                reject('Erro ao baixar o arquivo desejado.')
            }else{
                resolve('Arquivo 1 baixado')
            }
        },1000)
    })
}

download()
.then(baixado=>{
    console.log(baixado)
    return "baixado"
})
.then(baixado2=>{
    console.log("Arquivo 2", baixado2)
    return "Baixado"
})
.then(baixado3=>{
    console.log("Arquivo 3", baixado3)
    return "Bixado"
})