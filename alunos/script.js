const container = document.getElementById("container");

async function carregarDados(){
  let response = await fetch('https://raw.githubusercontent.com/GilsonJunio/Alunos-Do-Lets-Code-2024/main/data.json')
  let data = await response.json()
  let dados = data.alunos

  console.log(dados)

  localStorage.setItem('usuarios',JSON.stringify(dados))
  console.log(data)


}

const getAlunos = () => {
  const usuarios = JSON.parse(localStorage.getItem('usuarios'));
  return usuarios;
}

function listarAlunos() {
  let alunos = getAlunos();
  if(alunos == null){
    carregarDados();
    

  }
  alunos.map(aluno => {
    const div = document.createElement('div');
    const nome = document.createElement('h1');
    nome.textContent = aluno.usuario;
    div.appendChild(nome);
    div.setAttribute('class', "nome");
    const foto = document.createElement('img');
    foto.setAttribute('src', aluno.foto);
    div.appendChild(foto);
    const idade = document.createElement('p');
    idade.innerHTML = `Idade: ${aluno.idade}`;
    div.appendChild(idade);
    idade.setAttribute('class', "idade");
    const email = document.createElement('p');
    email.innerHTML = `Email: ${aluno.email}`;
    div.appendChild(email);
    email.setAttribute('class', "email");
    const cidade = document.createElement('p');
    cidade.innerHTML = `Cidade: ${aluno.cidade}`;
    div.appendChild(cidade);
    cidade.setAttribute('class', "cidade");
    container.appendChild(div);
  });
}

window.onload(listarAlunos());