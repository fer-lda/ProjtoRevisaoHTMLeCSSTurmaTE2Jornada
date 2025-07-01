window.onload = function () {
    let nomeUsuario = "";
    let elemento = document.querySelector("#nome-usuário");
    let linguagens = ["Java -", " Python -", " C++"];
    console.log (linguagens [0]);
    console.log (linguagens [1]);
    console.log (linguagens [2]);
    const lista = document.querySelector ("#lista");
    lista.textContent = linguagens [0] + linguagens[1] + linguagens[2];

    let alunos = ["Ariel -", " Julia -", " Aline -", " Carlos -", " Beatriz"];
    console.log (alunos [0]);
    console.log (alunos [1]);
    console.log (alunos [2]);
    console.log (alunos [3]);
    console.log (alunos [4]);
    const lista2 = document.querySelector("#lista2");
    lista2.textContent = alunos [0] + alunos [1] + alunos[2] + alunos[3] + alunos[4];
    



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