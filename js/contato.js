var formulario = document.querySelector("#form-contato");

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    var email = formulario.email.value;
    var tipoSolicitacao = formulario.tipoSolicitacao.value;
    var assunto = formulario.assunto.value;
    var conteudo = formulario.conteudo.value;

    var emailEhValido = validaEmail(email);
    var tipoEhValido = validaTipoSolicitacao(tipoSolicitacao);
    var assuntoEhValido = validaAssunto(assunto);
    var conteudoEhValido = validaConteudo(conteudo);

    limpaErros();

    var erroEmail = document.querySelector("#erro-email");
    var erroTipo = document.querySelector("#erro-tipo-solicitacao");
    var erroAssunto = document.querySelector("#erro-assunto");
    var erroConteudo = document.querySelector("#erro-conteudo");

    if (!emailEhValido) {
        erroEmail.textContent = "Digite um e-mail válido";
    }

    if (!tipoEhValido) {
        erroTipo.textContent = "Escolha o tipo de solicitação";
    }

    if (!assuntoEhValido) {
        erroAssunto.textContent = "O assunto não pode ficar em branco";
    }

    if (!conteudoEhValido) {
        erroConteudo.textContent = "A mensagem precisa ter pelo menos 10 caracteres";
    }

    if (emailEhValido && tipoEhValido && assuntoEhValido && conteudoEhValido) {
        mostraSucesso();
        formulario.reset();
    }
});

function validaEmail(email) {
    if (email.length > 0 && email.indexOf("@") != -1) {
        return true;
    } else {
        return false;
    }
}

function validaTipoSolicitacao(tipo) {
    if (tipo.length > 0) {
        return true;
    } else {
        return false;
    }
}

function validaAssunto(assunto) {
    if (assunto.length > 0) {
        return true;
    } else {
        return false;
    }
}

function validaConteudo(conteudo) {
    if (conteudo.length >= 10) {
        return true;
    } else {
        return false;
    }
}

function limpaErros() {
    var mensagensErro = document.querySelectorAll(".mensagem-erro");
    for (var i = 0; i < mensagensErro.length; i++) {
        mensagensErro[i].textContent = "";
    }
}

function mostraSucesso() {
    var sucesso = document.querySelector("#mensagem-sucesso");
    sucesso.classList.remove("escondida");
}