//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteLargura = 10;
let raqueteAltura = 90;

let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente ;
let chanceDeErrar = 0;


let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas(600,400);
}

function draw() {
  background(0);
  mostrarBolinha();
  movimentoBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  movimentaMinhaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}

function incluiPlacar(){
  fill (255);
  text(meusPontos,278,26);
  text(pontosDoOponente,321,26);
  
}

function marcaPonto(){
  
  if (xBolinha >590){
    meusPontos += 1;
  }
  
  if (xBolinha <10){
    pontosDoOponente += 1;
  }
  
}
  
function verificaColisaoRaquete(x,y){
  colidiu = collideRectCircle(x, y, raqueteLargura, raqueteAltura, xBolinha, yBolinha, raio);
  
  if (colidiu){
    
    velocidadeXBolinha *= - 1;
    
  }
  
}

  
function movimentaMinhaRaquete(){
    if(keyIsDown(UP_ARROW)){
      yRaquete -= 10; 
    }
  
    if(keyIsDown(DOWN_ARROW)){
      yRaquete += 10;
    }
      
    }

function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}


function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteLargura/2 - 90;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar
  calculaChanceDeErrar()
  
}

  
function mostraRaquete(x,y){
    rect(x,y,raqueteLargura,raqueteAltura);
  }

function mostraRaqueteOponente(){
    rect(xRaqueteOponente,yRaqueteOponente,raqueteLargura,raqueteAltura);
  }
  
function movimentoBolinha(){
    
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  }
  
function verificaColisaoBorda (){
  if (xBolinha + raio > width  ||  xBolinha - raio < 0) {
    velocidadeXBolinha *= - 1;
    
  }
  
  if (yBolinha + raio > height  ||  yBolinha - raio < 0) {
    velocidadeYBolinha *= - 1;
    
    }

  }
function mostrarBolinha () {
  circle(xBolinha, yBolinha, diametro);
}
  

