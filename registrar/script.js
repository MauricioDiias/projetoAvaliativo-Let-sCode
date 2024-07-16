let botaoRegistro = document.getElementById("botao-registro");

botaoRegistro.addEventListener("click", () => {
  let usuario = document.getElementById("usuario").value;
  let senha = document.getElementById("senha").value;
  let email = document.getElementById("email").value;
  let idade = document.getElementById("idade").value;
  let foto = document.getElementById("foto").value;
  let cidade = document.getElementById("cidade").value;
  botaoRegistro.setAttribute("disabled", "");
  
  

  if (!senha || !usuario || !email || !foto || !cidade || !idade ) {
    alert("por favor, preencha os campos.");
  } else {
    register( senha, idade, email, foto, usuario, cidade);
  }
});

async function register(senha, idade, email, foto, usuario, cidade) {
  try {
    let response = await fetch(
      "https://projeto-backend-five.vercel.app/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: senha,
          nome: usuario,
          idade: idade,
          cidade: cidade,
          foto: foto
        }),
      }
    );

    const result = await response.json();

    if (response.ok) {
      alert("Registro bem sucedido!");
      window.location.href = "../login/index.html";
    } else {
      alert(`Erro: ${result.error}, fetch deu certo`);
      botaoRegistro.setAttribute("disabled", "false");
    }

    console.log(result);
  } catch (error) {
    alert("erro do fetch");
    console.error("Erro ao realizar login:", error);
    botaoRegistro.setAttribute("disabled", "false");
  }
}