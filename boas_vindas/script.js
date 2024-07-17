const tituloDaSecao = document.getElementById('tituloDaSecao')  
    
window.onload = async () => {
  const usuario = localStorage.getItem('logado');

  let titulo = document.getElementById('titulo')
  let imagem = document.createElement('img')
  let descricao = document.createElement('p')
  
  
  
  descricao.innerHTML = `Cidade: ${usuario.cidade}<br> Idade:${usuario.idade} <br>Email:${usuario.email}`

  imagem.setAttribute('src', logado.foto)

  tituloDaSecao.textContent += logado.usuario + '!'
  titulo.appendChild(tituloDaSecao)
  titulo.appendChild(imagem)
  titulo.appendChild(descricao);
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