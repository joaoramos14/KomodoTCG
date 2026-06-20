var campoBusca = document.querySelector("#busca");
var filtroTipo = document.querySelector("#filtro-tipo");
var filtroRaridade = document.querySelector("#filtro-raridade");
var cartas = document.querySelectorAll(".carta");

campoBusca.addEventListener("keyup", function(event){
    aplicaFiltros();
});

filtroTipo.addEventListener("change", function(event){
    aplicaFiltros();
});

filtroRaridade.addEventListener("change", function(event){
    aplicaFiltros();
});

function aplicaFiltros() {
    var termoBusca = campoBusca.value.toLowerCase();
    var tipoEscolhido = filtroTipo.value;
    var raridadeEscolhida = filtroRaridade.value;

    for (var i = 0; i < cartas.length; i++) {
        var carta = cartas[i];
        var tituloCarta = carta.querySelector("h3");
        var nomeCarta = tituloCarta.textContent.toLowerCase();

        var passouBusca = nomeCarta.indexOf(termoBusca) != -1;
        var passouTipo = tipoEscolhido == "todos" || carta.classList.contains(tipoEscolhido);
        var passouRaridade = raridadeEscolhida == "todas" || carta.classList.contains(raridadeEscolhida);

        if (passouBusca && passouTipo && passouRaridade) {
            carta.classList.remove("escondida");
        } else {
            carta.classList.add("escondida");
        }
    }
}