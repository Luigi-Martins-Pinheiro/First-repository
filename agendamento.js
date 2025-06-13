// agendamento.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-agendamento");

  form.addEventListener("submit", function (event) {
    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const email = document.getElementById("email").value.trim();
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;
    const tipoTranca = document.getElementById("tipo_tranca").value;

    let mensagemErro = "";

    // Validações básicas
    if (nome.length < 10) {
      mensagemErro += "\n- O nome deve ter ao menos 10 letras.";
    }

    if (!telefone.match(/^\(?(\d{2})\)?\s?9?\d{4}-?\d{4}$/)) {
      mensagemErro += "\n- Informe um telefone válido com DDD.";
    }

    if (!email.includes("@") || email.length < 5) {
      mensagemErro += "\n- Informe um e-mail válido.";
    }

    if (!data) {
      mensagemErro += "\n- Escolha uma data para o agendamento.";
    }

    if (!hora) {
      mensagemErro += "\n- Escolha um horário para o agendamento.";
    }

    if (!tipoTranca) {
      mensagemErro += "\n- Selecione o tipo de trança desejado.";
    }

    if (mensagemErro) {
      alert("Por favor, corrija os seguintes erros:" + mensagemErro);
      event.preventDefault();
    }
  });
});