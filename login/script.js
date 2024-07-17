// Nome, email, idade, cidade, foto e senha
async function carregarDados(){
    const apiUrl = "https://projeto-backend-five.vercel.app"

    try {
        const response = await fetch(`${apiUrl}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: "gilsonjunio@exemplo.com" }),
        });

        const result = await response.json();

        if (response.ok) {
          alert('Login bem sucedido!');
        } else {
          alert(`Erro: ${result.error}`);
        }

        console.log(result);
      } catch (error) {
        console.error('Erro ao realizar login:', error);
      }
     //let response = await fetch('`${apiUrl}/login`')
     console.log(response)
     let data = await response.json()
     let dados = data.alunos

    // localStorage.setItem('usuarios',JSON.stringify(dados))
}

let container = document.getElementById('container')

carregarDados()


let botaoLogin = document.getElementById("botao_login");
if(botaoLogin){ 
    botaoLogin.addEventListener('click', () => {
        let emailLogin = document.getElementById("email_login").value
        let senhaLogin = document.getElementById("senha_login").value

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        let usuario = usuarios.find(usuario => usuario.email === emailLogin && usuario.senha === senhaLogin)
            localStorage.setItem('usuarioLogado',JSON.stringify(usuario))

        console.log(usuarios, emailLogin, senhaLogin, usuario)
        if(usuario){
            window.location.href = "../boas_vindas/index.html"
        }
    })
}
