import {
    salvarCadastro,
    recuperarCadastro
} from "./storage.js";

const app = document.querySelector("#app");

export function renderizarPagina(pagina) {

    if (pagina === "inicio") {

        app.innerHTML = `
            <section>
                <h2>Quem somos</h2>

                <img 
                    src="../imagens/ONG.png"
                    alt="Pessoas participando de uma ação social da ONG Esperança"
                >

                <p>
                    A ONG Esperança atua para promover ações sociais
                    e ajudar pessoas em situação de vulnerabilidade.
                </p>
            </section>

            <section>
                <h2>Nosso objetivo</h2>

                <p>
                    Nosso objetivo é desenvolver projetos sociais,
                    incentivar o voluntariado e receber doações.
                </p>
            </section>

            <section>
                <h2>Como ajudar</h2>

                <p>
                    Você pode contribuir realizando uma doação
                    ou participando das nossas ações como voluntário.
                </p>
            </section>
        `;

    } else if (pagina === "projetos") {

        app.innerHTML = `
            <section>
                <h2>Projetos</h2>

                <p>
                    Conheça os projetos desenvolvidos pela ONG Esperança.
                </p>

                <p>
                    Nossos projetos buscam promover ações sociais
                    e ajudar pessoas em situação de vulnerabilidade.
                </p>
            </section>
        `;

    } else if (pagina === "cadastro") {

        app.innerHTML = `
            <section>
                <h2>Cadastro</h2>

                <p>
                    Preencha seus dados para participar
                    das ações da ONG Esperança.
                </p>

                <form id="formCadastro">

                    <label for="nome">Nome:</label>
                    <input 
                        type="text" 
                        id="nome" 
                        name="nome" 
                        required
                    >

                    <label for="email">E-mail:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required
                    >

                    <button type="submit">
                        Cadastrar
                    </button>

                </form>

                <div id="dadosCadastro"></div>
            </section>
        `;

        const cadastroSalvo = recuperarCadastro();

        if (cadastroSalvo) {

            document.querySelector("#nome").value = cadastroSalvo.nome;
            document.querySelector("#email").value = cadastroSalvo.email;

            document.querySelector("#dadosCadastro").innerHTML = `
                <p>Cadastro salvo anteriormente:</p>
                <p>Nome: ${cadastroSalvo.nome}</p>
                <p>E-mail: ${cadastroSalvo.email}</p>
            `;
        }

        const formCadastro = document.querySelector("#formCadastro");

        formCadastro.addEventListener("submit", function (evento) {

            evento.preventDefault();

            const nome = document.querySelector("#nome").value;
            const email = document.querySelector("#email").value;

            salvarCadastro(nome, email);

            document.querySelector("#dadosCadastro").innerHTML = `
                <div class="alert alert-sucesso">
                    Cadastro salvo com sucesso!
                </div>

                <p>Nome: ${nome}</p>
                <p>E-mail: ${email}</p>
            `;
        });
    }
}

export function iniciarNavegacao() {

    const links = document.querySelectorAll("[data-page]");

    links.forEach(function (link) {

        link.addEventListener("click", function (evento) {

            evento.preventDefault();

            const pagina = link.getAttribute("data-page");

            renderizarPagina(pagina);
        });
    });

    renderizarPagina("inicio");
}