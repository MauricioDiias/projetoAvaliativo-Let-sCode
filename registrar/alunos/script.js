async function carregarDados(){
    let response = await fetch('https://raw.githubusercontent.com/GilsonJunio/Alunos-Do-Lets-Code-2024/main/data.json')
    let data = await response.json()
    let dados = data.alunos
    console.log(dados)

    localStorage.setItem('alunos',JSON.stringify(dados))
    console.log(data)
}
carregarDados()



function listarAlunos() {
const usuarios = JSON.parse(localStorage.getItem('alunos'));
  console.log(usuarios)
  usuarios.map(usuarios => {
    const div = document.createElement('div');
    
    const nome = document.createElement('h1');
    nome.textContent = usuarios.usuario;
    div.appendChild(nome);
    
    const foto = document.createElement('img');
    foto.setAttribute('src', usuarios.foto);
    div.appendChild(foto);
    
    const idade = document.createElement('p');
    idade.innerHTML = `Idade: ${usuarios.idade}`;
    div.appendChild(idade);
    
    const email = document.createElement('p');
    email.innerHTML = `Email: ${usuarios.email}`;
    div.appendChild(email);
    
    const cidade = document.createElement('p');
    cidade.innerHTML = `Cidade: ${usuarios.cidade}`;
    div.appendChild(cidade);
    container.appendChild(div);
  });
}
listarAlunos()
window.Onload(listarAlunos())

