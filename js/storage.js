export function salvarCadastro(nome, email) {
    const cadastro = {
        nome: nome,
        email: email
    };

    localStorage.setItem("cadastroONG", JSON.stringify(cadastro));
}

export function recuperarCadastro() {
    const dadosSalvos = localStorage.getItem("cadastroONG");

    if (dadosSalvos) {
        return JSON.parse(dadosSalvos);
    }

    return null;
}