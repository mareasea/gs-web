function validar(event) {
    event.preventDefault();  // Previne o formulário de ser enviado

    // Declarando as variáveis
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if (usuario === "Admin" && senha === "12345") {
        localStorage.setItem("logado", "true");
        window.location.href = "../html/grafico.html";
    } else {
        alert("Usuário ou senha inválidos");
    }
}
