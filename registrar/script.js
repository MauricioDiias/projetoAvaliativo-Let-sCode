async function carregarDados(){
  const apiUrl = "https://projeto-backend-five.vercel.app"

  try {
      const response = await fetch(`${apiUrl}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome: "Gilson Junio", email: "gilsonjunio@exemplo.com", password: "Senha@123", idade: "22", cidade: "Ilha Grande - PI", foto: "https://lh3.googleusercontent.com/a/ACg8ocLTsNq5FggJsEQpzLApIMzRGWRlOSY-D1SClpABYxxLxDeB2YYj=s192-c-mo","created_at":"2024-07-15T21:09:17.267Z"}),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Registrado com sucesso!');
      } else {
        alert(`Erro: ${result.error}`);
      }
    } catch (error) {
      console.error('Erro ao registrar:', error);
    }
   const response = await fetch(`${apiUrl}/register`)
   let data = await response.json()
   let dados = data.alunos

   localStorage.setItem('usuarios',JSON.stringify(dados))
}

carregarDados();

console.log

let botaoRegistrar = document.getElementById("botao-registro");
if (botaoRegistrar) {
    botaoRegistrar.addEventListener("click", () => {
        let usuario = document.getElementById("usuario").value;

        let email = document.getElementById("email").value;

        let idade = document.getElementById("idade").value;

        let cidade = document.getElementById("cidade").value;

        let foto = document.getElementById("foto").value;

        let password = document.getElementById("senha").value;

        function mesmoEmail(email){
            let usuarios_verificar = JSON.parse(localStorage.getItem('usuarios')) || [] 

            let procurarEmailIgual = usuarios_verificar.find((usuarios_verificar) => usuarios_verificar.email === email) || [];                

            if(email === procurarEmailIgual.email){
                alert('ESTE EMAIL JÁ FOI CADASTRADO')            
            }
            return email === procurarEmailIgual.email               
        }
        function camposVazios(){
            const valoresRepassados = [{usuario,email,idade,cidade,foto,password}]

            const dadosRepassados = valoresRepassados

            let procurarCampoVazio = valoresRepassados.find((valoresRepassados) => valoresRepassados.usuario === "")

            if(procurarCampoVazio){
                alert('EXISTEM CAMPOS VAZIOS!')
            }
            else{
            return false    
            }
        }

        if(mesmoEmail(email) === false && camposVazios() === false){
            alert('111111111')
            let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
            usuarios.push({ usuario, email, idade, cidade, foto, password });
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            window.location.href = "../login/index.html"            
            console.log(ProcurarCamposVazios())
        }
    }
)}