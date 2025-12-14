function signup() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!name || !email || !password) {
    alert("All fields required");
    return;
  }

  const user = {
    name: name,
    email: email,
    password: password
  };

  localStorage.setItem("studentUser", JSON.stringify(user));
  alert("Signup Successful");
  window.location.href = "login.html";
}
