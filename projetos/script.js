const container = document.getElementById("container");

async function carregarDados(){
  const data = await fetch("./db/data.json");
  const response = await data.response;

}

async function listarAlunos() {
  let alunos = await carregarDados();
  alunos.map(aluno => {
    const div = document.createElement('div');
    div.className = "card";
    const nome = document.createElement('h1');
    nome.textContent = aluno.nome;
    nome.className = 'titulo'
    div.appendChild(nome);
    const foto = document.createElement('img');
    foto.setAttribute('src', aluno.foto);
    div.appendChild(foto);
    const idade = document.createElement('p');
    idade.innerHTML = `<span class="bolder">Idade:</span> ${aluno.idade}`;
    div.appendChild(idade);
    const email = document.createElement('p');
    email.innerHTML = `<span class="bolder">Email:</span> ${aluno.email}`;
    div.appendChild(email);
    const cidade = document.createElement('p');
    cidade.innerHTML = `<span class="bolder">Cidade:</span> ${aluno.cidade}`;
    div.appendChild(cidade);
    container.appendChild(div);
  });
}

window.onload(listarAlunos());


