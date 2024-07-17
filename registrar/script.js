const botaoRegistrar = document.getElementById("botao-registro");
botaoRegistrar.addEventListener("click", () => {
    const usuario = document.getElementById("usuario").value;
    const email = document.getElementById("email").value;
    const idade = document.getElementById("idade").value;
    const cidade = document.getElementById("cidade").value;
    const foto = document.getElementById("foto").value;
    const password = document.getElementById("senha").value;

    function camposVazios(){
        const valoresRepassados = [usuario,email,idade,cidade,foto,password];
        let procurarCampoVazio = valoresRepassados.find(valores => valores === "");
        if(procurarCampoVazio === ""){
            alert('EXISTEM CAMPOS VAZIOS!')
        }
        else{
          return false    
        }
    }

    if(camposVazios() === false){
      carregarDados(usuario, email, idade, cidade, foto, password);
    }
})

async function carregarDados(usuario, email, idade, cidade, foto, password){
  const apiUrl = "https://projeto-backend-five.vercel.app"
  try {
      const response = await fetch(`${apiUrl}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome: usuario, email: email, password: password, idade: idade, cidade: cidade, foto: foto }),
      });

      const result = await response.json();

      if (response.ok) {
        window.location.href = "../login/index.html";
      } else {
        alert(`Erro: ${result.error}`);
      }
    } catch (error) {
      console.error('Erro ao registrar:', error);
    }

}