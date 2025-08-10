function greetUser() {
  const messageElement = document.getElementById("message");
  messageElement.textContent = "Merhaba Kullanıcı🎉";
}
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}

dark-theme 
  background-color //#endregion
  color //#region ;

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}

function toggleTheme() {
  document.body.classList.toggle("dark-theme");

  // Tema durumu kaydediliyor
  const isDark = document.body.classList.contains("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Sayfa yüklendiğinde tema kontrolü
window.onload = function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
  }
};



