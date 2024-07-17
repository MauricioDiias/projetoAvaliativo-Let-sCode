const tituloDaSecao = document.getElementById('tituloDaSecao')  
    
window.onload = async () => {
  const usuario = JSON.parse(localStorage.getItem('logado'));

  let titulo = document.getElementById('titulo')
  let imagem = document.createElement('img')
  let descricao = document.createElement('div')
  
  tituloDaSecao.innerHTML += `${usuario.nome}!`;
  descricao.innerHTML = `<p><span class="bolder">Cidade:</span> ${usuario.cidade}</p><p><span class="bolder">Idade:</span> ${usuario.idade}</p><p><span class="bolder">Email:</span> ${usuario.email}</p>`;
  descricao.className = 'descricao';

  imagem.setAttribute('src', usuario.foto);

  titulo.appendChild(tituloDaSecao);
  titulo.appendChild(imagem);
  titulo.appendChild(descricao);
};

const sair = document.getElementById("botao-sair");
sair.addEventListener('click', () => window.location.href = "../login/index.html")