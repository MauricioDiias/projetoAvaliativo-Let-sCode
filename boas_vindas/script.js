async function carregarDados(){
  const apiUrl = "https://projeto-backend-five.vercel.app"

  try {
    const response = await fetch(`${apiUrl}/users`, {
      method: 'GET',
    });

    const result = await response.json();
    return result

  } catch (error) {
    console.error('Erro ao registrar:', error);
  }
  // let response = await fetch('https://raw.githubusercontent.com/GilsonJunio/Alunos-Do-Lets-Code-2024/main/data.json')
  // let data = await response.json()
  // let dados = data.alunos

  // localStorage.setItem('usuarios',JSON.stringify(dados))
}

carregarDados()
let tituloDaSecao = document.getElementById('tituloDaSecao')
if(tituloDaSecao){
    
    let usuario = JSON.parse(localStorage.getItem('usuarioLogado')) || [];
    let titulo = document.getElementById('titulo')
    let imagem = document.createElement('img')
    let descricao = document.createElement('p')
    descricao.innerHTML = `Cidade: ${usuario.cidade}<br> Idade:${usuario.idade} <br>Email:${usuario.email}`

    imagem.setAttribute('src', usuario.foto)

    tituloDaSecao.textContent += usuario.usuario + '!'
    titulo.appendChild(tituloDaSecao)
    titulo.appendChild(imagem)
    titulo.appendChild(descricao)
}