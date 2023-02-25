var titulo, subtitulo, texto;
var brilho;
var grupo;
var espaço, espaçoimagem;
var botao, botaoimagem;
var solar, solarimagem;
var terra, terraimagem;
var botao_terra, botao_planeta1, botao2, botao3, botao4, botao5, botao6, botao7, botao8;
var sair, sairimagem;
var astronauta, correndo, correndo_ft, parado, parado_ft;
var chao;
var planeta1, planeta1imagem;
var planeta2, planeta2imagem;
var planeta3, planeta3imagem;
var planeta4, planeta4imagem;
var planeta5, planeta5imagem;
var planeta6, planeta6imagem;
var planeta7, planeta7imagem;
var planeta8, planeta8imagem;


function preload(){
    //carrega as imagens
    brilho = loadImage("./Imagens/a.png");
    espaçoimagem = loadImage("./Imagens/inicio.png");
    botaoimagem = loadImage("./Imagens/play.png");
    solarimagem = loadImage("./Imagens/sistema solar.png");
    terraimagem = loadImage("./Imagens/terra.png");
    sairimagem = loadImage("./Imagens/Sair.png");

    planeta1imagem = loadImage("./Imagens/planeta1.png");
    planeta2imagem = loadImage("./Imagens/planeta2.png");
    planeta3imagem = loadImage("./Imagens/planeta3.png");
    planeta4imagem = loadImage("./Imagens/planeta4.png");
    planeta5imagem = loadImage("./Imagens/planeta5.png");
    planeta6imagem = loadImage("./Imagens/planeta6.png");
    planeta7imagem = loadImage("./Imagens/planeta7.png");
    planeta8imagem = loadImage("./Imagens/planeta8.png");

    correndo_ft = loadAnimation("./Imagens/correndo/c1.png", "./Imagens/correndo/c2.png","./Imagens/correndo/c3.png","./Imagens/correndo/c4.png","./Imagens/correndo/c5.png","./Imagens/correndo/c6.png");
    parado_ft = loadAnimation("./Imagens/parado/p1.png", "./Imagens/parado/p2.png", "./Imagens/parado/p3.png", "./Imagens/parado/p4.png", "./Imagens/parado/p5.png");
}
function setup() {
    createCanvas(windowWidth,windowHeight);
    grupo = new Group();


    var sprite = createSprite(500, 500);
    sprite.addImage(brilho);
    sprite.scale = 0.1;
    sprite.lifetime = 20;
    
    espaço = createSprite(width/2, height/2);
    espaço.addImage(espaçoimagem);
    espaço.scale = 0.9;

    solar = createSprite(width/2.1, height/2);
    solar.addImage(solarimagem);
    solar.scale = 0.89;
    solar.visible = false;

    botao = createSprite(width/2.1, height/1.8);
    botao.addImage(botaoimagem);
    botao.scale = 0.8;
    
    terra = createSprite(width/2, height/2);
    terra.addImage(terraimagem);
    terra.scale = 1.3;
    terra.visible = false;
    terra.velocityX = -5;

    planeta1 = createSprite(width/2, height/2);
    planeta1.addImage(planeta1imagem);
    planeta1.scale = 1.3;
    planeta1.visible = false;
    planeta1.velocityX = -5;

    planeta2 = createSprite(width/2, height/2);
    planeta2.addImage(planeta2imagem);
    planeta2.scale = 1.4;
    planeta2.visible = false;
    planeta2.velocityX = -5;

    planeta3 = createSprite(width/2, height/2);
    planeta3.addImage(planeta3imagem);
    planeta3.scale = 1.3;
    planeta3.visible = false;
    planeta3.velocityX = -5;

    planeta4 = createSprite(width/2, height/2);
    planeta4.addImage(planeta4imagem);
    planeta4.scale = 1.75;
    planeta4.visible = false;
    planeta4.velocityX = -5;

    planeta5 = createSprite(width/2, height/2);
    planeta5.addImage(planeta5imagem);
    planeta5.scale = 1.3;
    planeta5.visible = false;
    planeta5.velocityX = -5;

    planeta6 = createSprite(width/2, height/2);
    planeta6.addImage(planeta6imagem);
    planeta6.scale = 1.5;
    planeta6.visible = false;
    planeta6.velocityX = -5;

    planeta7 = createSprite(width/2, height/2);
    planeta7.addImage(planeta7imagem);
    planeta7.scale = 0.99;
    planeta7.visible = false;
    planeta7.velocityX = -5;

    planeta8 = createSprite(width/2, height/2);
    planeta8.addImage(planeta8imagem);
    planeta8.scale = 1.3;
    planeta8.visible = false;
    planeta8.velocityX = -5;
   
    botao_terra = createSprite(width/2-100, height/1.4, 120, 120);
    botao_terra.visible = false;

    botao_planeta1 = createSprite(width/2-210, height/2-110, 100, 100);
    botao_planeta1.visible = false;

    botao2 = createSprite(width/2-340, height/2+60, 60, 50);
    botao2.visible = false;

    botao3 = createSprite(width/2-20, height/2-230, 60, 70);
    botao3.visible = false;

    botao4 = createSprite(width/2+320, height/2-50, 180, 180);
    botao4.visible = false;

    botao5 = createSprite(width/2+500, height/2-330, 100, 150);
    botao5.visible = false;

    botao6 = createSprite(width/2+540, height/2+280, 120, 100);
    botao6.visible = true;

    botao7 = createSprite(width/2+670, height/2-80, 100, 120);
    botao7.visible = false;

    botao8 = createSprite(width/2+750, height/2+90, 50, 50);
    botao8.visible = false;

    /* sair = createSprite(width/2-210, height/2-110, 100, 100);
    sair.visible = false; */

    chao = createSprite(width/2, height-80, width, 20);
    chao.visible = false; 
    
    astronauta = createSprite(width/10-30, height-220);
    astronauta.addAnimation("correndo_ft", correndo_ft);
    astronauta.addAnimation("parado_ft", parado_ft);
    astronauta.scale = 0.3;
    astronauta.visible = false;
}

