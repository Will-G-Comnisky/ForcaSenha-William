
var password = document.getElementById('idPassword');
var points = 0;
var passLength = password.length;
var togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener("click", function () {
    // Usando o type para definir o input como password ou text
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
    // Utilizando o clique/toggle do i colocado
    this.classList.toggle("bi-eye");
});

// prevent form submit
const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
});


password.addEventListener('keyup', () => {
    let currentPassword = password.value;
    let currentPassLenght = currentPassword.length;

    if (currentPassword === "") {
        points = 0;
    }   else if (/[A-Z]/.test(currentPassword)) {
            points += 1;
        } else if (/[a-z]/.test(currentPassword)) {
            points += 1;
        } else if (/[0-9]/.test(currentPassword)) {
            points += 1;
        } else if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(currentPassword)) {
            points += 2;
        } else if (currentPassLenght > 1) {
            points += 1;
        } else if (currentPassLenght > 6) {
            points += 1;
        } else if (currentPassLenght >= 10) {
            points += 1;
        } else if (currentPassLenght >= 12) {
            points += 1;
        } else if (currentPassLenght >= 14) {
            points += 1;
        }

    if (points > 9) {
        document.getElementById('idOut').innerText = 'O louco meu, senha ta boa bixo!';
    } else if (points > 5 && points <= 9) {
        document.getElementById('idOut').innerText = 'É...ta mais ou menos, dá pra melhorar';
    } else if (points <= 5) {
        document.getElementById('idOut').innerText = 'Que isso? Tá fraco hein';
    } else {
        document.getElementById('idOut').innerText = 'Insira uma senha de forma válida';
    }
})

