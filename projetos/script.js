const container = document.getElementById("container");

async function carregarDados(){
  const response = await fetch("./db/data.json");
  const data = await response.json();
  return data.projetos;
}

async function listarprojetos() {
  let projetos = await carregarDados();
  projetos.map(projeto => {
    const div = document.createElement('div');
    div.className = "card";
    const nome = document.createElement('h1');
    nome.textContent = projeto.nome;
    nome.className = 'titulo'
    div.appendChild(nome);
    const foto = document.createElement('img');
    foto.setAttribute('src', projeto.foto);
    div.appendChild(foto);
    const descricao = document.createElement('p');
    descricao.innerHTML = projeto.descricao;
    descricao.style = "text-align: justify"
    div.appendChild(descricao);
    const link = document.createElement('p');
    link.innerHTML = `<a href="${projeto.link}">Link para o Github<a>`;
    link.className = "link"
    div.appendChild(link);
    container.appendChild(div);
  });
}

window.onload(listarprojetos());


