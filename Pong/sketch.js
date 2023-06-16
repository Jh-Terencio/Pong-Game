//Função responsável por criar o background
function setup() {
  createCanvas(600, 400);
}

//Função responsável por desenhar as coisas que criaremos
function draw() {
  background(0, 0, 0);
  bolinha();
  raquete1();
  //verificaColisaoRaquete();
  colisaoRaqueteBiblioteca(eixoXRaquete1, eixoYRaquete1);
  raquete2();
  colisaoRaqueteBiblioteca(eixoXRaquete2, eixoYRaquete2);
  incluiPlacar();
  marcaPonto();

}

//Bolinha 
let eixoXBolinha = 300;
let eixoYBolinha = 200;
let diametro = 15;
let velXBolinha = 6;
let velYBolinha = 6;
let raio = diametro/2;

function bolinha(){
  //o circle já uma função existente no P5, nela passamos o eixo X, eixo Y e o diametro da bolinha
  circle(eixoXBolinha, eixoYBolinha, diametro)
  eixoXBolinha += velXBolinha;
  eixoYBolinha += velYBolinha;
  //Aqui fazemos a verificação se a bolinha bate na parede ou não
  //Primeiro verificamos se a bolinha bate na parte direita da tela, ou seja, é maior que 600 que é o tamanho total da tela, o eixoXBolinha é o centro da bolinha, caso não somássemos o raio metade da bolinha passaria da tela e não é isso que queremos no jogo
  //Depois verificamos se a bolinha bate na parede esquerda, diferente do anterior nós subtraímos o raio da bolinha, pois caso contrário aconteceria o mesmo erro , então levando em consideração um plano cartesiano sempre que vamos para a esquerda os valores de X diminui, por isso temos que subtrair o raio
  if(eixoXBolinha + raio > width || eixoXBolinha - raio< 0){
    velXBolinha *= -1;
  }
  //Aqui fazemos a verificação se a bolinha bate no teto ou no chão, a explicação é a mesma da anterior
   if(eixoYBolinha + raio > height || eixoYBolinha - raio < 0){
     velYBolinha *= -1;
   }
}

//Minha raquete
let eixoXRaquete1 = 5;
let eixoYRaquete1 = 160;
let largura = 8;
let comprimento = 80;

let colidiu = false;

function raquete1(){
  //o rect já uma função existente no P5, nela passamos o eixo X, eixo Y e a largura e o comprimento
  rect(eixoXRaquete1, eixoYRaquete1, largura, comprimento)
  
  //keyISDown é uma função também existente, ela verifica se determinada tecla está sendo apertado ou não
  if(keyIsDown(UP_ARROW) && eixoYRaquete1 > 0){
    eixoYRaquete1 -= 10;
  }
  if(keyIsDown(DOWN_ARROW) && eixoYRaquete1 < 320){
    eixoYRaquete1 += 10;
  }
} 

//Colisão

function verificaColisaoRaquete(){
  if(eixoXBolinha - raio < eixoXRaquete1 + largura && eixoYBolinha - raio < eixoYRaquete1 + comprimento  && eixoYBolinha + raio > eixoYRaquete1){
    velXBolinha *= -1;
  }
}

function colisaoRaqueteBiblioteca(x, y){
  colidiu = collideRectCircle(x, y, largura, comprimento, eixoXBolinha, eixoYBolinha, raio);
  if(colidiu){
    velXBolinha *= -1;
  }
}

//Raquete oponente
let eixoXRaquete2 = 585;
let eixoYRaquete2 = 160;
let velYRaquete2;

function raquete2(){
  rect(eixoXRaquete2, eixoYRaquete2, largura, comprimento);
  if(keyIsDown(87) && eixoYRaquete2 > 0){
    eixoYRaquete2 -= 10;
  }
  if(keyIsDown(83) && eixoYRaquete2 < 320){
    eixoYRaquete2 += 10;
  }
  
}

//placar jogo
let meusPontos = 0;
let pontosOponente = 0;

function incluiPlacar(){
  stroke(255);
  textSize(18);
  textAlign(CENTER);
  fill(0, 0 ,0);
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(0, 0, 0);
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosOponente, 470, 26);
}

function marcaPonto(){
  if(eixoXBolinha > 590){
    meusPontos += 1;
  }
  if(eixoXBolinha < 10){
    pontosOponente += 1;
  }
}

function bolinhaNaoFicaPresa(){
    if (XBolinha - raio < 0){
    XBolinha = 23
    }
}