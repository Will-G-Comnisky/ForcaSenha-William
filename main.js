
var password = document.getElementById('idPassword').value;
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


password.addEventListener('keyup', (event) => {

    if (/[A-Z]/.test(password)) {
        points += 1;
    } else if (/[a-z]/.test(password)) {
        points += 1;
    } else if (/[0-9]/.test(password)) {
        points += 1;
    } else if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
        points += 2;
    } else if (passLength > 1) {
        points += 1;
    } else if (passLength > 6) {
        points += 1;
    } else if (passLength >= 10) {
        points += 1;
    } else if (passLength >= 12) {
        points += 1;
    } else if (passLength >= 14) {
        points += 1;
    }
    return points;

    switch(points) {
        case points > 9:
            document.getElementById('idOut').innerText = 'O louco meu, senha ta boa bixo!';
            break;
        case 9 > points > 5:
            document.getElementById('idOut').innerText = 'É...ta mais ou menos, dá pra melhorar';
            break;
        case points <= 5:
            document.getElementById('idOut').innerText = '';
            break;
    }

})

