//Exercício 7: Usando then encadeados, simule: 'Pedido recebido' → 'Pedido em preparo' → 'Pedido enviado'
const pedidoEncadeado = ()=>{
    return new Promise((resolve, reject)=>{
        const error = false
        setTimeout(()=>{
            if(error){
                reject("Pedido rejeitado ")
            }else{
                resolve("pedido aceito")
            }
        },1000)
    })
}

pedidoEncadeado()
.then(recebido =>{
    console.log(recebido , ": Pedido recebido ")
    return "pedido recebido"
})
.then(preparo =>{
    console.log(preparo , ": Pedido em preparo ")
    return "pedido em recebido"
})

.then(enviado =>{
    console.log(enviado , " : Pedido sendo enviado ")
    return "pedido em preparo"
})

