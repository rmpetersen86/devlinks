function toggleMode() {
  const html = document.documentElement;

  html.classList.toggle("light");

  const img = document.querySelector("#profile img");
  const btn = document.querySelector(".toggle-btn");
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.jpeg");
    img.setAttribute(
      "alt",
      "Foto do pefil do usuário usando óculos escuros com fundo colorido"
    );
    btn.classList.toggle("active");
  } else {
    img.setAttribute("src", "./assets/avatar-dark.jpeg");
    img.setAttribute("alt", "Foto do pefil do usuário com fundo branco");
  }
}
