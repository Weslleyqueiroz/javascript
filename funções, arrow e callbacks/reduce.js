const numeros = [1,2,3,4,5,6,7,8]

const somandoNumeros = numeros.reduce((acumulador,index)=>{
    return acumulador + index
},0)
console.log(somandoNumeros)