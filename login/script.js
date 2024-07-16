
async function login(){
    let response = await fetch('https://projeto-backend-five.vercel.app/login', {method:"POST", headers:"email, password"})

    let data = await response.json()
    let dados = data.alunos

    console.log(dados)

    localStorage.setItem('usuarios',JSON.stringify(dados))
    console.log(data)


}




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

