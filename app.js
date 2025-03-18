// Inicializa um array para armazenar os amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo) {
        amigos.push(nomeAmigo);
        atualizarListaAmigos();
        inputAmigo.value = ''; // Limpa o campo de entrada
    } else {
        alert('Por favor, digite um nome válido.');
    }
}

// Função para atualizar a lista de amigos exibida
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista atual

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione amigos antes de sortear!');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    mostrarResultado(amigoSorteado);
}

// Função para exibir o resultado do sorteio
function mostrarResultado(amigoSorteado) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa o resultado anterior

    const li = document.createElement('li');
    li.textContent = `Amigo secreto sorteado: ${amigoSorteado}`;
    resultado.appendChild(li);
}