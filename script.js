function validateLogin() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "yourUsername" && pass === "yourPassword") {
    window.location.href = "main.html";
  } else {
    document.getElementById("error-msg").textContent = "Oops, this surprise is not for you";
  }
}

function goToLogin() {
  window.location.href = "index.html";
}

function wrongAnswer() {
  alert("I hate you");
  goToLogin();
}

function rightAnswer(link) {
  window.location.href = link;
}
