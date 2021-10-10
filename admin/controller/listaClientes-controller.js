import { clienteService } from "../service/cliente-service.js"
//template  para exibir dados

//criando variável para montar a tr
const criaNovalinha = (nome, email,id) =>{
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
    //criando data-attribute
    linhaCliente.dataset.id = id
    return linhaCliente
}
//selecionando local do append
const tabela = document.querySelector('[data-tabela]')

tabela.addEventListener('click', (evento)=>{
   let ehBtnDel = evento.target.className == 'botao-simples botao-simples--excluir'
   //verificando se o local clicado foi o botao
    if(ehBtnDel){
        //procurando o elemento mais próximo da td com o escutador, no caso o escutdor está na td e o proximo é tr
        const linhaCliente = evento.target.closest('[data-id]')
        let id = linhaCliente.dataset.id
        clienteService.removeCliente(id)
        }

})

clienteService.listaClientes()
.then(data => {
        
            //faz um loop para criar uma tr para cada elemento dentro do JSON
            data.forEach(elemento => 
                {tabela.appendChild(criaNovalinha(elemento.nome,elemento.email, elemento.id))

})})