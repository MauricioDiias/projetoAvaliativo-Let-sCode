const container = document.getElementById("container");

const getAlunos = () => {
  const usuarios = JSON.parse(localStorage.getItem('usuarios'));
  return usuarios;
}

function listarAlunos() {
  let alunos = getAlunos();
  alunos.map(aluno => {
    const div = document.createElement('div');
    const nome = document.createElement('h1');
    nome.textContent = aluno.usuario;
    div.appendChild(nome);
    const foto = document.createElement('img');
    foto.setAttribute('src', aluno.foto);
    div.appendChild(foto);
    const idade = document.createElement('p');
    idade.innerHTML = `Idade: ${aluno.idade}`;
    div.appendChild(idade);
    const email = document.createElement('p');
    email.innerHTML = `Email: ${aluno.email}`;
    div.appendChild(email);
    const cidade = document.createElement('p');
    cidade.innerHTML = `Cidade: ${aluno.cidade}`;
    div.appendChild(cidade);
    container.appendChild(div);
  });
}

window.onload(listarAlunos());

