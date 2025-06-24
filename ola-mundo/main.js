window.onload = function () {
    let nomeUsuario = "";
    let elemento = document.querySelector("#nome-usuário");

// Loop até o usuário digitar algo ou cancelar
while (nomeUsuario.trim() === "") {
    nomeUsuario = prompt("Qual o seu nome?");
    
    // Se o usuário cancelar o prompt
    if (nomeUsuario === null) {
        nomeUsuario = null;
        break;
    }
}

if (nomeUsuario === null) {
    elemento.textContent = 'Seja muito bem-vindo.';
    elemento.classList.add('cinza'); // Exemplo de cor caso o usuário cancele
} else {
    elemento.textContent = nomeUsuario;

    // Definindo uma cor aleatória entre as opções
    let cores = ['azul', 'vermelho', 'verde'];
    let corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    elemento.classList.add(corAleatoria);
}
}