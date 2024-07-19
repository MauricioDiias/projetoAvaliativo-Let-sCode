// Nome, email, idade, cidade, foto e senha
/*async function carregarDados(){
    const apiUrl = "https://projeto-backend-five.vercel.app"

    try {
        const response = await fetch(`${apiUrl}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: "gilsonjunio@exemplo.com", password:"Senha@123" }),
        });
        console.log(response)

        const result = await response.json();
        console.log(result)

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
     //console.log(response)
     //let data = await response.json()
     //let dados = data.alunos

    // localStorage.setItem('usuarios',JSON.stringify(dados))
}
*/
let container = document.getElementById('container')


let botaoLogin = document.getElementById("botao_login");
if(botaoLogin){ 
    botaoLogin.addEventListener('click', () => {
            async function carregarDados(emailLogin,senhaLogin){
        const apiUrl = "https://projeto-backend-five.vercel.app"

        try {
            const response = await fetch(`${apiUrl}/login`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email: emailLogin, password:senhaLogin }),
            });
            console.log(response)

            const result = await response.json();
            console.log(result.user)

            localStorage.setItem('usuarioLogado',JSON.stringify(result.user))
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
         //console.log(response)
         //let data = await response.json()
         //let dados = data.alunos

        // localStorage.setItem('usuarios',JSON.stringify(dados))
        }
        let emailLogin = document.getElementById("email_login").value
        let senhaLogin = document.getElementById("senha_login").value

        carregarDados(emailLogin,senhaLogin)

        let usuario_logado = JSON.parse(localStorage.getItem("usuarioLogado")) || [];
        let usuario_logado_email = usuario_logado.email
        console.log(usuario_logado)
        console.log(usuario_logado_email)

        console.log( emailLogin, senhaLogin, usuario_logado, usuario_logado_email)
        if(usuario_logado_email === emailLogin){
            window.location.href = "../boas_vindas/index.html"
        }
    })
}
