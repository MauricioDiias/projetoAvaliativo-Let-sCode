const tituloDaSecao = document.getElementById('tituloDaSecao')  
    
window.onload = async () => {
  const usuario = JSON.parse(localStorage.getItem('logado'));
  console.log(usuario);

  let titulo = document.getElementById('titulo')
  let imagem = document.createElement('img')
  let descricao = document.createElement('p')
  
  tituloDaSecao.innerHTML += ` ${usuario.nome}!`;
  descricao.innerHTML = `Cidade:  ${usuario.cidade}<br> Idade:  ${usuario.idade} <br>Email: ${usuario.email}`;

  imagem.setAttribute('src', usuario.foto)

  titulo.appendChild(tituloDaSecao);
  titulo.appendChild(imagem);
  titulo.appendChild(descricao);

  const botaoSair = document.getElementById('botao-sair');

  
  botaoSair.addEventListener('click', () => {
    // Redirect to the login page on button click
    window.location.href = '../login/index.html';
  });
};

async function carregarDados(){
  const apiUrl = "https://projeto-backend-five.vercel.app";

  try {
    const response = await fetch(`${apiUrl}/users`, {
      method: 'GET',
    });

    const result = await response.json();
    return result;
  
  } catch (error) {
    console.error('Erro ao registrar:', error);
  }
}