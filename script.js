const caixaPrincipal = document.querySelector(."caixa-principal");
const caixaPerguntas = document.querySelector(."caixa-perguntas");
const caixaAlternativa = document.querySelector(."caixa-alternativas");
const caixaResultados = document.querySelector(."caixa-resultados");
const textoResultado = document.querySelector(."texto-resultado");

const perguntas = [
    {
        enunciado: "Pergunta1",
        alternativas: [
            {
                texto:"alternativa A",
                afirmacao:"afirmaca"
            },
            
            {
                texto:"alternativa B",
                afirmacao: "afirmacao"
            }
            
        ]
    },

    {
        enunciado: "Pergunta2",
        alternativas: [
               {
                texto:"alternativa A",
                afirmacao:"afirmaca"
            },
            
            {
                texto:"alternativa B",
                afirmacao: "afirmacao"
            }
        ]
    },

    {
        enunciado: "Pergunta3",
        alternativas: [
               {
                texto:"alternativa A",
                afirmacao:"afirmaca"
            },
            
            {
                texto:"alternativa B",
                afirmacao: "afirmacao"
            }
        ]
    },

    {
        enunciado: "Pergunta4",
        alternativas: [
              {
                texto:"alternativa A",
                afirmacao:"afirmaca"
            },
            
            {
                texto:"alternativa B",
                afirmacao: "afirmacao"
            }
        ]
    },

    {
        enunciado: "Pergunta5",
        alternativas: [
              {
                  {
                texto:"alternativa A",
                afirmacao:"afirmaca"
            },
            
            {
                texto:"alternativa B",
                afirmacao: "afirmacao"
            }
            },
            
            {
                texto:"alternativa B",
                afirmacao: "afirmacao"
            }
        ]
    },

    {
        enunciado: "Pergunta6",
        alternativas: [
               {
                texto:"alternativa A",
                afirmacao:"afirmaca"
            },
            
            {
                texto:"alternativa B",
                afirmacao: "afirmacao"
            }
        ]
    },

    {
        enunciado: "Pergunta7",
        alternativas: [
               {
                texto:"alternativa A",
                afirmacao:"afirmaca"
            },
            
            {
                texto:"alternativa B",
                afirmacao: "afirmacao"
            }
        ]
    },
];

let atual:0;
let perguntaAtual:

function mostraPergunta() {
perguntaAtual = pergunta[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
}

function mostraAlternativa() {
for(const alternativa of perguntaAtual.alternativas){
    const botaoAlternativa = document.createElement("button");
    botaoAlternativa.textContent = alternativa.texto;
    botaoAlternativa.addEventListener("click", function{
        atual++;
        mostraPergunta();
    })
    caixaAlternativas.appendChild(botaoAlternativa); 
}
}

mostraPergunta();
