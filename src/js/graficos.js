document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
    let logado = localStorage.getItem("logado");
    console.log("Valor de 'logado' no localStorage:", logado);

    if (!logado || logado === "false") {
        console.log("Usuário não está logado, redirecionando para a página de login");
        alert("É necessário fazer login para acessar os gráficos");
        window.location.href = "../html/login.html";
    } else {
        alert("Protótipos dos gráficos do projeto");
    }
});

if (!logado || logado === "false") {
    console.log("Usuário não está logado, redirecionando para a página de login");
    alert("É necessário fazer login para acessar os gráficos");
    window.location.href = "./html/login";  
}
