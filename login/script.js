let botaoLogin = document.getElementById("botao_login");

botaoLogin.addEventListener("click", () => {
  let emailLogin = document.getElementById("email_login").value;
  let senhaLogin = document.getElementById("senha_login").value;
  botaoLogin.setAttribute("disabled", "");
  
  

  if (!emailLogin || !senhaLogin) {
    alert("por favor, preencha os campos.");
  } else {
    login(emailLogin, senhaLogin);
  }
});

async function login(emailLogin, senhaLogin) {
  try {
    let response = await fetch(
      "https://projeto-backend-five.vercel.app/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: emailLogin,
          password: senhaLogin,
        }),
      }
    );

    const result = await response.json();

    if (response.ok) {
      alert("Login bem sucedido!");
      window.location.href = "../boas_vindas/index.html";
    } else {
      alert(`Erro: ${result.error}, fetch deu certo`);
      botaoLogin.setAttribute("disabled", "false");
    }

    console.log(result);
  } catch (error) {
    alert("erro do fetch");
    console.error("Erro ao realizar login:", error);
    botaoLogin.setAttribute("disabled", "false");
  }
}
