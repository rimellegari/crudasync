
const listaClientes = () => {
    //fetch é um método global e por padrão ela já faz um get e devolve uma promisse
    return fetch(`http://localhost:3000/profile`)
    .then(resposta => {
        return resposta.json()
    })

}

const criaCliente = (nome, email) => {
    //acessar api
    return fetch(`http://localhost:3000/profile`, {
      //declarando ação desejada  
        method:'POST',
        //definido formato da informação
        headers: {
            'Content-Type': 'application/json'
        },
        //declarando o que será enviando e transformando em string
        body: JSON.stringify({
            nome: nome,
            email: email
        })
        
        })
        //enviar info do body
        .then( resposta=>{
            return resposta.body
    })

    
}

const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`,{
        method:'DELETE',
    }
    )
}

//se mais funcinonalidades/formas de interagir com a API forem criadas 
//fica mais organizado se criar um objeto que contenha as funcionalidades

export const clienteService = {
    listaClientes,
    criaCliente,
    removeCliente,
}
