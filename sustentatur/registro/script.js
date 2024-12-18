Parse.initialize("vxAPxwSOULc4sIn6SdPj9bOxz8KN4mUri7xpXDRk", "Z9ENMMZzAs5tNtmMGqLCcUnG50iqJKqrzS8HvueM");
Parse.serverURL = "https://parseapi.back4app.com/";

async function cadastrar(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value.trim();
    console.log(nome);
    console.log(email);
    console.log(senha);

    if (!nome || !email || !senha) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    try {

        const user = new Parse.User();
        user.set("username", email); 
        user.set("password", senha);
        user.set("email", email);   
        user.set("nome", nome);     

        await user.signUp();
        alert("Usuário cadastrado com sucesso!");

        window.location.href="index.html";

        document.getElementById("formCadastro").reset();

    } catch (error) {

        console.error("Erro ao cadastrar usuário:", error);
        alert(`Erro ao cadastrar: ${error.message}`);
    }
}


async function login(event) {
    event.preventDefault();

    const email = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (!email || !senha) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    try {
        const user = await Parse.User.logIn(email, senha);
        console.log("sucesso:", user);

        window.location.href = "sustentatur/home/index.html";
    } catch (error) {
        console.error("Erro ao realizar login:", error);
        alert("Erro ao realizar login: " + error.message);
    }
}


async function fetchUser() {
    try {
   
      const User = Parse.Object.extend("User");
      const query = new Parse.Query(User);
  

      const user = await query.first();
  
      if (user) {
        const userName = user.get("username"); x
        document.getElementById("userName").innerText = userName;
      } else {
        document.getElementById("userName").innerText = "Usuário não encontrado.";
      }
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
      document.getElementById("userName").innerText = "Erro ao carregar usuário.";
    }
  }
  
  // Chamar a função ao carregar a página
  fetchUser();

document.querySelector("form").addEventListener("submit", login);

let btn = document.querySelector('#verSenha');
let btnConfirme = document.querySelector('#verConfirmeSenha');

let inputNome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome');
let validInputNome = false

let inputUsuario = document.querySelector('#usuario');
let labelUsuario = document.querySelector('#labelUsuario');
let validInputUsuario = false

let inputSenha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validInputSenha = false

let inputConfirmeSenha = document.querySelector('#confirmeSenha');
let labelConfirmeSenha = document.querySelector('#labelConfirmeSenha');
let validInputConfirmeSenha = false



inputNome.addEventListener('keyup', () => {
  if (inputNome.value.length <= 2) {
    labelNome.setAttribute('style', 'color: red');
    nome.setAttribute('style', 'border-color: red');
    validInputNome = false;
  } else {
    labelNome.setAttribute('style', 'color: green');
    nome.setAttribute('style', 'border-color: green');
    validInputNome = true;
  }
});

inputUsuario.addEventListener('keyup', () => {
  if (inputUsuario.value.length <= 10) {
    labelUsuario.setAttribute('style', 'color: red');
    usuario.setAttribute('style', 'border-color: red');
    labelUsuario.innerHTML = 'Insira seu E-mail corretamente'
    validInputUsuario = false;
  } else {
    labelUsuario.setAttribute('style', 'color: green');
    usuario.setAttribute('style', 'border-color: green');
    labelUsuario.innerHTML = 'E-mail';
    validInputUsuario = true;
  }
});

inputSenha.addEventListener('keyup', () => {
  if (inputSenha.value.length <= 7) {
    labelSenha.setAttribute('style', 'color: red');
    senha.setAttribute('style', 'border-color: red');
    labelSenha.innerHTML = 'Insira no mínimo 8 caracteres'
    validInputSenha = false;
  } else {
    labelSenha.setAttribute('style', 'color: green');
    senha.setAttribute('style', 'border-color: green');
    labelSenha.innerHTML = 'Senha';
    validInputSenha = true;
  }
});

inputConfirmeSenha.addEventListener('keyup', () => {
  if (inputSenha.value !== inputConfirmeSenha.value) {
    labelConfirmeSenha.setAttribute('style', 'color: red');
    inputConfirmeSenha.setAttribute('style', 'border-color: red');
    labelConfirmeSenha.innerHTML = 'As senhas não coincidem';
    validInputConfirmeSenha = false;
  } else {
    labelConfirmeSenha.setAttribute('style', 'color: green');
    inputConfirmeSenha.setAttribute('style', 'border-color: green');
    labelConfirmeSenha.innerHTML = 'As senhas coincidem';
    validInputConfirmeSenha = true;
  }
});


document.addEventListener('DOMContentLoaded', () => {
  let btn = document.querySelector('#verSenha');
  console.log(btn);
  btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha');

    if (inputSenha.getAttribute('type') === 'password') {
      inputSenha.setAttribute('type', 'text');
    } else {
      inputSenha.setAttribute('type', 'password');
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  let btnConfirme = document.querySelector('#verConfirmeSenha');

  btnConfirme.addEventListener('click', () => {
    let inputConfirmeSenha = document.querySelector('#confirmeSenha');

    if (inputConfirmeSenha.getAttribute('type') === 'password') {
      inputConfirmeSenha.setAttribute('type', 'text');
    } else {
      inputConfirmeSenha.setAttribute('type', 'password');
    }
  });
});



