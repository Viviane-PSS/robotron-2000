const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document. querySelectorAll("[data-estatistica]");

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento, index)=>{
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.pecas);
    })
})

function manipulaDados(operacao, controle){

    const peca = controle.querySelector("[data-contador]");

    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1;
    }else{
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisticas(peca){

estatisticas.forEach((elemento) => {
    
    elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];  
});

}

// Mudar cores
const botaoCor = document.querySelectorAll("[data-cor]");
// const botaoCorMais = document.querySelector("#botao-cor-mais");
// const botaoCorMenos = document.querySelector("#botao-cor-menos");
const imgCor=document.querySelector("#robotron");
const coresRobotron = ["robotron.png","RobotronAmarelo.png", "RobotronBranco.png",
                        "RobotronPreto.png", "RobotronRosa.png","RobotronVermelho.png"];
let indexCor=0;

function mudarCorRobo(botao){
    if(botao ==="+"){
        indexCor++;
        if(indexCor>=coresRobotron.length) indexCor=0;
        imgCor.src = `./img/${coresRobotron[indexCor]}`;
    }else{
        
        indexCor--;
        if(indexCor<0) indexCor= coresRobotron.length-1;
        imgCor.src = `./img/${coresRobotron[indexCor]}`;
    }
}


botaoCor.forEach((elemento, i)=>{
    
    elemento.addEventListener("click",(evento) =>{
        mudarCorRobo(evento.target.dataset.cor);
    });
});   
