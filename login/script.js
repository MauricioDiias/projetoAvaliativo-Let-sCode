// Nome, email, idade, cidade, foto e senha
const botaoLogin = document.getElementById("botao_login");
botaoLogin.addEventListener('click', () => {
  botaoLogin.disabled = true;
  const email = document.getElementById("email_login").value;
  const senha = document.getElementById("senha_login").value;

  carregarDados(email, senha);
})

async function carregarDados(email, password){
  const apiUrl = "https://projeto-backend-five.vercel.app"
  try {
      const response = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password }),
      });

      const result = await response.json();
      
      if (response.ok) {
        localStorage.setItem("logado", JSON.stringify(result.user));
        console.log(result);
        window.location.href = "../boas_vindas/index.html";
      } else {
        alert(`Erro: ${result.error}`);
        botaoLogin.disabled = false;
      }
  } catch (error) {
    console.error('Erro ao realizar login:', error);
  }
}