function draw() {
    background("black");
    //códigos que serão executados ao longo de todo o jogo
    
    if(espaçoimagem){
        botao_terra.destroy();
        botao_planeta1.destroy();
        botao2.destroy();
        botao3.destroy();
        botao4.destroy();
        botao5.destroy();
        botao6.destroy();
        botao7.destroy();
        botao8.destroy();
    }
    
    if(mousePressedOver(botao)){
        botao.visible = false;
        espaço.visible = false;
        solar.visible = true;
        //sair.destroy();
        
    }

    if(mousePressedOver(botao_terra)){
        botao.visible = false;
        espaço.visible = false;
        solar.visible = false;
        planeta1.visible = false;
        terra.visible = true;
        //sair.visible = true;
        botao_terra.destroy();
        botao_planeta1.destroy();
        botao2.destroy();
        botao3.destroy();
        botao4.destroy();
        botao5.destroy();
        botao6.destroy();
        botao7.destroy();
        botao8.destroy();
        astronauta.visible = true;
    }

    if(mousePressedOver(botao_planeta1)){
        botao.visible = false;
        espaço.visible = false;
        solar.visible = false;
        terra.visible = false;
        planeta1.visible = true;
        //sair.visible = true;
        botao_terra.destroy();
        botao_planeta1.destroy();
        botao2.destroy();
        botao3.destroy();
        botao4.destroy();
        botao5.destroy();
        botao6.destroy();
        botao7.destroy();
        botao8.destroy();
        astronauta.visible = true;
    }
    
    if(mousePressedOver(botao2)){
        botao.visible = false;
        espaço.visible = false;
        solar.visible = false;
        planeta2.visible = true;
        //sair.visible = true;
        botao_terra.destroy();
        botao_planeta1.destroy();
        botao2.destroy();
        botao3.destroy();
        botao4.destroy();
        botao5.destroy();
        botao6.destroy();
        botao7.destroy();
        botao8.destroy();
        astronauta.visible = true;
    }

    if(mousePressedOver(botao3)){
        botao.visible = false;
        espaço.visible = false;
        solar.visible = false;
        planeta3.visible = true;
        //sair.visible = true;
        botao_terra.destroy();
        botao_planeta1.destroy();
        botao2.destroy();
        botao3.destroy();
        botao4.destroy();
        botao5.destroy();
        botao6.destroy();
        botao7.destroy();
        botao8.destroy();
        astronauta.visible = true;
    }

    if(mousePressedOver(botao4)){
        botao.visible = false;
        espaço.visible = false;
        solar.visible = false;
        planeta4.visible = true;
        //sair.visible = true;
        botao_terra.destroy();
        botao_planeta1.destroy();
        botao2.destroy();
        botao3.destroy();
        botao4.destroy();
        botao5.destroy();
        botao6.destroy();
        botao7.destroy();
        botao8.destroy();
        astronauta.visible = true;
    }

    if(mousePressedOver(botao5)){
        botao.visible = false;
        espaço.visible = false;
        solar.visible = false;
        planeta5.visible = true;
        //sair.visible = true;
        botao_terra.destroy();
        botao_planeta1.destroy();
        botao2.destroy();
        botao3.destroy();
        botao4.destroy();
        botao5.destroy();
        botao6.destroy();
        botao7.destroy();
        botao8.destroy();
        astronauta.visible = true;
    }

    if(mousePressedOver(botao6)){
        botao.visible = false;
        espaço.visible = false;
        solar.visible = false;
        planeta6.visible = true;
        //sair.visible = true;
        botao_terra.destroy();
        botao_planeta1.destroy();
        botao2.destroy();
        botao3.destroy();
        botao4.destroy();
        botao5.destroy();
        botao6.destroy();
        botao7.destroy();
        botao8.destroy();
        astronauta.visible = true;
    }

    if(mousePressedOver(botao7)){
        botao.visible = false;
        espaço.visible = false;
        solar.visible = false;
        planeta7.visible = true;
        //sair.visible = true;
        botao_terra.destroy();
        botao_planeta1.destroy();
        botao2.destroy();
        botao3.destroy();
        botao4.destroy();
        botao5.destroy();
        botao6.destroy();
        botao7.destroy();
        botao8.destroy();
        astronauta.visible = true;
    }

    if(mousePressedOver(botao8)){
        botao.visible = false;
        espaço.visible = false;
        solar.visible = false;
        planeta8.visible = true;
        //sair.visible = true;
        botao_terra.destroy();
        botao_planeta1.destroy();
        botao2.destroy();
        botao3.destroy();
        botao4.destroy();
        botao5.destroy();
        botao6.destroy();
        botao7.destroy();
        botao8.destroy();
        astronauta.visible = true;
    }

    /*if(mousePressedOver(sair)){
        botao.visible = false;
        espaço.visible = false;
        sair.visible = false;
        sair.destroy();
    }*/

    if(keyDown("space")){
        astronauta.velocityY = -15;
    }
    astronauta.velocityY += 0.8;
    astronauta.collide(chao);

    if(terra.x < width/8){
        terra.x = width;
    }

    if(planeta1.x < width/8){
        planeta1.x = width;
    }

    if(planeta2.x < width/200){
        planeta2.x = width;
    }

    if(planeta3.x < width/200){
        planeta3.x = width;
    }

    if(planeta4.x < width/200){
        planeta4.x = width;
    }

    if(planeta5.x < width/200){
        planeta5.x = width;
    }

    if(planeta6.x < width/200){
        planeta6.x = width;
    }

    if(planeta7.x < width/200){
        planeta7.x = width;
    }

    if(planeta8.x < width/200){
        planeta8.x = width;
    }

    drawSprites();
}

function mouseClicked(){
    var sprite = createSprite(mouseX, mouseY);
    sprite.addImage(brilho);
    sprite.scale = 0.1;
    sprite.lifetime = 20;
    grupo.add(sprite);
    
  
}

function mouseReleased(){ 
    //soltou o mouse


}
