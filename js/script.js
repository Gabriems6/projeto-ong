import { iniciarNavegacao } from "./spa.js";

document.addEventListener("DOMContentLoaded", function () {

    iniciarNavegacao();

    const modal = document.querySelector(".modal");
    const botaoFechar = document.querySelector(".modal-close");

    if (modal && botaoFechar) {
        botaoFechar.addEventListener("click", function () {
            modal.style.display = "none";
        });
    }

});