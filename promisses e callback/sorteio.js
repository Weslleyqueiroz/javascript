//Exercício 5: Crie uma Promise que simule um sorteio: 50% de chance de sucesso 'Você ganhou!', 50% 'Você perdeu!'.
const sorteio = (sorteioRealizado) =>{
    return new Promise((resolve, reject)=>{
         const erro = false
         const sorteio = Math.random() < 0.5

        if(sorteio){
            resolve("ganhou!!")
        }else{
            reject("perdeu!!")
        }
    })
}

sorteio()
.then(resolvido =>{
    console.log("Resultado do sorteio: ", resolvido)
})

.catch(erro =>{
    console.log("Voceê perdeu o sorteio ", erro)
})
