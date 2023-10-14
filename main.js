
/* Coletando as variaveis globais de inicio, como o input da senha, a força da senha
e o elemento i que seria o botão de deixar senha visivel 
*/
var password = document.getElementById('idPassword');
var strength = 0;
var togglePassword = document.getElementById('togglePassword');

// Realizando a função de mudar visibilidade de senha ao clicar no elemento i: 

togglePassword.addEventListener("click", function () {
    // Usando o type para definir o input como password ou text
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
    // Utilizando o clique/toggle do i colocado
    this.classList.toggle("bi-eye");
});

// Realizando função para definir condições para incrementar a força da senha 
function passStrength(currentPassword) {
    let passLenght = currentPassword.length;
    strength = 0;

    if (currentPassword === "") {
        strength = 0;
    } 

    if (passLenght > 1) {
        strength++;
    }
    if (passLenght > 6) {
        strength++;
    }
    if (passLenght >= 10) {
        strength++;
    }
    if (passLenght >= 12) {
        strength++;
    }
    if (passLenght >= 14) {
        strength++;
    }

    if (/[A-Z]/.test(currentPassword)) {
        strength++;
    }
    if (/[a-z]/.test(currentPassword)) {
        strength++;
    }
    if (/[0-9]/.test(currentPassword)) {
        strength++; 
    }
    if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(currentPassword)) {
        strength++; 
    }
    return strength;
}

// Realizando a função que a cada digitação (keyup) será executada, fazendo a verificação e mudando o output
password.addEventListener('keyup', () => {
    let currentPassword = password.value;
    let saida = document.getElementById('idOut');
    let strength = passStrength(currentPassword);
    let div = document.getElementById('idContainerDiv');

    if (strength <= 5 && strength != 0) {
        saida.innerText = 'Que isso? Tá fraco hein?!'; 
        div.classList.remove('shadow-yellow');
        div.classList.remove('shadow-green');  
        div.classList.add('shadow-red');
    } else if (strength > 5 && strength < 9) {
        saida.innerText = 'É...ta mais ou menos, dá pra melhorar...';
        div.classList.remove('shadow-black');
        div.classList.remove('shadow-red');
        div.classList.remove('shadow-green');
        div.classList.add('shadow-yellow');
    } else if (strength >= 9) {
        saida.innerText = 'O louco meu, agora a senha ta boa bixo!';
        div.classList.remove('shadow-black');
        div.classList.remove('shadow-red');
        div.classList.remove('shadow-yellow');
        div.classList.add('shadow-green');
    } else if (strength == 0) {
        saida.innerText = 'Insira uma senha de forma válida';
        div.classList.remove('shadow-red');
        div.classList.remove('shadow-yellow');
        div.classList.remove('shadow-green');
        div.classList.add('shadow-black');
    }

})

