document.write('<form id="registrationForm">');
document.write('<input type="text" id="username" placeholder="Имя пользователя" required>');
document.write('<input type="password" id="password" placeholder="Пароль" required>');
document.write('<input type="password" id="confirmPassword" placeholder="Подтвердите пароль" required>');
document.write('<button type="submit">Зарегистрироваться</button>');
document.write('</form>');


document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (!username || !password || !confirmPassword) {
        alert("Заполните все поля 😡");
        return;
    }

    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    if (registeredUsers.includes(username)) {
        alert("Такое имя уже существует 😨");
    } else {
        registeredUsers.push(username);
        localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
        alert("Зарегистрирован 😁");
    }
});



