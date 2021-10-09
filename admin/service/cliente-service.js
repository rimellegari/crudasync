//declaração de instância de novo objeto
const xhr = new XMLHttpRequest()

//inicializando a comunicação para puxar dados do servidor
xhr.open('GET', 'http://localhost:3000/profile')
//enviar a requisição
xhr.send()
//realizar a requisição ao carregar a página
xhr.onload = function() { //================função anonima ou arrow=================\\
    const data = xhr.response
    console.log(data)
}

