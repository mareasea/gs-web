document.addEventListener("DOMContentLoaded", function() {
    let logado = localStorage.getItem("logado");

    if (!logado) {
        alert("É necessário fazer login para acessar os gráficos");
        window.location.href = "../html/login.html";
    } else {
        alert("Protótipos dos gráficos do projeto");
    }
});
