//template  para exibir dados

//criando variável para montar a tr
const criaNovalinha = (nome, email) =>{
        const linhaCliente = document.createElement('tr')
        const conteudo =`<td class="td" data-td>${nome}</td>
                <td>${email}</td>
                <td>
                    <ul class="tabela__botoes-controle">
                        <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                        <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                    </ul>
                </td>`
        linhaCliente.innerHTML = conteudo
        return linhaCliente
}
//selecionando local do append
const tabela = document.querySelector('[data-tabela')

const listaClientes = () => {

    //declarando promisse
    const promise = new Promise((resolve, reject)=>{

        const xhr = new XMLHttpRequest()

    //inicializando a comunicação para puxar dados do servidor
        xhr.open('GET', 'http://localhost:3000/profile')

        //realizar a requisição ao carregar a página
        xhr.onload = function() { //================função anonima ou arrow=================\\
                if(xhr.statuus >= 400){
                    reject(JSON.parse(xhr.response))
                }else{
                    resolve(JSON.parse(xhr.response))
                }
        }
        //enviar a requisição
        xhr.send()
    })
    //declaração de instância de novo objeto
    return promise

}

listaClientes()
.then(data => {
        
            //faz um loop para criar uma tr para cada elemento dentro do JSON
            data.forEach(elemento => 
                {tabela.appendChild(criaNovalinha(elemento.nome,elemento.email))

})})