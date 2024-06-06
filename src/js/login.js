function validar(event) {
    event.preventDefault();  

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if (usuario === "Admin" && senha === "12345") {
        console.log("Credenciais válidas, definindo 'logado' como true");
        localStorage.setItem("logado", "true");
        window.location.href = "../html/grafico.html";
    } else {
        console.log("Credenciais inválidas");
        alert("Usuário ou senha inválidos");
    }
}