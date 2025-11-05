let mensagensIniciais = [
    "Uma dose rápida de alegria (talvez).",
    "Um presente selvagem apareceu! Capture-o!",
    "Uma dose fútil de alegria (talvez).",
    "Você nunca verá todas as variações desse texto.",
    "Uma dose?!?!?!? Alegria! (talvez).",
    "Um belo site para uma bela dama 🌹🍷",
    "Uma dose inútil de alegria (talvez).",
    "Este é um texto extremamente longo feito com o único propósito de testar o quão longo um texto pode ser sem quebrar o site, e será removido assim que seu propósito for completo (talvez).",
    "Dose.",
    "Uma dose divertida de alegria (talvez).",
    "(talvez)",
    "Algumas coisas não podem ser ditas, apenas sentidas.",
    "WASSHOI! WASSHOI! WASSHOI! WASSHOI!",
    "Não suma, por favor.",
    "Não contém uma bomba dentro (talvez).",
    "Não contém glúten.",
    "24 + 43 = ?",
    "Um gato com AIDS te olha de longe.",
    "Porque meus soldados não recuam nem cedem diante da crueldade desse mundo. MEUS SOLDADOS AVANÇAM! MEUS SOLDADOS GRITAM! MEUS SOLDADOS SE ENFURECEM!"
];

let mensagensDoPresente = [
    {
        titulo: "Não desista.",
        texto: "Isso mesmo, tatakae!"
    }
];

function selecionarMensagemInicial() {
  return mensagensIniciais[Math.floor(Math.random() * mensagensIniciais.length)];
}

let titulo = document.querySelector("h1");
titulo.innerHTML = selecionarMensagemInicial();

