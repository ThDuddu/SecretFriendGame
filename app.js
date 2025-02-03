let amigosArray = [];

function adicionarAmigo() {
    let valorInserido = document.getElementById('idamigo').value;

    // valida se nome ja não está no array
    if (valorInserido) {
        if (amigosArray.includes(valorInserido)) {
            alert("Essa pessoa já existe");
        } else {
                amigosArray.push(valorInserido);
                listarValores();
        }
        // limpa o campo de preenchimento
        document.getElementById('idamigo').value = '';
    }
    else {
        alert('Por favor insira um nome!');
    }
}
// Função para listar valores no HTML
function listarValores() {
    let lista = document.getElementById('listaAmigos');

    lista.innerHTML = '';

    amigosArray.forEach(function (valor) {
        let li = document.createElement('li');
        li.textContent = valor;
        lista.appendChild(li);
    });
}
// Sorteador de Nomes
function sortearAmigo2() {
    let valorSorteado = amigosArray[Math.floor(Math.random() * amigosArray.length)];
    let h2 = document.getElementsByTagName('h2')[0];
    // Informar no H2 do HTML a pessoa sorteada
    h2.innerText = `A pessoa sorteada é ${valorSorteado}`;
}