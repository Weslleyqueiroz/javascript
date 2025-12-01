//Exercício 8: Crie uma função login(usuario, senha) que retorna uma Promise. Se usuario ===
//'admin' e senha === '1234' → resolve 'Login bem-sucedido'. Caso contrário → reject 'Credenciais
//inválidas'.

const login = (user, senha) =>{
    return new Promise ((resolve, reject)=>{
        const error = false
        setTimeout(()=>{
            if(user === 'admin' && senha === '1234'){
                 resolve('logado')
            }else{
                reject('incorreto: ')
            }
        },1000)
    })
}

login('admin', '1234')
.then(resolvido=>{
    console.log(resolvido, "Login bem-sucedido!")
})
.catch(errado=>{
    console.log(errado, "Credenciais inválidas!")

})